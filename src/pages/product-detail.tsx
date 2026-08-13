import { Link, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useItems, DataAdapter } from "@/lib/data-adapter"
import { addToCart } from "@/lib/cart"
import { sendProductToWhatsApp } from "@/lib/whatsapp"
import { useState, useRef, useEffect } from "react"
import { ImageLightbox } from "@/components/image-lightbox"
import { ImageLoader, ProductImageLoader } from "@/components/image-loader"

const SIZES = ["S", "M", "L", "XL"]

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { items } = useItems()
  
  const item = items.find((product) => product.slug === slug)
  
  // Estado para productos relacionados - solo se genera una vez por producto
  const [related, setRelated] = useState<any[]>([])
  const [relatedLoaded, setRelatedLoaded] = useState<string | null>(null)

  // Generar productos relacionados solo cuando cambia el producto
  useEffect(() => {
    if (item && slug && relatedLoaded !== slug) {
      const relatedItems = DataAdapter.getRelatedItemsByChest(slug, item.cofre_id, 3)
      setRelated(relatedItems)
      setRelatedLoaded(slug)
    }
  }, [slug, item?.cofre_id, relatedLoaded])

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [zoom, setZoom] = useState(false)
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 })
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [slug])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = imgRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setZoomPos({ x, y })
  }

  if (!item) {
    return (
      <section className="container mx-auto px-6 py-24">
        <h1 className="text-3xl font-bold mb-4 dark:text-white">Producto no encontrado</h1>
        <Link to="/" className="text-sm underline dark:text-gray-300">
          Volver al inicio
        </Link>
      </section>
    )
  }

  const images = item.imagen_url

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-12">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

        {/* Left: Gallery */}
        <section>
          <div
            ref={imgRef}
            className="relative overflow-hidden "
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
            onMouseMove={handleMouseMove}
          >
            {/* Lupa button */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute top-3 right-3 z-10 bg-white/80 dark:bg-black/60 hover:bg-white dark:hover:bg-black p-2 transition-colors"
              aria-label="Ver imagen ampliada"
            >
              <svg className="w-5 h-5 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <ImageLoader
              src={images[selectedImage]}
              alt={item.nombre}
              className="w-full h-auto object-cover border border-gray-100 dark:border-gray-700 transition-transform duration-200 scale-100"
              style={{
                transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                transform: zoom ? "scale(3)" : "scale(1)",
              }}
              draggable={false}
            />
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="grid grid-cols-6 gap-2 mt-4">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`border transition-all ${
                    selectedImage === i
                      ? "border-black dark:border-white"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-400"
                  }`}
                >
                  <ImageLoader
                    src={img}
                    alt={`Vista ${i + 1}`}
                    className="w-full aspect-square object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </section>

        {/* Right: Info */}
        <section className="flex flex-col space-y-8">
          <h1 className="text-3xl font-light dark:text-white">{item.nombre}</h1>

          {/* Hero and Chest info */}
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <p>
              <span className="font-medium">Héroe:</span>{" "}
              <Link 
                to={`/search?q=${encodeURIComponent(item.heroe.slug)}`}
                className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              >
                {item.heroe.nombre}
              </Link>
            </p>
            <p><span className="font-medium">Atributo:</span> {item.heroe.atributo}</p>
            <p>
              <span className="font-medium">Cofre:</span>{" "}
              <Link 
                to={`/search?q=${encodeURIComponent(item.cofre.anio.toString())}`}
                className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              >
                {item.cofre.nombre} ({item.cofre.anio})
              </Link>
            </p>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-4">
            <span className="text-4xl font-light text-gray-500 dark:text-gray-300">
             S/{item.precio}
            </span>
          </div>

          {/* Size selector - Hidden */}
          <div className="hidden">
            <label className="uppercase tracking-widest text-xs font-bold block dark:text-white">
              Talla
            </label>
            <div className="flex gap-2">
              {SIZES.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 border flex items-center justify-center text-sm transition-colors dark:text-white ${
                    selectedSize === size
                      ? "border-black dark:border-white font-bold"
                      : "border-gray-300 dark:border-gray-600 hover:border-black dark:hover:border-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="flex items-center gap-4">
            {/* Quantity selector - Hidden */}
            <div className="hidden flex border border-gray-300 dark:border-gray-600 h-14">
              <button
                className="px-4 text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                −
              </button>
              <span className="w-12 flex items-center justify-center text-sm dark:text-white">
                {quantity}
              </span>
              <button
                className="px-4 text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>

            <Button
              className="w-full h-14 uppercase tracking-widest text-xs font-bold"
              disabled={item.estado === 2}
              variant={item.estado === 2 ? "outline" : "default"}
              onClick={() => {
                if (item.estado === 2) return
                // Solo agrega 1 producto (quantity se mantiene por defecto en 1)
                addToCart({
                  id: item.id,
                  name: item.nombre,
                  price: item.precio || 0,
                  image: item.imagen_url[0],
                })
              }}
            >
              {item.estado === 2 ? "Agotado" : "Añadir al carrito"}
            </Button>
          </div>

          {/* Buy via WhatsApp */}
          {item.estado !== 2 && (
            <Button
              variant="outline"
              className="w-full h-12 flex items-center justify-center gap-2 uppercase tracking-widest text-xs font-bold"
              onClick={() => sendProductToWhatsApp(item.nombre, item.precio || 0, 1)}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.882l6.186-1.443A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.724.868.936-3.42-.235-.372A9.818 9.818 0 1112 21.818z"/>
              </svg>
              Comprar por WhatsApp
            </Button>
          )}

          {/* Description */}
          <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            <p className="font-bold dark:text-gray-300">No tradeable ni comerciable</p>
            <p>Envío mediante regalo, necesario 30 días de amistad</p>
          </div>
        </section>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="mt-20 pt-16 border-t border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-light mb-10 dark:text-white">Item relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {related.map((relatedItem) => (
              <article key={relatedItem.id} className="flex flex-col items-center">
                <Link to={`/item/${relatedItem.slug}`} className="w-full">
                  <div className="relative w-full aspect-[4/4] overflow-hidden bg-gray-100 dark:bg-gray-800 mb-4 cursor-pointer group">
                    {relatedItem.estado === 2 && (
                      <Badge
                        variant="destructive"
                        className="absolute z-10 top-3 left-3 uppercase text-[10px] font-semibold pointer-events-none bg-black text-white hover:bg-black dark:bg-black dark:text-white dark:hover:bg-black"
                      >
                        AGOTADO
                      </Badge>
                    )}
                    <ImageLoader
                      src={relatedItem.imagen_url[0]}
                      alt={relatedItem.nombre}
                      className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-500 group-hover:scale-125"
                    />
                  </div>
                </Link>
                
                <h3 className="text-sm font-medium mb-2 text-center dark:text-white">{relatedItem.nombre}</h3>
                
                <div className="flex items-center justify-center gap-2">
                  <p className="text-sm font-semibold dark:text-white">S/{relatedItem.precio}</p>
                </div>
                
                <div className="text-xs text-gray-500 dark:text-gray-400 text-center mb-2">
                  <p>{relatedItem.heroe.nombre} • {relatedItem.cofre.nombre}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {lightboxOpen && (
        <ImageLightbox
          images={images}
          initialIndex={selectedImage}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </main>
  )
}

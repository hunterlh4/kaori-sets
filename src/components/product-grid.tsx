import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import { addToCart } from "@/lib/cart"
import { useItems } from "@/lib/data-adapter"
import type { ItemCompleto } from "@/types/database"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface ProductGridProps {
  items?: ItemCompleto[]
  showIntroduction?: boolean
}

const IMAGE_TRANSITION_SECONDS = 0.55
const HOVER_START_DELAY_MS = 900
const GALLERY_STEP_MS = 1600

export function ProductGrid({ items: itemsProp, showIntroduction = false }: ProductGridProps) {
  const { items: defaultItems } = useItems()
  const items = itemsProp || defaultItems
  
  const [hoveredItemId, setHoveredItemId] = useState<number | null>(null)
  const [galleryIndex, setGalleryIndex] = useState(0)

  useEffect(() => {
    if (hoveredItemId === null) {
      return
    }

    const hoveredItem = items.find((item) => item.id === hoveredItemId)
    const galleryLength = hoveredItem?.imagen_url?.length ?? 0

    if (galleryLength <= 1) {
      return
    }

    let intervalId: number | undefined

    const timeoutId = window.setTimeout(() => {
      setGalleryIndex((current) => (current + 1) % galleryLength)

      intervalId = window.setInterval(() => {
        setGalleryIndex((current) => (current + 1) % galleryLength)
      }, GALLERY_STEP_MS)
    }, HOVER_START_DELAY_MS)

    return () => {
      window.clearTimeout(timeoutId)
      if (intervalId !== undefined) {
        window.clearInterval(intervalId)
      }
    }
  }, [hoveredItemId, items])

  return (
    <main className={`container mx-auto px-6 ${showIntroduction ? 'py-12' : 'pb-12'}`}>
      {/* Section Introduction - Only show when requested */}
      {showIntroduction && (
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
            Cada pieza es única y nunca será replicada
          </p>
          <h2 className="text-3xl font-bold tracking-widest uppercase dark:text-white">Diseños</h2>
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {items.map((item) => (
          <article key={item.id} className="flex flex-col items-center">
            <Link to={`/item/${item.slug}`} className="w-full">
              <div
                className="relative w-full aspect-[4/4] overflow-hidden bg-gray-100 dark:bg-gray-800 mb-4 cursor-pointer"
                onMouseEnter={() => {
                  setHoveredItemId(item.id)
                  setGalleryIndex(0)
                }}
                onMouseLeave={() => {
                  setHoveredItemId(null)
                  setGalleryIndex(0)
                }}
              >
                {/* Badge según estado */}
                {item.estado === 2 && (
                  <Badge
                    variant="destructive"
                    className="absolute z-10 top-3 left-3 uppercase text-[10px] font-semibold pointer-events-none bg-black text-white hover:bg-black dark:bg-black dark:text-white dark:hover:bg-black"
                  >
                    AGOTADO
                  </Badge>
                )}
                
                <AnimatePresence mode="sync" initial={false}>
                  <motion.img
                    key={`${item.id}-${
                      hoveredItemId === item.id && item.imagen_url.length > 1
                        ? item.imagen_url[galleryIndex]
                        : item.imagen_url[0]
                    }`}
                    alt={item.nombre}
                    className="absolute inset-0 w-full h-full object-cover scale-110"
                    src={
                      hoveredItemId === item.id && item.imagen_url.length > 1
                        ? item.imagen_url[galleryIndex]
                        : item.imagen_url[0]
                    }
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: IMAGE_TRANSITION_SECONDS, ease: "easeInOut" }}
                  />
                </AnimatePresence>
              </div>
            </Link>
            
            <h3 className="text-sm font-medium mb-2 text-center dark:text-white">{item.nombre}</h3>
{/*             
            <div className="flex items-center justify-center gap-2">
              <p className="text-sm font-semibold dark:text-white">S/{item.precio}</p>
            </div> */}
            
            {/* <div className="text-xs text-gray-500 dark:text-gray-400 text-center mb-2">
              <p>{item.heroe.nombre} • {item.cofre.nombre}</p>
            </div> */}
            
            <Button
              className="mt-0 cursor-pointer"
              disabled={item.estado === 2} // estado 2 = agotado
              variant={item.estado === 2 ? "outline" : "default"}
              title={item.estado === 2 ? "Producto agotado" : `Agregar ${item.nombre} al carrito`}
              onClick={() => {
                if (item.estado === 2) {
                  return
                }

                addToCart({
                  id: item.id,
                  name: item.nombre,
                  price: item.precio || 0,
                  image: item.imagen_url[0],
                })
              }}
            >
              {item.estado === 2 ? "Agotado" : "Agregar al carrito"}
            </Button>
          </article>
        ))}
      </div>
    </main>
  )
}


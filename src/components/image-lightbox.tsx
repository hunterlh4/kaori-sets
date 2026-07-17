import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

interface ImageLightboxProps {
  images: string[]
  initialIndex?: number
  onClose: () => void
}

export function ImageLightbox({ images, initialIndex = 0, onClose }: ImageLightboxProps) {
  const [current, setCurrent] = useState(initialIndex)
  const [zoomed, setZoomed] = useState(false)
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 })
  const imgRef = useRef<HTMLImageElement>(null)

  const prev = () => { setZoomed(false); setCurrent((i) => (i - 1 + images.length) % images.length) }
  const next = () => { setZoomed(false); setCurrent((i) => (i + 1) % images.length) }

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    e.stopPropagation()
    if (!zoomed) {
      const rect = imgRef.current?.getBoundingClientRect()
      if (rect) {
        setZoomPos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }
    }
    setZoomed((z) => !z)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!zoomed) return
    const rect = imgRef.current?.getBoundingClientRect()
    if (!rect) return
    setZoomPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { if (zoomed) setZoomed(false); else onClose() }
      if (e.key === "ArrowLeft" && !zoomed) prev()
      if (e.key === "ArrowRight" && !zoomed) next()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [zoomed])

  return createPortal(
    <div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      onClick={zoomed ? undefined : onClose}
    >
      {/* Counter top-left */}
      {!zoomed && (
        <span className="absolute top-3 left-4 text-white/40 text-xs select-none z-10">
          {current + 1} / {images.length}
        </span>
      )}

      {/* Close top-right */}
      {!zoomed && (
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-white/40 hover:text-white transition-colors z-10"
          aria-label="Cerrar"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        ref={imgRef}
        className="overflow-hidden w-full h-full flex items-center justify-center"
        onClick={zoomed ? undefined : onClose}
      >
        <img
          ref={imgRef}
          src={images[current]}
          alt={`Imagen ${current + 1}`}
          className="select-none transition-transform duration-300"
          style={{
            maxHeight: zoomed ? "none" : "100dvh",
            maxWidth: zoomed ? "none" : "100%",
            width: zoomed ? "auto" : undefined,
            height: zoomed ? "auto" : undefined,
            objectFit: "contain",
            transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
            transform: zoomed ? "scale(3)" : "scale(1)",
            cursor: zoomed ? "zoom-out" : "zoom-in",
          }}
          onClick={handleClick}
          onMouseMove={handleMouseMove}
          draggable={false}
        />
      </div>

      {/* Arrows */}
      {images.length > 1 && !zoomed && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-10"
            aria-label="Anterior"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors z-10"
            aria-label="Siguiente"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>,
    document.body
  )
}

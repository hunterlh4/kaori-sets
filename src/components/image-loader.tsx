import { useState } from "react"
import { motion } from "framer-motion"

interface ImageLoaderProps {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  draggable?: boolean
}

export function ImageLoader({ src, alt, className = "", style, draggable = false }: ImageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    // Delay artificial para ver el spinner (quitar en producción)
    // setTimeout(() => {
      setIsLoading(false)
    // }, 20000) // 2 segundos de delay
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  return (
    <div className="relative w-full h-full">
      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <div className="relative">
            <div className="w-8 h-8 border-2 border-gray-300 dark:border-gray-600 border-t-gray-600 dark:border-t-gray-300 rounded-full animate-spin"></div>
          </div>
        </div>
      )}

      {/* Error state */}
      {hasError && !isLoading && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <div className="text-center text-gray-400 dark:text-gray-500">
            <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs">Error</span>
          </div>
        </div>
      )}

      {/* Actual image */}
      <motion.img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={style}
        draggable={draggable}
        onLoad={handleLoad}
        onError={handleError}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  )
}

// Componente específico para héroes con aspect ratio fijo
interface HeroImageLoaderProps {
  src: string
  alt: string
  className?: string
}

export function HeroImageLoader({ src, alt, className = "" }: HeroImageLoaderProps) {
  return (
    <div className={`relative w-full aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800 ${className}`}>
      <ImageLoader
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  )
}

// Componente específico para productos
interface ProductImageLoaderProps {
  src: string
  alt: string
  className?: string
}

export function ProductImageLoader({ src, alt, className = "" }: ProductImageLoaderProps) {
  return (
    <div className={`relative w-full aspect-[4/4] overflow-hidden bg-gray-100 dark:bg-gray-800 ${className}`}>
      <ImageLoader
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  )
}
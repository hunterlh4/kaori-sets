import { useSearchParams, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { SearchProductList } from "@/components/search-product-list"
import { SEO, useSearchSEO } from "@/components/seo"

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "")

  // Detectar si viene del home (donde hay transición) o de otra página
  const comesFromHome = location.state?.from === 'home'

  // Sincronizar el input con los parámetros de URL
  useEffect(() => {
    const urlSearchTerm = searchParams.get("q") || ""
    setSearchTerm(urlSearchTerm)
  }, [searchParams])

  // Actualizar URL cuando cambia el término de búsqueda
  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    
    if (value.trim()) {
      setSearchParams({ q: value })
    } else {
      // Si no hay búsqueda, quitar el parámetro pero quedarse en /search
      setSearchParams({})
    }
  }

  // SEO dinámico para la búsqueda
  const seoProps = useSearchSEO(searchTerm)

  return (
    <>
      <SEO {...seoProps} />
      <main className="pt-20">
      {/* Compact Search Header with Video Background */}
      <motion.section 
        initial={{ height: comesFromHome ? "100vh" : "300px" }}
        animate={{ height: "300px" }}
        transition={{ duration: comesFromHome ? 0.8 : 0, ease: "easeInOut" }}
        className="relative w-full flex items-center justify-center overflow-hidden"
      >
        {/* Background Video - Same as home but in smaller container */}
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          initial={{ scale: comesFromHome ? 1 : 1.2 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: comesFromHome ? 0.8 : 0, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.steamstatic.com/apps/dota2/videos/dota_react/darkcarnival/dark_carnival_header_background.mp4" type="video/mp4" />
        </motion.video>

        {/* Search Overlay */}
        <motion.div 
          initial={{ scale: comesFromHome ? 1 : 0.8 }}
          animate={{ scale: 0.8 }}
          transition={{ duration: comesFromHome ? 0.8 : 0, ease: "easeInOut" }}
          className="relative z-10 text-center px-4"
        >
          <motion.h1 
            initial={{ y: comesFromHome ? -20 : 0 }}
            animate={{ y: 0 }}
            transition={{ delay: comesFromHome ? 0.3 : 0, duration: comesFromHome ? 0.5 : 0 }}
            className="text-2xl font-light text-white mb-6"
          >
            Buscar productos
          </motion.h1>
          <motion.div
            initial={{ width: "100%", maxWidth: comesFromHome ? "28rem" : "24rem" }}
            animate={{ width: "100%", maxWidth: "24rem" }}
            transition={{ duration: comesFromHome ? 0.8 : 0, ease: "easeInOut" }}
          >
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 text-lg font-medium tracking-wide w-full focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 drop-shadow-lg"
              autoFocus
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Search Results */}
      <motion.div
        initial={{ y: comesFromHome ? 50 : 0 }}
        animate={{ y: 0 }}
        transition={{ delay: comesFromHome ? 0.4 : 0, duration: comesFromHome ? 0.6 : 0 }}
      >
        <SearchProductList searchTerm={searchTerm} />
      </motion.div>
    </main>
    </>
  )
}
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export function Home() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`, { state: { from: 'home' } })
    }
  }

  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    
    // Búsqueda en tiempo real - navegar cuando el usuario escriba
    if (value.trim()) {
      navigate(`/search?q=${encodeURIComponent(value)}`, { state: { from: 'home' } })
    }
  }

  return (
    <div>
      {/* Hero Section with Search */}
      <motion.section 
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        exit={{ scale: 0.9, y: -50 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Background Video */}
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          exit={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <source src="https://cdn.steamstatic.com/apps/dota2/videos/dota_react/darkcarnival/dark_carnival_header_background.mp4" type="video/mp4" />
        </motion.video>

        {/* Search Overlay */}
        <motion.div 
          className="relative z-10 text-center px-4"
          exit={{ y: -100 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSearchSubmit}>
            <motion.input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/70 text-lg md:text-xl font-medium tracking-wide w-full max-w-md focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 drop-shadow-lg"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </form>
        </motion.div>
      </motion.section>
    </div>
  )
}


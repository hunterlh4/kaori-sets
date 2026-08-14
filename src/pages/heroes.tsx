import { Link } from "react-router-dom"
import { useHeroes } from "@/lib/data-adapter"
import { useState } from "react"
import { motion } from "framer-motion"
import { SEO } from "@/components/seo"
import { HeroImageLoader } from "@/components/image-loader"

export function Heroes() {
  const { heroes } = useHeroes()
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
  }

  // Filtrar héroes basado en el término de búsqueda
  const filteredHeroes = heroes.filter((hero) => 
    hero.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hero.atributo.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <SEO 
        title="Héroes de Dota 2"
        description="Explora todos los héroes de Dota 2 disponibles en Kaori Sets. Encuentra sets de tus héroes favoritos de fuerza, agilidad e inteligencia."
        url="https://kaori-sets.vercel.app/heroes"
      />
      <main className="pt-20 pb-12">
      <div className="container mx-auto px-6">
        {/* Header with Search */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-3xl font-bold dark:text-white mb-4">Héroes</h1>
          
          {/* Search Bar */}
          <div className="flex justify-center mb-8">
            <motion.input
              type="text"
              placeholder="Buscar ..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="bg-white/10 backdrop-blur-sm border border-gray-300 dark:border-white/20 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/70 text-lg font-medium tracking-wide w-full max-w-md focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-white/50 focus:border-gray-400 dark:focus:border-white/50 drop-shadow-lg dark:bg-black/20"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>

        {/* Heroes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-0">
          {filteredHeroes.map((hero) => (
            <Link
              key={hero.id}
              to={`/search?q=${encodeURIComponent(hero.slug)}`}
              className="group block"
            >
              <HeroImageLoader
                src={`/${hero.imagen_url}`}
                alt={hero.nombre}
                className="group-hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
          ))}
        </div>

        {/* No results message */}
        {searchTerm && filteredHeroes.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No se encontraron héroes que coincidan con "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </main>
    </>
  )
}
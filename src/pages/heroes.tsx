import { Link } from "react-router-dom"
import { useHeroes } from "@/lib/data-adapter"

export function Heroes() {
  const { heroes } = useHeroes()

  return (
    <main className="pt-20 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-3xl font-bold dark:text-white mb-4">Héroes</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Explora todos los héroes de Dota 2
          </p>
        </div>

        {/* Heroes Grid - Completamente pegadas, sin zoom, más anchas, responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-0">
          {heroes.map((hero) => (
            <Link
              key={hero.id}
              to={`/search?q=${encodeURIComponent(hero.slug)}`}
              className="group block"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={`/${hero.imagen_url}`}
                  alt={hero.nombre}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
import { Link } from "react-router-dom"
import { DataAdapter } from "@/lib/data-adapter"

export function Treasures() {
  const treasures = DataAdapter.getCofres()

  return (
    <main className="pt-20 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 pt-8">
          <h1 className="text-3xl font-bold dark:text-white mb-4">Tesoros</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Explora todos los cofres y tesoros de Dota 2
          </p>
        </div>

        {/* Treasures Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {treasures.map((treasure) => (
            <Link
              key={treasure.id}
              to={`/search?q=${encodeURIComponent(treasure.anio.toString())}`}
              className="group flex flex-col"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 mb-4 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={`/${treasure.imagen_url}`}
                  alt={treasure.nombre}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {treasure.nombre}
                </h3>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span>{treasure.anio}</span>
                  {treasure.sigla && (
                    <>
                      <span>•</span>
                      <span>{treasure.sigla}</span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
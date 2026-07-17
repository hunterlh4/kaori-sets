import { useMemo } from "react"
import { ProductGrid } from "@/components/product-grid"
import { useItems } from "@/lib/data-adapter"

interface SearchProductListProps {
  searchTerm: string
}

export function SearchProductList({ searchTerm }: SearchProductListProps) {
  const { items } = useItems()

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) {
      // Si no hay término de búsqueda, mostrar todos los productos
      return items
    }

    const searchLower = searchTerm.toLowerCase().trim()
    
    // Buscar por diferentes criterios
    return items.filter((item) => {
      // Buscar por slug del set/cache
      if (item.slug.toLowerCase().includes(searchLower)) {
        return true
      }
      
      // Buscar por nombre del héroe
      if (item.heroe.nombre.toLowerCase().includes(searchLower)) {
        return true
      }
      
      // Buscar por año del cofre (convertir a string para búsqueda parcial)
      if (item.cofre.anio.toString().includes(searchLower)) {
        return true
      }
      
      // Buscar por nombre del cofre
      if (item.cofre.nombre.toLowerCase().includes(searchLower)) {
        return true
      }
      
      // Buscar por nombre del item
      if (item.nombre.toLowerCase().includes(searchLower)) {
        return true
      }

      // Buscar por atributo del héroe
      if (item.heroe.atributo.toLowerCase().includes(searchLower)) {
        return true
      }
      
      return false
    })
  }, [searchTerm, items])

  return (
    <div>
      {/* Mostrar resultados de búsqueda */}
      {searchTerm.trim() ? (
        <div className="container mx-auto px-6 pt-4 pb-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {filteredItems.length > 0 
              ? `${filteredItems.length} resultado${filteredItems.length !== 1 ? 's' : ''} para "${searchTerm}"`
              : `No se encontraron resultados para "${searchTerm}"`
            }
          </p>
        </div>
      ) : (
        <div className="container mx-auto px-6 pt-4 pb-2">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Mostrando todos los productos
          </p>
        </div>
      )}
      
      <ProductGrid items={filteredItems} showIntroduction={false} />
    </div>
  )
}
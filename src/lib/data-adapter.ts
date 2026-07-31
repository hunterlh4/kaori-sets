import type { ItemCompleto } from '../types/database'
import { mockHeroes } from '../data/heroe'
import { mockCofres } from '../data/treasure'
import { mockVentas } from '../data/ventas'
import { mockItems  } from '../data/item'

// Adaptador temporal para usar datos mock hasta conectar Supabase
export class DataAdapter {
  // Obtener todos los items con sus relaciones
  static getItemsCompletos(): ItemCompleto[] {
    return mockItems.map(item => {
      const heroe = mockHeroes.find(h => h.id === item.heroe_id)!
      const cofre = mockCofres.find(c => c.id === item.cofre_id)!
      
      // Calcular precio promedio de ventas
      const ventasItem = mockVentas.filter(v => v.item_id === item.id)
      const precio_promedio = ventasItem.length > 0 
        ? ventasItem.reduce((sum, v) => sum + v.precio, 0) / ventasItem.length
        : undefined

      return {
        ...item,
        heroe,
        cofre,
        precio_promedio
      }
    })
  }

  // Buscar items por nombre, héroe o cofre
  static searchItems(query: string): ItemCompleto[] {
    const allItems = this.getItemsCompletos()
    const searchTerm = query.toLowerCase()
    
    return allItems.filter(item => 
      item.nombre.toLowerCase().includes(searchTerm) ||
      item.heroe.nombre.toLowerCase().includes(searchTerm) ||
      item.cofre.nombre.toLowerCase().includes(searchTerm) ||
      item.heroe.atributo.toLowerCase().includes(searchTerm)
    )
  }

  // Filtrar por estado
  static getItemsByEstado(estado: number): ItemCompleto[] {
    return this.getItemsCompletos().filter(item => item.estado === estado)
  }

  // Obtener item por slug
  static getItemBySlug(slug: string): ItemCompleto | undefined {
    return this.getItemsCompletos().find(item => item.slug === slug)
  }

  // Obtener items por héroe
  static getItemsByHeroe(heroeId: number): ItemCompleto[] {
    return this.getItemsCompletos().filter(item => item.heroe_id === heroeId)
  }

  // Obtener items por cofre
  static getItemsByCofre(cofreId: number): ItemCompleto[] {
    return this.getItemsCompletos().filter(item => item.cofre_id === cofreId)
  }

  // Obtener todos los héroes
  static getHeroes() {
    return mockHeroes
  }

  // Obtener todos los cofres
  static getCofres() {
    return mockCofres
  }

  // Buscar héroes por nombre o atributo
  static searchHeroes(query: string) {
    const searchTerm = query.toLowerCase()
    return mockHeroes.filter(heroe => 
      heroe.nombre.toLowerCase().includes(searchTerm) ||
      heroe.atributo.toLowerCase().includes(searchTerm)
    )
  }

  // Obtener héroes por atributo
  static getHeroesByAtributo(atributo: string) {
    return mockHeroes.filter(heroe => 
      heroe.atributo.toLowerCase() === atributo.toLowerCase()
    )
  }

  // Obtener items relacionados por cofre (excluyendo el actual) - aleatorios
  static getRelatedItemsByChest(currentSlug: string, cofreId: number, limit: number = 3) {
    const relatedItems = this.getItemsCompletos()
      .filter(item => item.slug !== currentSlug && item.cofre_id === cofreId)
    
    // Función para mezclar array aleatoriamente (Fisher-Yates shuffle)
    const shuffleArray = <T>(array: T[]): T[] => {
      const shuffled = [...array]
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
      }
      return shuffled
    }
    
    // Mezclar aleatoriamente y tomar solo la cantidad solicitada
    return shuffleArray(relatedItems).slice(0, limit)
  }
}

// Hook personalizado para React (opcional)
export const useItems = () => {
  return {
    items: DataAdapter.getItemsCompletos(),
    searchItems: DataAdapter.searchItems,
    getItemsByEstado: DataAdapter.getItemsByEstado,
    getItemBySlug: DataAdapter.getItemBySlug,
    getItemsByHeroe: DataAdapter.getItemsByHeroe,
    getItemsByCofre: DataAdapter.getItemsByCofre
  }
}

// Hook para héroes
export const useHeroes = () => {
  return {
    heroes: DataAdapter.getHeroes(),
    searchHeroes: DataAdapter.searchHeroes,
    getHeroesByAtributo: DataAdapter.getHeroesByAtributo
  }
}

// Hook para cofres
export const useCofres = () => {
  return {
    cofres: DataAdapter.getCofres()
  }
}
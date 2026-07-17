// Tipos que coinciden con el esquema SQL
export interface Heroe {
  id: number
  nombre: string
  atributo: string
  imagen_url?: string
  slug: string
  estado: boolean
  created_at: string
}

export interface CofreCache {
  id: number
  anio: number
  sigla: string
  nombre: string
  imagen_url?: string
  slug: string
  estado: boolean
  created_at: string
}

export interface Item {
  id: number
  heroe_id: number
  cofre_id: number
  nombre: string
  precio?: number
  slug: string
  imagen_url: string[]  // Ahora es array de strings
  estado: number // 0 inactivo, 1 activo, 2 agotado
  created_at: string
}

export interface GaleriaItem {
  id: number
  item_id: number
  orden: number
  tipo: number // 1 set cache, 2 ventas
  imagen_url: string
  estado: boolean
  created_at: string
}

export interface Venta {
  id: number
  fecha: string
  item_id: number
  precio: number
  created_at: string
}

// Tipo combinado para mostrar en el frontend
export interface ItemCompleto extends Item {
  heroe: Heroe
  cofre: CofreCache
  precio_promedio?: number
}
// Utilidades para manejar las rarezas de items

export const RAREZA_COLORES = {
  1: '', // común - sin color
  2: 'rgb(142, 192, 33)', // raro - verde
  3: 'rgb(251, 134, 0)', // muy raro - naranja
  4: 'rgb(226, 172, 63)' // ultra raro - dorado
} as const

export const RAREZA_NOMBRES = {
  1: 'Común',
  2: 'Raro',
  3: 'Muy Raro', 
  4: 'Ultra Raro'
} as const

/**
 * Obtiene el color RGB para una rareza específica
 * @param rareza - Número del 1 al 4
 * @returns String con el color RGB o vacío para común
 */
export function getRarezaColor(rareza: number): string {
  return RAREZA_COLORES[rareza as keyof typeof RAREZA_COLORES] || ''
}

/**
 * Obtiene el nombre de la rareza
 * @param rareza - Número del 1 al 4
 * @returns String con el nombre de la rareza
 */
export function getRarezaNombre(rareza: number): string {
  return RAREZA_NOMBRES[rareza as keyof typeof RAREZA_NOMBRES] || 'Común'
}

/**
 * Obtiene las clases CSS para aplicar el color de rareza
 * @param rareza - Número del 1 al 4
 * @returns Objeto con estilos CSS
 */
export function getRarezaStyles(rareza: number): { color?: string } {
  const color = getRarezaColor(rareza)
  return color ? { color } : {}
}
import type { Item } from '../types/database'

export const mockItems: Item[] = [
  {
    id: 1,
    heroe_id: 6, // axe es el ID 6 en heroe.ts
    cofre_id: 1,
    nombre: "Axe Set 2018",
    precio: 250.00,
    slug: "axe-set-2018",
    imagen_url: [
      "/sets/2018/Axe.webp"
    ],
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  },
  {
    id: 2,
    heroe_id: 12, // brewmaster es el ID 12 en heroe.ts  
    cofre_id: 1,
    nombre: "Brewmaster Set 2018",
    precio: 300.00,
    slug: "brewmaster-set-2018",
    imagen_url: [
      "/sets/2018/Brewmaster.webp"
    ],
    estado: 1,
    created_at: "2024-01-01T00:00:00Z"
  }
]
import type {  Venta } from '../types/database'

export const mockVentas: Venta[] = [
  {
    id: 1,
    fecha: "2024-01-15T10:30:00Z",
    item_id: 1,
    precio: 250.00,
    created_at: "2024-01-15T10:30:00Z"
  },
  {
    id: 2,
    fecha: "2024-01-20T14:45:00Z",
    item_id: 2,
    precio: 300.00,
    created_at: "2024-01-20T14:45:00Z"
  },
  {
    id: 3,
    fecha: "2024-02-01T09:15:00Z",
    item_id: 1,
    precio: 245.00,
    created_at: "2024-02-01T09:15:00Z"
  },
  {
    id: 4,
    fecha: "2024-02-10T16:20:00Z",
    item_id: 4,
    precio: 220.00,
    created_at: "2024-02-10T16:20:00Z"
  }
]
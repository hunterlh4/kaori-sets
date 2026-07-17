# Configuración de Supabase

## Pasos para migrar a Supabase:

### 1. Crear proyecto en Supabase
- Ve a [supabase.com](https://supabase.com)
- Crea una cuenta y nuevo proyecto
- Guarda la URL y API Key

### 2. Ejecutar el esquema SQL
- Ve al SQL Editor en Supabase
- Copia y pega el contenido de `databas.sql`
- Ejecuta las queries para crear las tablas

### 3. Instalar cliente Supabase
```bash
npm install @supabase/supabase-js
```

### 4. Configurar environment
Agregar en `.env`:
```
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

### 5. Crear cliente Supabase
```typescript
// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### 6. Migrar DataAdapter a Supabase
Una vez configurado, reemplaza las funciones mock en `DataAdapter` con queries reales:

```typescript
// Ejemplo de búsqueda con Supabase
static async searchItems(query: string) {
  const { data, error } = await supabase
    .from('item')
    .select(`
      *,
      heroe:heroes(nombre, atributo, imagen_url),
      cofre:cofres_cache(nombre, sigla, anio),
      galeria:galeria_item(imagen_url, orden)
    `)
    .ilike('nombre', `%${query}%`)
  
  return data || []
}
```

## Ventajas de usar Supabase:

✅ **Real-time**: Datos en tiempo real
✅ **Auth**: Sistema de autenticación integrado  
✅ **API**: REST y GraphQL automático
✅ **Storage**: Para imágenes de productos
✅ **RLS**: Row Level Security para permisos
✅ **Backup**: Backups automáticos
✅ **Escalable**: Crece con tu aplicación

## Uso temporal con datos mock:

Mientras configuras Supabase, puedes usar `DataAdapter` con los datos mock:

```typescript
import { DataAdapter } from './lib/data-adapter'

// Buscar productos
const results = DataAdapter.searchItems("pudge")

// Obtener todos los items activos
const activeItems = DataAdapter.getItemsByEstado(1)
```
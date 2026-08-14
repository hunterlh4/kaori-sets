import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
}

const DEFAULT_TITLE = "Kaori Sets - Items de Dota 2 Collector's Cache"
const DEFAULT_DESCRIPTION = "Tienda especializada en sets de Dota 2 de todos los años de Collector's Cache. Encuentra items únicos de tus héroes favoritos con envío mediante regalo."
const DEFAULT_IMAGE = "https://kaori-sets.vercel.app/profile.jpg"
const SITE_URL = "https://kaori-sets.vercel.app"

export function SEO({ 
  title, 
  description = DEFAULT_DESCRIPTION, 
  image = DEFAULT_IMAGE, 
  url = SITE_URL,
  type = "website" 
}: SEOProps) {
  const fullTitle = title ? `${title} | Kaori Sets` : DEFAULT_TITLE

  useEffect(() => {
    // Actualizar el title
    document.title = fullTitle

    // Función para crear o actualizar meta tags
    const updateMetaTag = (property: string, content: string, isProperty = true) => {
      const selector = isProperty ? `meta[property="${property}"]` : `meta[name="${property}"]`
      let tag = document.querySelector(selector) as HTMLMetaElement
      
      if (!tag) {
        tag = document.createElement('meta')
        if (isProperty) {
          tag.setAttribute('property', property)
        } else {
          tag.setAttribute('name', property)
        }
        document.head.appendChild(tag)
      }
      
      tag.setAttribute('content', content)
    }

    // Meta tags básicos
    updateMetaTag('description', description, false)

    // Open Graph tags
    updateMetaTag('og:title', fullTitle)
    updateMetaTag('og:description', description)
    updateMetaTag('og:image', image)
    updateMetaTag('og:url', url)
    updateMetaTag('og:type', type)
    updateMetaTag('og:site_name', 'Kaori Sets')

    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image', false)
    updateMetaTag('twitter:title', fullTitle, false)
    updateMetaTag('twitter:description', description, false)
    updateMetaTag('twitter:image', image, false)

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

  }, [fullTitle, description, image, url, type])

  return null
}

// Hook para generar SEO específico de productos
export function useProductSEO(product: any) {
  if (!product) return {}

  const title = product.nombre
  const description = `${product.nombre} - Set de ${product.heroe.nombre} (${product.heroe.atributo}) del ${product.cofre.nombre} (${product.cofre.anio}). Precio: S/${product.precio}. Disponible en Kaori Sets con envío mediante regalo.`
  const image = `https://kaori-sets.vercel.app${product.imagen_url[0]}`
  const url = `https://kaori-sets.vercel.app/item/${product.slug}`

  return {
    title,
    description,
    image,
    url,
    type: "product"
  }
}

// Hook para generar SEO de páginas de búsqueda
export function useSearchSEO(searchTerm?: string) {
  if (!searchTerm) return {}

  const title = `Búsqueda: ${searchTerm}`
  const description = `Resultados de búsqueda para "${searchTerm}" en Kaori Sets. Encuentra sets de Dota 2 de todos los años de Collector's Cache.`
  const url = `https://kaori-sets.vercel.app/search?q=${encodeURIComponent(searchTerm)}`

  return {
    title,
    description,
    url
  }
}
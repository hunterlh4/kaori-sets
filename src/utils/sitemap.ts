import { mockItems } from '../data/item'
import { mockHeroes } from '../data/heroe'

const SITE_URL = 'https://kaori-sets.vercel.app'

export function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0]
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Páginas principales -->
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/heroes</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/search</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Páginas de productos -->
`

  // Agregar todas las páginas de productos
  mockItems.forEach(item => {
    sitemap += `  <url>
    <loc>${SITE_URL}/item/${item.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`
  })

  // Agregar búsquedas por héroe
  mockHeroes.forEach(hero => {
    sitemap += `  <url>
    <loc>${SITE_URL}/search?q=${encodeURIComponent(hero.slug)}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
`
  })

  sitemap += `</urlset>`
  
  return sitemap
}

// Función para generar y guardar el sitemap
export function saveSitemap() {
  const sitemapContent = generateSitemap()
  console.log('Sitemap generado:', sitemapContent)
  return sitemapContent
}
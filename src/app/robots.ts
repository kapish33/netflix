import { BasePath } from '@utils/paths'
import type { MetadataRoute } from 'next'
 

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      // allow: '/',
      disallow: ['/signup','/signin'],
    },
    sitemap: `${BasePath}/sitemap.xml`,
  }
}
import { MetadataRoute } from 'next'

const BASE_URL = 'https://mateomoscoloni.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = ['hero', 'about', 'skills', 'experience', 'services', 'projects', 'contact']

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...sections.map((section) => ({
      url: `${BASE_URL}/#${section}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}

// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Se algum dia quiser bloquear pastas ou rotas, coloque aqui:
      // disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://outsourcing.onebrain.com.br/sitemap.xml',
  };
}

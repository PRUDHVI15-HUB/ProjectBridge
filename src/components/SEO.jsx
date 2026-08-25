import { useEffect } from 'react';

/**
 * Lightweight declarative SEO component for route-specific metadata.
 * Updates document title, meta descriptions, Open Graph, and Twitter tags dynamically.
 */
export default function SEO({ title, description, ogType = 'website' }) {
  useEffect(() => {
    // 1. Document Title
    if (title) {
      document.title = title;
    }

    // 2. Meta Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    // 3. Social Tags
    const tags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: ogType },
      { property: 'twitter:title', content: title },
      { property: 'twitter:description', content: description },
    ];

    tags.forEach(({ property, content }) => {
      if (!content) return;
      const isTwitter = property.startsWith('twitter:');
      const attrName = isTwitter ? 'name' : 'property';
      let el = document.querySelector(`meta[${attrName}="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    });
  }, [title, description, ogType]);

  return null;
}

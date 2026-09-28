import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SeoHeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object | object[];
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  ogImage = 'https://www.orchidsolution.online/assets/orchid_hero_sculpture_1790414553346.jpg',
  ogType = 'website',
  schema,
}) => {
  const location = useLocation();
  const domain = 'https://www.orchidsolution.online';

  useEffect(() => {
    // Construct canonical URL for current path
    const path = location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '');
    const canonicalUrl = `${domain}${path}`;

    // Update Document Title if provided
    if (title) {
      document.title = title;
    }

    // Update or Insert Canonical Link Tag
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // Update OpenGraph Title
    if (title) {
      let ogTitleTag = document.querySelector('meta[property="og:title"]');
      if (!ogTitleTag) {
        ogTitleTag = document.createElement('meta');
        ogTitleTag.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitleTag);
      }
      ogTitleTag.setAttribute('content', title);

      let twitterTitleTag = document.querySelector('meta[property="twitter:title"]');
      if (!twitterTitleTag) {
        twitterTitleTag = document.createElement('meta');
        twitterTitleTag.setAttribute('property', 'twitter:title');
        document.head.appendChild(twitterTitleTag);
      }
      twitterTitleTag.setAttribute('content', title);
    }

    // Update OpenGraph URL
    let ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (ogUrlTag) {
      ogUrlTag.setAttribute('content', canonicalUrl);
    }

    // Update Twitter URL
    let twitterUrlTag = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrlTag) {
      twitterUrlTag.setAttribute('content', canonicalUrl);
    }

    // Update Meta Description if provided
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);

      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (!ogDesc) {
        ogDesc = document.createElement('meta');
        ogDesc.setAttribute('property', 'og:description');
        document.head.appendChild(ogDesc);
      }
      ogDesc.setAttribute('content', description);

      let twitterDesc = document.querySelector('meta[property="twitter:description"]');
      if (!twitterDesc) {
        twitterDesc = document.createElement('meta');
        twitterDesc.setAttribute('property', 'twitter:description');
        document.head.appendChild(twitterDesc);
      }
      twitterDesc.setAttribute('content', description);
    }

    // Update OpenGraph Image
    let ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag) {
      ogImageTag.setAttribute('content', ogImage);
    }
    let twitterImageTag = document.querySelector('meta[property="twitter:image"]');
    if (twitterImageTag) {
      twitterImageTag.setAttribute('content', ogImage);
    }

    // Update OpenGraph Type
    let ogTypeTag = document.querySelector('meta[property="og:type"]');
    if (ogTypeTag) {
      ogTypeTag.setAttribute('content', ogType);
    }

    // Inject Dynamic Page JSON-LD Structured Data
    const existingDynamicScript = document.getElementById('dynamic-seo-schema');
    if (existingDynamicScript) {
      existingDynamicScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'dynamic-seo-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [location, title, description, ogImage, ogType, schema]);

  return null;
};

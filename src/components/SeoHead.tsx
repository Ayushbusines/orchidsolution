import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SeoHeadProps {
  title?: string;
  description?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({ title, description }) => {
  const location = useLocation();
  const domain = 'https://orchidsolution.online';

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
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', description);
      }
    }
  }, [location, title, description]);

  return null;
};

import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export const useSEO = ({ title, description, canonical }: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Helper to update meta tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper to update OG tags
    const updateOg = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Update meta description
    updateMeta("description", description);

    // Update Twitter tags
    updateMeta("twitter:card", "summary_large_image");
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);

    // Update Open Graph tags
    updateOg("og:title", title);
    updateOg("og:description", description);
    updateOg("og:type", "website");

    // Update Canonical URL
    if (canonical) {
       let link = document.querySelector<HTMLLinkElement>(`link[rel="canonical"]`);
       if (!link) {
         link = document.createElement("link");
         link.setAttribute("rel", "canonical");
         document.head.appendChild(link);
       }
       link.setAttribute("href", canonical);
    }
    
    return () => {
        // cleanup if needed, but usually we just overwrite on next page load
    };
  }, [title, description, canonical]);
};

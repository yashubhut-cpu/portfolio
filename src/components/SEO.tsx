import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL, DEFAULT_SEO, PAGE_SEO, PageMetadata } from "../constants/seo";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
  ogImage?: string;
  ogType?: "website" | "profile" | "article";
}

function updateMetaTag(name: string, content: string, isProperty = false) {
  const attribute = isProperty ? "property" : "name";
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function updateCanonicalUrl(url: string) {
  let link = document.querySelector(`link[rel="canonical"]`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

export function SEO(props: SEOProps) {
  const { pathname } = useLocation();

  const routeMetadata: PageMetadata = PAGE_SEO[pathname] || DEFAULT_SEO;

  const title = props.title || routeMetadata.title || DEFAULT_SEO.title;
  const description =
    props.description || routeMetadata.description || DEFAULT_SEO.description;
  const keywords =
    props.keywords || routeMetadata.keywords || DEFAULT_SEO.keywords;
  const path = props.path || routeMetadata.path || pathname;
  const ogImage = props.ogImage || routeMetadata.ogImage || DEFAULT_SEO.ogImage;
  const ogType = props.ogType || routeMetadata.ogType || DEFAULT_SEO.ogType;

  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;
  const imageUrl = ogImage?.startsWith("http")
    ? ogImage
    : `${SITE_URL}${ogImage?.startsWith("/") ? ogImage : `/${ogImage}`}`;

  useEffect(() => {
    // Document Title
    document.title = title;

    // Standard Meta Tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords.join(", "));
    updateMetaTag("author", "Yash Bhut");
    updateMetaTag("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // Canonical URL
    updateCanonicalUrl(canonicalUrl);

    // Open Graph Meta Tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:url", canonicalUrl, true);
    updateMetaTag("og:image", imageUrl, true);
    updateMetaTag("og:type", ogType || "website", true);
    updateMetaTag("og:site_name", "Yash Bhut Portfolio", true);
    updateMetaTag("og:locale", "en_US", true);

    // Twitter Meta Tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", imageUrl);

  }, [title, description, keywords, canonicalUrl, imageUrl, ogType]);

  return null;
}

export default SEO;

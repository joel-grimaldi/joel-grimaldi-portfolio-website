import { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  url?: string;
}

export function generateMetadata(config: SEOConfig): Metadata {
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    openGraph: {
      title: config.title,
      description: config.description,
      images: config.ogImage ? [config.ogImage] : [],
      url: config.url,
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: config.ogImage ? [config.ogImage] : [],
    },
  };
}

export function generateStructuredData(type: "Person" | "WebSite" | "WebPage") {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
  };

  if (type === "Person") {
    return {
      ...baseData,
      name: "Joel Grimaldi",
      jobTitle: "Developer",
      url: "https://yourportfolio.com",
    };
  }

  return baseData;
}

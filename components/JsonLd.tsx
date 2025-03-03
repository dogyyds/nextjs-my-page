import React from "react";

// 个人信息结构化数据
export function PersonJsonLd({
  name,
  url,
  image,
  description,
  sameAs,
}: {
  name: string;
  url: string;
  image: string;
  description: string;
  sameAs: string[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: name,
    url: url,
    image: image,
    description: description,
    sameAs: sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// 网站结构化数据
export function WebsiteJsonLd({
  name,
  url,
  description,
  author,
}: {
  name: string;
  url: string;
  description: string;
  author: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: name,
    url: url,
    description: description,
    author: {
      "@type": "Person",
      name: author,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// 项目/作品集结构化数据
export function ProjectJsonLd({
  projects,
}: {
  projects: {
    name: string;
    description: string;
    url: string;
    image: string;
    datePublished: string;
  }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        description: project.description,
        url: project.url,
        image: project.image,
        datePublished: project.datePublished,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// 面包屑导航结构化数据
export function BreadcrumbJsonLd({
  items,
}: {
  items: {
    name: string;
    item: string;
  }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

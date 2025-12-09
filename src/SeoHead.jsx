// src/SeoHead.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const DOMAIN = 'https://seo.shastovsky.ru';

export const SeoHead = ({ title, description, lang, type = 'website', path = '' }) => {
  // Убираем лишние слеши
  const cleanPath = path.replace(/^\/en\//, '').replace(/^\//, '');
  
  const ruUrl = `${DOMAIN}/${cleanPath}`;
  const enUrl = `${DOMAIN}/en/${cleanPath}`;
  
  // Определяем текущий URL
  const currentUrl = lang === 'en' ? enUrl : (cleanPath === '' ? DOMAIN : ruUrl);

  return (
    <Helmet>
      {/* Базовые атрибуты HTML */}
      <html lang={lang} />
      
      {/* Title и Description */}
      <title>{title}</title>
      <meta name="description" content={description || "Senior SEO Specialist & Full-stack Developer. Python, React, Technical SEO."} />
      
      {/* Canonical и Hreflang */}
      <link rel="canonical" href={currentUrl} />
      <link rel="alternate" hreflang="ru" href={ruUrl} />
      <link rel="alternate" hreflang="en" href={enUrl} />
      <link rel="alternate" hreflang="x-default" href={enUrl} />

      {/* Open Graph (Соцсети) */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={`${DOMAIN}/assets/images/avatar_default.webp`} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
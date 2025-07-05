import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Exército de Agentes - Automação Inteligente com EssencialBot | EDA SOCIAL",
  description = "Transforme seu negócio com o EssencialBot - IA avançada, automação inteligente, contabilidade smart e consultoria especializada. Conheça também o EDA SOCIAL - projeto de inclusão digital. Exército de Agentes - A revolução digital para sua empresa.",
  keywords = "EssencialBot, automação, inteligência artificial, IA, contabilidade, consultoria empresarial, agentes IA, chatbot, transformação digital, Exército de Agentes, EDA SOCIAL, inclusão digital, autismo, síndrome de down",
  image = "https://www.exercitodeagentes.com.br/og-image.jpg",
  url = "https://www.exercitodeagentes.com.br"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Exército de Agentes" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Exército de Agentes" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#0891b2" />
      <meta name="msapplication-TileColor" content="#0891b2" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Exército de Agentes",
          "url": "https://www.exercitodeagentes.com.br",
          "logo": "https://www.exercitodeagentes.com.br/logo.png",
          "description": description,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-11-91175-7113",
            "contactType": "customer service",
            "availableLanguage": "Portuguese"
          },
          "sameAs": [
            "https://linkedin.com/company/exercitodeagentes",
            "https://instagram.com/exercitodeagentes"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
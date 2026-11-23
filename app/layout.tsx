import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.vitres.online";
const GOOGLE_TAG_MANAGER_ID = "GTM-TSSNX4JW";
const GOOGLE_ADS_CONVERSION_ID = "AW-18384169283";
const SEO_TITLE =
  "VITRIX | Nettoyage Vitres, Façades Commerciales & Panneaux Solaires Casablanca";
const SEO_DESCRIPTION =
  "VITRIX assure le nettoyage professionnel de vitres, vitrines, façades de magasins (Alucobond, enseignes, logos) et panneaux solaires photovoltaïques à Casablanca et alentours. Devis rapide sur WhatsApp.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "VITRIX",
      legalName: "VITRIX Nettoyage & Entretien",
      url: SITE_URL,
      logo: `${SITE_URL}/vitrix-logo-transparent.png`,
      image: `${SITE_URL}/hero-window-cleaning.webp`,
      description: SEO_DESCRIPTION,
      telephone: "+212705540864",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Casablanca",
        addressCountry: "MA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.5731,
        longitude: -7.5898,
      },
      areaServed: [
        { "@type": "City", name: "Casablanca" },
        { "@type": "Place", name: "Bouskoura" },
        { "@type": "Place", name: "Dar Bouazza" },
        { "@type": "Place", name: "Nouaceur" },
        { "@type": "Place", name: "Daroua" },
      ],
      sameAs: [`https://wa.me/212705540864`],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+212705540864",
        contactType: "service commercial",
        availableLanguage: ["fr", "ar"],
        areaServed: "MA",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "VITRIX - Nettoyage Vitres, Façades & Panneaux Solaires Casablanca",
      inLanguage: "fr-MA",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: "Nettoyage professionnel de vitres, façades et panneaux solaires à Casablanca",
      serviceType: "Nettoyage de vitrines, panneaux solaires, façades alucobond et enseignes",
      url: SITE_URL,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "City", name: "Casablanca" },
        { "@type": "Place", name: "Bouskoura" },
        { "@type": "Place", name: "Dar Bouazza" },
        { "@type": "Place", name: "Nouaceur" },
        { "@type": "Place", name: "Daroua" },
      ],
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Commerces, bureaux, villas, restaurants et entreprises",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services de nettoyage VITRIX",
        itemListElement: [
          "Nettoyage de vitrines et baies vitrées",
          "Nettoyage de façades de magasins et panneaux Alucobond",
          "Nettoyage d'enseignes lumineuses, logos et panneaux publicitaires",
          "Nettoyage de panneaux solaires photovoltaïques",
          "Nettoyage de vitres de bureaux et agences",
          "Contrats d'entretien régulier",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Comment obtenir un devis pour le nettoyage de vitres, façades ou panneaux solaires ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Envoyez quelques photos de vos vitres, façades ou panneaux solaires sur WhatsApp. VITRIX prépare une estimation claire et rapide selon la surface et l'accès.",
          },
        },
        {
          "@type": "Question",
          name: "Pourquoi est-il crucial de nettoyer les panneaux solaires à Casablanca ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "La poussière, le sable et les saletés réduisent jusqu'à 30% la production électrique de vos panneaux photovoltaïques. Un nettoyage professionnel permet de retrouver immédiatement le plein rendement.",
          },
        },
        {
          "@type": "Question",
          name: "Nettoyez-vous les façades Alucobond et les enseignes de magasins ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, VITRIX nettoie les panneaux Alucobond, enseignes lumineuses, logos 3D et devantures de magasins pour donner une image éclatante et accueillante à votre établissement.",
          },
        },
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  applicationName: "VITRIX",
  category: "services professionnels",
  keywords: [
    "nettoyage vitres Casablanca",
    "nettoyage façade magasin Casablanca",
    "nettoyage panneau solaire Casablanca",
    "nettoyage alucobond Casablanca",
    "nettoyage enseigne lumineuse Casablanca",
    "nettoyage vitrines Casablanca",
    "laveur de vitres Casablanca",
    "VITRIX",
  ],
  authors: [{ name: "VITRIX" }],
  creator: "VITRIX",
  publisher: "VITRIX",
  alternates: {
    canonical: "/",
    languages: {
      "fr-MA": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: SITE_URL,
    siteName: "VITRIX",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [
      {
        url: "/hero-window-cleaning.webp",
        width: 1440,
        height: 960,
        alt: "Nettoyage professionnel d'une vitrine commerciale à Casablanca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: ["/hero-window-cleaning.webp"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#082b4f",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-MA">
      <head>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GOOGLE_TAG_MANAGER_ID}');
function gtag_report_conversion(url) {
  window.dataLayer = window.dataLayer || [];
  var callback = function () {
    if (typeof url !== 'undefined') {
      window.location = url;
    }
  };
  window.dataLayer.push({
    'event': 'quote_form_submit',
    'send_to': '${GOOGLE_ADS_CONVERSION_ID}/Ofj9CMORg-AcEMPSoL5E',
    'value': 1.0,
    'currency': 'MAD',
    'event_callback': callback,
    'event_timeout': 2000
  });
  return false;
}`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_TAG_MANAGER_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}

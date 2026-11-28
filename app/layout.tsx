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
  "Entreprise de nettoyage à Casablanca | VITRIX";
const SEO_DESCRIPTION =
  "Nettoyage de panneaux solaires, vitres et façades, et ménage à domicile à Casablanca et alentours. Consultez les prestations VITRIX et demandez un devis.";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#organization`,
      name: "VITRIX",
      url: SITE_URL,
      logo: `${SITE_URL}/vitrix-logo-transparent.png`,
      image: `${SITE_URL}/hero-window-cleaning.webp`,
      description: SEO_DESCRIPTION,
      telephone: "+212705540864",
      areaServed: [
        { "@type": "City", name: "Casablanca" },
        { "@type": "Place", name: "Bouskoura" },
        { "@type": "Place", name: "Dar Bouazza" },
        { "@type": "Place", name: "Nouaceur" },
        { "@type": "Place", name: "Daroua" },
      ],
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
      name: "VITRIX",
      inLanguage: "fr-MA",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: "Services de nettoyage à Casablanca et alentours",
      serviceType: "Nettoyage de vitres, de façades, de panneaux solaires et ménage à domicile",
      url: SITE_URL,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "City", name: "Casablanca" },
        { "@type": "Place", name: "Bouskoura" },
        { "@type": "Place", name: "Dar Bouazza" },
        { "@type": "Place", name: "Nouaceur" },
        { "@type": "Place", name: "Daroua" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services de nettoyage VITRIX",
        itemListElement: [
          ["Nettoyage de vitres et baies vitrées", "/nettoyage-vitres-casablanca"],
          ["Nettoyage de façades de magasins et panneaux Alucobond", "/nettoyage-facades-alucobond-casablanca"],
          ["Nettoyage d’enseignes lumineuses et logos", "/nettoyage-enseignes-magasins-casablanca"],
          ["Nettoyage de panneaux solaires photovoltaïques", "/nettoyage-panneaux-solaires-casablanca"],
          ["Ménage à domicile", "/femme-de-menage-casablanca"],
        ].map(([name, path]) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name, url: SITE_URL + path },
        })),
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  applicationName: "VITRIX",
  category: "services professionnels",
  authors: [{ name: "VITRIX" }],
  creator: "VITRIX",
  publisher: "VITRIX",
  alternates: {
    canonical: "/",
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

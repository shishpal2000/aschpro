"use client";

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import "@fortawesome/fontawesome-svg-core/styles.css";
//import { config } from "@fortawesome/fontawesome-svg-core";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleTagManager } from "@next/third-parties/google";
// config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const canonicalUrl = `https://aschpro.com${pathname}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Aschpro",
    image:
      "https://aschpro.com/_next/image?url=%2Fimages%2FLogoHeaderFooter1.png&w=384&q=75",
    "@id": "",
    url: "https://aschpro.com/",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No 83, Sainath colony,",
      addressLocality: "Hyderabad",
      postalCode: "500 070",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.33214,
      longitude: 78.589493,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Wednesday",
        "Tuesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:30",
    },
  };
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Aschpro",
    image:
      "https://aschpro.com/_next/image?url=%2Fimages%2FLogoHeaderFooter1.png&w=384&q=75",
    "@id": "",
    url: "https://aschpro.com/",
    telephone: "",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No 83, Sainath colony,",
      addressLocality: "Hyderabad",
      postalCode: "500 070",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.33214,
      longitude: 78.589493,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Wednesday",
        "Tuesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:30",
    },
  };
  const corporationData = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Aschpro",
    url: "https://aschpro.com/",
    logo: "https://aschpro.com/_next/image?url=%2Fimages%2FLogoHeaderFooter1.png&w=384&q=75",
  };

  const clarityScript = `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "n5k6ly16k5");
  `;

  return (
    <html lang="en">
      <head>
        <title>
          Aschpro - Find Your Dream Job With Aschpro and Secure Your Future
        </title>
        <meta
          name="description"
          content="Discover top career opportunities across various industries and connect with talented professionals and leading employers. Start your job search today!"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Find Your Dream Job With AschPro and Secure Your Future"
        />
        <meta
          property="og:description"
          content="Discover top career opportunities across various industries and connect with talented professionals and leading employers. Start your job search today!"
        />
        <meta property="og:url" content="https://aschpro.com" />
        <meta property="og:site_name" content="Aschpro" />
        <meta
          property="og:image"
          content="https://aschpro.com/_next/image?url=%2Fimages%2FLogoHeaderFooter.png&w=384&q=75"
        />
        <meta
          name="google-site-verification"
          content="google-site-verification=3PZkEkz83iOc9pkEG1ItCSfV5qR-c9NNiv-qAPHY4KQ"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: clarityScript }}
        />
        {/* <script
          type="text/javascript"
          dangerouslySetInnerHTML={{ __html: gtmScript }}
        /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <GoogleTagManager gtmId="G-VXHFVR8RBX" />
      </head>
      <body className={inter.className}>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

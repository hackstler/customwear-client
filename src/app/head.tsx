"use client"
import Head from "next/head"
import { usePathname } from "next/navigation"
import Script from "next/script"
import { useEffect } from "react"

/**
 * Renders the custom head component for the After Bootcamp application.
 * This component sets the title, meta tags, and Open Graph tags for the page.
 * @returns The custom head component.
 */

const GA_TRACKING_ID = "G-R5CRJW71V1" // Reemplaza con tu ID de seguimiento
export default function CustomHead() {
  const pathname = usePathname()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (window.gtag) {
        window.gtag("config", GA_TRACKING_ID, {
          page_path: url,
        })
      }
    }

    handleRouteChange(pathname) // Inicializar para la primera carga

    window.addEventListener("popstate", () =>
      handleRouteChange(window.location.pathname)
    )

    return () => {
      window.removeEventListener("popstate", () =>
        handleRouteChange(window.location.pathname)
      )
    }
  }, [pathname])

  const metaTitle = "Customwear Store"
  const metaDescription = "Clothing by IA"
  const metaImage =
    "https://storage.googleapis.com/afterbootcamp/customwear/openart-image_bJbJkZSq_1717017953113_raw.png"
  const metaUrl = "https://www.app.customwear.es/"

  return (
    <div>
      <Head>
        <title>{metaTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="custom wear, customwear, customize, t-shirt, camiseta personalizada, camiseta custom, ropa, clothing, clothes, ia, diseños con ia, ropa con diseños"
        />
        <meta name="author" content="After Bootcamp" />

        {/* Open Graph / Facebook / WhatsApp */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="After Bootcamp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="app.customwear.es" />
        <meta property="twitter:url" content={metaUrl} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />
        <meta name="twitter:image:alt" content="After Bootcamp Logo" />
        <meta name="twitter:site" content="@YourTwitterUsername" />

        {/* LinkedIn */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:url" content={metaUrl} />

        {/* Instagram */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:url" content={metaUrl} />

        {/* Discord */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={metaTitle} />
        <meta property="twitter:description" content={metaDescription} />
        <meta property="twitter:image" content={metaImage} />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
        }}
      />
    </div>
  )
}

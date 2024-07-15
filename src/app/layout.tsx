import { Metadata } from "next"
import "styles/globals.css"
import Head from "./head"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  title: "Customwear Store",
  description:
    "Descubre Customwear Store, la plataforma que te permite diseñar y personalizar tu propia ropa con la ayuda de inteligencia artificial. Con herramientas avanzadas y fáciles de usar, puedes crear prendas únicas que reflejen tu estilo personal. Únete a nuestra comunidad de diseñadores y accede a recursos exclusivos para maximizar tu creatividad y llevar tus ideas a la realidad.",
  keywords: [
    "ropa personalizada",
    "diseño de moda",
    "custom wear",
    "customwear",
    "moda personalizada",
    "diseño de ropa",
    "plataforma de diseño",
    "comunidad de diseñadores",
    "creatividad en moda",
    "personalización de ropa",
    "herramientas de diseño",
    "prendas únicas",
    "estilo personal",
    "acceso a recursos exclusivos",
    "moda a medida",
    "diseño de prendas",
    "crear tu propia ropa",
    "moda y estilo",
    "diseño personalizado",
    "creatividad en ropa",
    "plataforma de moda",
    "maximizar tu creatividad",
    "llevar tus ideas a la realidad",
    "únete a nuestra comunidad",
    "diseñadores de moda",
    "recursos para diseñadores",
    "éxito en diseño de moda",
    "avanzar en diseño de ropa",
    "moda y personalización",
    "innovación en moda",
    "diseño y personalización",
    "creación de moda",
    "moda personalizada",
    "crear ropa única",
    "estilo único",
    "comunidad creativa",
    "recursos creativos",
    "moda hecha a medida",
    "inteligencia artificial en moda",
    "IA en diseño de ropa",
    "moda y tecnología",
    "innovación con IA",
    "herramientas de IA para diseño",
    "customwear by IA",
  ],
  openGraph: {
    title: "CustomWear by IA",
    description:
      "Design and personalize your own clothes with CustomWear by IA",
    url: "https://app.customwear.com",
    type: "website",
    images: [
      "https://storage.googleapis.com/afterbootcamp/customwear/openart-image_bJbJkZSq_1717017953113_raw.png",
    ],
  },
}
export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="es" data-mode="light">
      <Head />
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}

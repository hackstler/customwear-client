import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList, getRegion } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"

export const metadata: Metadata = {
  title: "Customwear Store",
  description:
    "Be yourself, be unique. Customwear is a custom clothing store that allows you to express yourself through your clothes. We offer a wide range of products that you can customize to your liking. From t-shirts to hoodies, we have everything you need to create your own style.",
  keywords:
    "customwear, custom clothing, personalized clothing, unique style, custom t-shirts, custom hoodies",
  openGraph: {
    title: "Customwear Store",
    description:
      "Be yourself, be unique. Customwear is a custom clothing store that allows you to express yourself through your clothes. We offer a wide range of products that you can customize to your liking. From t-shirts to hoodies, we have everything you need to create your own style.",
    url: "https://app.customwear.es",
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 600,
        alt: "Customwear Store",
      },
    ],
    siteName: "Customwear Store",
  },
}

const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}

import { Text } from "@medusajs/ui"
import { getCategoriesList, getCollectionsList } from "@lib/data"
import Image from "next/image"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="w-full bg-pink-pastel">
      <div className="content-container flex flex-col items-center w-full min-h-full">
        <div className="flex flex-col items-center justify-center w-full sm:flex-row sm:justify-between sm:items-center">
          <div className="flex w-full justify-center">
            <Image
              src="https://storage.googleapis.com/afterbootcamp/customwear/openart-image_bJbJkZSq_1717017953113_raw.png"
              alt="Customwear Hero"
              width={75}
              height={75}
              quality={100}
              className="mx-auto"
            />
          </div>
        </div>
        <div className="flex w-full justify-center text-ui-fg-muted mb-2">
          <Text className="txt-compact-small text-center">
            © {new Date().getFullYear()} Customwear Store. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  )
}

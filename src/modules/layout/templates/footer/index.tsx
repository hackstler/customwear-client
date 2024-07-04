import { Text, clx } from "@medusajs/ui"

import { getCategoriesList, getCollectionsList } from "@lib/data"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="w-full h-auto bg-pink-pastel mt-auto" >
      <div className="content-container flex flex-col w-full p-4">
        <div className="flex flex-col xsmall:flex-col items-center justify-between">
          <div>
            <Image
              src="https://storage.googleapis.com/afterbootcamp/customwear/openart-image_bJbJkZSq_1717017953113_raw.png"
              alt="Customwear Hero"
              width={75}
              height={75}
              quality={100}
              className=""
            />
          </div>
        </div>
        <div className="flex w-full mb-4 justify-center text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Customwear Store. All rights reserved.
          </Text>
        </div>
      </div>
    </footer>
  )
}

"use client"
import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"
import useMediaQuery from "../../../../app/hooks/useMediaQuery"

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div
      className={`relative w-full border-b border-ui-border-base bg-ui-bg-subtle ${
        isMobile ? "h-[40vh]" : "h-[60vh]"
      }`}
    >
      <div className="relative w-full h-full">
        {isMobile ? (
          <Image
            src="https://storage.googleapis.com/afterbootcamp/CustomWearBanner.png"
            alt="Customwear Banner Mobile"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0"
          />
        ) : (
          <Image
            src="https://storage.googleapis.com/afterbootcamp/CustomWearBanner.png"
            alt="Customwear Banner Desktop"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0"
          />
        )}
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-4 small:p-8 gap-4">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
          </Heading>
          <Heading
            level="h2"
            className="text-2xl leading-8 text-ui-fg-subtle font-light"
          >
          </Heading>
        </span>
      </div>
    </div>
  )
}

export default Hero

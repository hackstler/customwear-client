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
        isMobile ? "h-[20vh]" : "min-h-screen h-[50vh]" 
      }`}
    >
      <div className="relative w-full">
        {isMobile ? (
          <Image
            src="https://storage.googleapis.com/afterbootcamp/CustomWearBanner.png"
            alt="Customwear Banner Mobile"
            width={720}
            height={1080}
            quality={100}
            className="absolute inset-0 object-cover"
          />
        ) : (
          <Image
            src="https://storage.googleapis.com/afterbootcamp/CustomWearBanner.png"
            alt="Customwear Banner Desktop"
            fill
            quality={100}
            className="absolute inset-0 object-cover"
          />
        )}
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          
          ></Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          ></Heading>
        </span>
      </div>
    </div>
  )
}

export default Hero

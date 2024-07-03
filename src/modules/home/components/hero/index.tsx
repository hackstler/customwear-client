"use client"
import React, { Suspense, useState } from "react"
import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"
import useMediaQuery from "../../../../app/hooks/useMediaQuery"

interface ImageWithBlurProps {
  src: string
  alt: string
  width?: number
  height?: number
  quality?: number
  objectFit: "cover" | "contain" | "fill" | "none" | "scale-down"
  className?: string
  fill?: boolean
}

const ImageWithBlur: React.FC<ImageWithBlurProps> = ({
  src,
  alt,
  width,
  height,
  quality,
  objectFit,
  className,
  fill,
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className={`${className} ${isLoaded ? "" : "blur-md"}`}
      onBlur={() => setIsLoaded(true)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={quality}
        objectFit={objectFit}
        className={className}
        onLoad={() => setIsLoaded(true)}
        fill={fill}
      />
    </div>
  )
}

const Hero: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div
      className={`relative w-full border-b border-ui-border-base bg-ui-bg-subtle ${
        isMobile ? "h-[20vh]" : "min-h-screen h-[75vh]"
      }`}
    >
      <div className="relative w-full h-full">
        <Suspense
          fallback={<div className="absolute inset-0 bg-gray-200"></div>}
        >
          {isMobile ? (
            <ImageWithBlur
              src="https://storage.googleapis.com/afterbootcamp/customwear/resized_customwear_banner_mobile.webp"
              alt="Customwear Banner Mobile"
              width={720}
              height={1080}
              quality={100}
              objectFit="cover"
              className="absolute inset-0"
            />
          ) : (
            <ImageWithBlur
              src="https://storage.googleapis.com/afterbootcamp/customwear/DALL%C2%B7E%202024-05-28%2015.20.12%20-%20A%20minimalist%20and%20underground%20banner%20for%20an%20online%20custom%20clothing%20store%20named%20'Customwear'.%20The%20banner%20should%20convey%20personality%20and%20self-esteem%20while.webp"
              alt="Customwear Banner Desktop"
              fill
              quality={100}
              objectFit="cover"
              className="absolute inset-0"
            />
          )}
        </Suspense>
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

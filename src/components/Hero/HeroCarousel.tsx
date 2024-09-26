'use client'

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Slogans from '@/components/Slogans'

export default function HeroCarousel(): JSX.Element {
  return (
    <div>
      <Carousel
        className="cursor-grab"
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent>
          {Slogans.map((slogan, index) => (
            <CarouselItem key={index} className="flex">
              {slogan}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

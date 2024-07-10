'use client'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import images from './images'
import Image from 'next/image'

export default function HeroCarousel() {
  return <div className="rounded-2xl border border-nightBlue overflow-hidden">
    <Carousel
      opts={{
        loop: true
      }}
      plugins={[
        Autoplay({
          delay: 3000
        })
      ]}
    >
      <CarouselContent>
        {images.map(({ src, alt }, index) => (
          <CarouselItem key={index}>
            <Image src={src} alt={alt} className="object-cover w-full cursor-grab" width={500} height={700} priority />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </div>
}
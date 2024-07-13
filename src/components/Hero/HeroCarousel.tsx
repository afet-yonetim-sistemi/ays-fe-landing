'use client'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import images from './images'
import Image from 'next/image'

export default function HeroCarousel() {
  return <div>
    <Carousel className="cursor-grab"
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
            <Image src={src} alt={alt} className="object-contain m-auto hidden md:block" width={400} height={500}
                   priority />
            {/*TODO: tek satır için banner uyumlu görsellerin ayarlanması gerekli*/}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </div>
}
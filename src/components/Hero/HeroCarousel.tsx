import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const Images = []

export default function HeroCarousel() {
  return <div className="w-full">
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {/*{Array.from({ length: 5 }).map((_, index) => (*/}
        {/*  <CarouselItem key={index}>*/}
        {/*  </CarouselItem>*/}
        {/*))}*/}
      </CarouselContent>
      {/*<CarouselPrevious />*/}
      {/*<CarouselNext />*/}
    </Carousel>
  </div>
}
"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function GlobalCarousel() {
  const carouselImages = [
    { title: "Money Envelope", img: "/carousel-page-1.png" },
    { title: "Hamper Note", img: "/carousel-page-2.png" },
    { title: "Itinerary", img: "/carousel-page-3.png" },
  ];

  return (
    <>
      <div className="flex items-center justify-center">
        <Carousel className="w-full max-w-[250px] md:max-w-[300px] xl:max-w-[650px]">
          <CarouselContent>
            {carouselImages.map((item, index) => (
              <CarouselItem key={index}>
                <Card className="p-0">
                  <CardContent className="flex items-center justify-center p-0">
                    <Image
                      src={item?.img}
                      alt="carousel-img"
                      width={650}
                      height={650}
                    />
                  </CardContent>
                </Card>
                <div className="text-xl text-[#b79234] font-bold text-center my-4">
                  {item?.title}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-4">
          <div className="text-[#be3455] font-bold text-xl">Rs 2000/-</div>
          <div
            className="border border-[#b79234] px-3 py-1 rounded-sm text-sm text-[#b79234] cursor-pointer"
            title="Offers will be available soon!"
          >
            % Offers
          </div>
        </div>
      </div>
    </>
  );
}

export default GlobalCarousel;

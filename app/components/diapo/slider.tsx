import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { images } from "@/app/utils/const";

const Slider = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-8">
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Découvrez en images les moments clés de notre engagement
        </p>
      </div>

      <Carousel
        className="w-full max-w-4xl mx-auto"
        opts={{
          align: "center",
          loop: true,
        }}
      >
        <CarouselContent className="flex items-stretch">
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
              <Card
                className="h-full border-2 border-gray-100 
                               shadow-lg hover:shadow-xl 
                               transition-all duration-300 
                               rounded-xl overflow-hidden"
              >
                <CardContent className="relative p-0 h-[350px]">
                  <Image
                    src={image}
                    alt={`Action ${index + 1}`}
                    fill
                    className="object-cover transition-transform 
                               duration-300 hover:scale-105"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div
          className="absolute -bottom-12 left-1/2 
                        transform -translate-x-1/2 flex space-x-4"
        >
          <CarouselPrevious
            className="bg-blue-500 text-white 
                                       hover:bg-blue-600 rounded-full"
          />
          <CarouselNext
            className="bg-green-500 text-white 
                                   hover:bg-green-600 rounded-full"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;

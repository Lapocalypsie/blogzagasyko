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
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="flex">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="m-4 sm:m-8"
            style={{ flex: "0 0 80%", maxWidth: "300px" }} // Responsive width
          >
            <Card>
              <CardContent
                className="relative p-0"
                style={{ width: "100%", height: "300px" }}
              >
                <Image
                  src={image}
                  alt={`Landscape ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </CardContent>
            </Card>
            <div>
       
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Slider;

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
            className="m-8"
            style={{ flex: "0 0 300px" }} // Fixed width for each item
          >
            <Card>
              <CardContent
                className="relative p-0"
                style={{ width: "300px", height: "300px" }}
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
              <h2 className="text-center text-lg font-semibold mt-4 text-amber-700">
                {image.replace("/madaLandscape/", "").replace(".jpg", "")}
              </h2>
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

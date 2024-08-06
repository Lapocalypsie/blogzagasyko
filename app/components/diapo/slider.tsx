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

const images = [
  "/madaLandscape/Berenty.jpg",
  "/madaLandscape/chute-de-Lily-a-Ampefy.jpeg",
  "/madaLandscape/majunga-baobab.jpg",
  "/madaLandscape/Morondava Baobab.jpg",
  "/madaLandscape/Nosy-Be-.jpg",
  "/madaLandscape/Sainte Marie (1).jpg",
  "/madaLandscape/Sainte Marie.jpg",
  "/madaLandscape/sary colier 1.jpg",
  "/madaLandscape/Tsingy - Copy.jpg",
];

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
              <CardContent className="relative p-0" style={{ width: "300px", height: "300px" }}>
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

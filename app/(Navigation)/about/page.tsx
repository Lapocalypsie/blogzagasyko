import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-4xl font-bold tracking-tight dark:text-white lg:leading-snug">
        À Propos de Nous
      </h1>
      <div className="text-center mb-8">
        <p className="text-lg font-medium">L&apos;équipe derrière Za Gasy Ko</p>
      </div>
      <div className="mb-16 mt-6 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-16">
        {[
          {
            name: "Jimmy RASOLOSOA",
            image: "/people/jimmy.png",
            link: "/author/jimmy-rasolosoa",
          },
          {
            name: "Norosoa Rasolosoa",
            image: "/people/norosoa.jpg",
            link: "/author/norosoa",
          },
          {
            name: "Jonathan Rasolosoa",
            image: "/people/jo.jpg",
            link: "/author/jonathan",
          },
        ].map(({ name, image, link }, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-md bg-slate-50 transition-transform duration-200 ease-in-out transform hover:scale-105"
          >
            <a href={link}>
              <Image
                alt={name}
                loading="lazy"
                decoding="async"
                src={image}
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 320px) 100vw, 320px"
              />
            </a>
          </div>
        ))}
      </div>
      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          Originaire de Madagascar, notre équipe est passionnée par la promotion
          et la préservation de la culture malgache à travers des initiatives
          innovantes et engagées. Chez Za Gasy Ko, nous croyons en la puissance
          de la communauté et de l&apos;héritage culturel pour inspirer et unir
          les gens.
        </p>
        <p>
          Notre mission est de mettre en lumière la richesse et la diversité de
          Madagascar, tout en créant des opportunités pour les talents locaux de
          s&apos;exprimer et de prospérer. Nous travaillons ensemble pour créer
          des projets qui reflètent nos valeurs de solidarité, de respect et de
          créativité.
        </p>
        <p>
          Chacun de nos membres apporte une expertise unique et une passion
          profonde pour notre culture et notre pays. Ensemble, nous construisons
          un avenir où la culture malgache brille à travers le monde.
        </p>
        <p>
          Merci de votre soutien et de votre intérêt pour Za Gasy Ko. Pour en
          savoir plus sur nos projets ou pour collaborer avec nous,
          n&apos;hésitez pas à{" "}
          <a
            href="/contact"
            className="text-red-300 font-semibold hover:underline"
          >
            nous contacter
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Page;

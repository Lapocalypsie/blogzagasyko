import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        A propos de Nous
      </h1>
      <div className="text-center">
        <p className="text-lg">L&apos;équipe derrière Za Gasy Ko</p>
      </div>
      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        <div className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
          <a href="/author/jimmy-rasolosoa">
            <Image
              alt="Jimmy RASOLOSOA"
              loading="lazy"
              decoding="async"
              src="/people/jimmy.png"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 320px) 100vw, 320px"
            />
          </a>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
          <a href="/author/norosoa">
            <Image
              alt="Norosoa Rasolosoa"
              loading="lazy"
              decoding="async"
              src="/people/norosoa.jpg"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 320px) 100vw, 320px"
            />
          </a>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
          <a href="/author/jonathan">
            <Image
              alt="Jonathan Rasolosoa"
              loading="lazy"
              decoding="async"
              src="/people/jo.jpg"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 320px) 100vw, 320px"
            />
          </a>
        </div>
      </div>
      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          Originaire de Madagascar, notre équipe est passionnée par la promotion et la préservation de la culture malgache à travers des initiatives innovantes et engagées. Chez Za Gasy Ko, nous croyons en la puissance de la communauté et de l'héritage culturel pour inspirer et unir les gens.
        </p>
        <p>
          Notre mission est de mettre en lumière la richesse et la diversité de Madagascar, tout en créant des opportunités pour les talents locaux de s'exprimer et de prospérer. Nous travaillons ensemble pour créer des projets qui reflètent nos valeurs de solidarité, de respect et de créativité.
        </p>
        <p>
          Chacun de nos membres apporte une expertise unique et une passion profonde pour notre culture et notre pays. Ensemble, nous construisons un avenir où la culture malgache brille à travers le monde.
        </p>
        <p>
          Merci de votre soutien et de votre intérêt pour Za Gasy Ko. Pour en savoir plus sur nos projets ou pour collaborer avec nous, n'hésitez pas à <a href="/contact" className="text-red-300">nous contacter</a>.
        </p>
      </div>
    </div>
  );
};

export default Page;

import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a small passionate team.</p>
      </div>
      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        <div className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
          <a href="/author/mario-sanchez">
            <Image
              alt="Mario Sanchez"
              loading="lazy"
              decoding="async"
              src="https://cdn.sanity.io/images/cijrdavx/production/4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg?w=2000&auto=format"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 320px) 100vw, 320px"
            />
          </a>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
          <a href="/author/joshua-wood">
            <Image
              alt="Joshua Wood"
              loading="lazy"
              decoding="async"
              src="https://cdn.sanity.io/images/cijrdavx/production/cd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg?w=2000&auto=format"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 320px) 100vw, 320px"
            />
          </a>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
          <a href="/author/erika-oliver">
            <Image
              alt="Erika Oliver"
              loading="lazy"
              decoding="async"
              src="https://cdn.sanity.io/images/cijrdavx/production/4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg?w=2000&auto=format"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 320px) 100vw, 320px"
            />
          </a>
        </div>
      </div>
      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          We provide real-time connectivity to enable software providers and
          financial institutions to build integrated products for their small
          business customers.
        </p>
        <p>
          Our API infrastructure is leveraged by clients ranging from lenders to
          corporate card providers and business forecasting tools, with use
          cases including automatic reconciliation, business dashboarding, and
          loan decisioning.
        </p>
        <p>
          <a href="/contact">Get in touch</a>
        </p>
      </div>
    </div>
  );
};

export default Page;

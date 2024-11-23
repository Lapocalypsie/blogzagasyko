"use client";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { teamMembers, volunteerMembers } from "../../utils/const";

const Page = () => {
  const [selectedMember, setSelectedMember] = useState<null | {
    name: string;
    image: string;
    role: string;
    description: string;
  }>(null);

  const [selectedVolunteer, setSelectedVolunteer] = useState<null | {
    name: string;
    image: string;
    testimony: string;
  }>(null);

  const renderCard = (person: any, index: number, onClick: () => void) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 * index, duration: 0.3 }}
      className="relative aspect-square overflow-hidden rounded-lg bg-slate-50 cursor-pointer"
      onClick={onClick}
    >
      <Image
        alt={person.name}
        src={person.image}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-lg font-semibold">{person.name}</h3>
          {person.role && <p className="text-sm">{person.role}</p>}
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <Head>
        <title>À Propos de Nous | Za Gasy Ko</title>
        <meta
          name="description"
          content="Découvrez l'équipe passionnée derrière Za Gasy Ko, une association dédiée à la promotion et la préservation de la culture malgache."
        />
        <meta
          name="keywords"
          content="Za Gasy Ko, Madagascar, culture malgache, éducation, développement durable, artisanat, solidarité"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="À Propos de Nous | Za Gasy Ko" />
        <meta
          property="og:description"
          content="Découvrez l'équipe passionnée derrière Za Gasy Ko, une association dédiée à la promotion et la préservation de la culture malgache."
        />
        <meta property="og:image" content="/Logo.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zagasyko.com/about" />
        <link rel="canonical" href="https://zagasyko.com/about" />
      </Head>

      <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
        {/* Section Membres du Bureau */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-brand-primary mb-3 mt-2 text-center text-4xl font-bold tracking-tight dark:text-white lg:leading-snug"
        >
          À Propos de Nous
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-lg font-medium">
            L&apos;équipe passionnée derrière Za Gasy Ko
          </p>
        </motion.div>

        {/* Membres du Bureau */}
        <div className="mb-16 mt-6 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
          {teamMembers.map((member, index) =>
            renderCard(member, index, () => setSelectedMember(member))
          )}
        </div>

        {selectedMember && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-8"
          >
            <h3 className="text-xl font-semibold mb-2">
              {selectedMember.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {selectedMember.role}
            </p>
            <p>{selectedMember.description}</p>
          </motion.div>
        )}

        {/* Section Nos Volontaires à Madagascar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold">Nos Volontaires à Madagascar</h2>
          <p className="mt-2 text-lg">
            Nos volontaires à Madagascar : en cliquant sur leurs noms, ils ont
            partagé leurs motivations.
          </p>
        </motion.div>

        {/* Volontaires */}
        <div className="mb-16 mt-6 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
          {volunteerMembers.map((volunteer, index) =>
            renderCard(volunteer, index, () => setSelectedVolunteer(volunteer))
          )}
        </div>

        {selectedVolunteer && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-8"
          >
            <h3 className="text-xl font-semibold mb-2">
              {selectedVolunteer.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Témoignage</p>
            <p>{selectedVolunteer.testimony}</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="prose mx-auto mt-14 dark:prose-invert text-justify"
        >
          <p>
            Chacun de nous apporte une passion unique et une expertise dédiée
            aux œuvres humanitaires. Ensemble, nous formons une force
            d&apos;espoir pour l&apos;humanité et un avenir où la culture
            malgache inspire et unit au-delà des frontières.
          </p>
          <p className="mt-4">
            Merci de votre soutien envers Za Gasy Ko. Pour en savoir plus ou
            pour collaborer avec nous, n&apos;hésitez pas à{" "}
            <Link
              href="/contact"
              className="text-red-300 font-semibold hover:underline"
            >
              nous contacter
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Page;

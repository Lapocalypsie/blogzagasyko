"use client";
import React, { useState } from "react";
import Head from "next/head"; // Importer le composant Head de Next.js
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { teamMembers } from "../../utils/const";

const Page = () => {
  const [selectedMember, setSelectedMember] = useState<null | {
    name: string;
    image: string;
    role: string;
    description: string;
  }>(null);

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
        <meta property="og:image" content="/Logo.svg" />{" "}
        {/* Assurez-vous de remplacer par une image de prévisualisation appropriée */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zagasyko.com/about" />{" "}
        {/* Remplacez par l'URL réelle de la page */}
        <link rel="canonical" href="https://zagasyko.com/about" />
      </Head>

      <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
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

        <div className="mb-16 mt-6 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
              className="relative aspect-square overflow-hidden rounded-lg bg-slate-50 cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <Image
                alt={member.name}
                src={member.image}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="prose mx-auto mt-14 dark:prose-invert text-justify	"
        >
          <p>
            Originaire de Madagascar, notre équipe est passionnée par la
            promotion et la préservation de la culture malgache à travers des
            initiatives innovantes et engagées. Chez Za Gasy Ko, nous croyons en
            la puissance de la communauté et de l&apos;héritage culturel pour
            inspirer et unir les gens.
          </p>
          <p className="mt-2">
            Notre mission est de mettre en lumière la richesse et la diversité
            de Madagascar, tout en créant des opportunités pour les talents
            locaux de s&apos;exprimer et de prospérer. Nous travaillons ensemble
            pour créer des projets qui reflètent nos valeurs de solidarité, de
            respect et de créativité.
          </p>
          <p className="mt-2">
            Chacun de nos membres apporte une expertise unique et une passion
            profonde pour notre culture et notre pays. Ensemble, nous
            construisons un avenir où la culture malgache brille à travers le
            monde.
          </p>
          <p>
            Merci de votre soutien et de votre intérêt pour Za Gasy Ko. Pour en
            savoir plus sur nos projets ou pour collaborer avec nous,
            n&apos;hésitez pas à{" "}
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

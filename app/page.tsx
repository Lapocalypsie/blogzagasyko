// pages/index.js
import React from "react";

const Home = () => {
  return (
    <section className="relative bg-slate-900 text-white">
      <div
        className="relative px-6 py-32 md:py-48 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.prismic.io/zagasyko/06bb181d-7a33-48b1-be1b-dcb782fe0174_malgacheEnfants.JPG?auto=compress%2Cformat&fit=max&w=1920')`,
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black opacity-50"
          aria-hidden="true"
        ></div>

        <div className="relative mx-auto w-full max-w-6xl z-10">
          <div className="grid justify-items-center gap-8">
            <div className="max-w-2xl text-center">
              <h2 className="font-semibold leading-tight tracking-tight md:leading-tight text-5xl md:text-7xl mb-4 mt-12 first:mt-0 last:mb-0">
                Za Gasy Ko
              </h2>
              <p className="mb-7 last:mb-0">
                Za Gasy Ko est une association à caractère caritatif qui vise à
                aider les Malgaches, en particulier les enfants malgaches en
                situation de sévère pauvreté.
              </p>
              <a
                className="rounded bg-white px-5 py-3 font-medium text-slate-800"
                rel="noreferrer"
                target="_blank"
                href="https://zanakagasykoloina.blogspot.com/2021/04/cagnotte-en-cours.html"
              >
                Offrez un don !
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="px-6 py-20 md:py-28 bg-white text-black leading-relaxed">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="font-semibold leading-tight tracking-tight md:leading-tight text-4xl md:text-5xl mb-7 mt-12 first:mt-0 last:mb-0">
            Za Gasy Ko
          </h1>
          <p className="mb-7 last:mb-0">
            Za Gasy Ko est une association caritative dévouée à apporter de
            l&apos;aide et du soutien aux habitants de Madagascar, en mettant
            l&apos;accent sur les enfants qui vivent dans des conditions de
            pauvreté extrême. Madagascar, une île magnifique mais souvent
            confrontée à des défis économiques et sociaux, trouve en Za Gasy Ko
            une lueur d&apos;espoir.
          </p>
          <p className="mb-7 last:mb-0">
            Fondée par des individus passionnés et engagés, dont la diversité
            des horizons rappelle la richesse culturelle de Madagascar, Za Gasy
            Ko œuvre sans relâche pour améliorer la vie des communautés
            malgaches. Grâce à des programmes variés et ciblés,
            l&apos;association s&apos;efforce de répondre aux besoins essentiels
            tels que l&apos;accès à l&apos;éducation, à la nourriture, aux soins
            médicaux et à un environnement sain.
          </p>
          <p className="mb-7 last:mb-0">
            L&apos;éducation occupe une place centrale dans la mission de Za
            Gasy Ko. L&apos;association s&apos;emploie à offrir aux enfants
            malgaches la possibilité d&apos;apprendre et de grandir dans un
            environnement éducatif favorable. Des programmes éducatifs novateurs
            sont mis en place pour stimuler la curiosité intellectuelle et
            encourager le développement des compétences.
          </p>
          <p className="mb-7 last:mb-0">
            Za Gasy Ko reconnaît également que la santé est un pilier
            fondamental du bien-être. Ainsi, l&apos;association travaille en
            partenariat avec des professionnels de la santé pour fournir des
            soins médicaux essentiels aux communautés malgaches les plus
            vulnérables. Des campagnes de sensibilisation sont menées pour
            promouvoir l&apos;hygiène, la prévention des maladies et les
            pratiques de vie saines.
          </p>
          <p className="mb-7 last:mb-0">
            En réunissant des ressources, des compétences et des idées
            novatrices, Za Gasy Ko incarne la capacité de la jeunesse malgache
            et de ses alliés à créer un avenir meilleur. Chaque don, chaque
            bénévole et chaque partenaire contribuent à renforcer l&apos;impact
            de l&apos;association et à faire progresser sa mission altruiste.
          </p>
          <p className="mb-7 last:mb-0">
            En somme, Za Gasy Ko se profile comme un exemple inspirant de
            solidarité et d&apos;action collective. À travers son engagement
            envers les enfants malgaches et les populations défavorisées,
            l&apos;association façonne un avenir où l&apos;espoir prévaut sur
            les difficultés et où la compassion ouvre la voie à un changement
            positif durable.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Home;

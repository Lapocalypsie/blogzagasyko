// pages/index.js
import React from "react";
import Slider from "./components/diapo/slider";

const Home = () => {
  return (
    <section className="relative bg-slate-900 text-white">
      <div
        className="relative px-4 py-16 md:py-32 lg:py-48 bg-cover bg-center"
        style={{
          backgroundImage: `url('/banner.jpeg')`,
        }}
        
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black opacity-50"
          aria-hidden="true"
        ></div>

        <div className="relative mx-auto w-full max-w-6xl z-10">
          <div className="grid justify-items-center gap-6">
            <div className="max-w-2xl text-center px-4">
              <h2 className="font-semibold leading-tight tracking-tight text-3xl md:text-4xl lg:text-5xl mb-4 mt-8">
                Za Gasy Ko
              </h2>
              <p className="mb-4 text-base md:text-lg">
                Za Gasy Ko est une association à caractère caritative qui vise à
                aider les Malgaches, en particulier les enfants malgaches en
                situation de sévère pauvreté.
              </p>
              <a
                className="rounded bg-white px-4 py-2 font-medium text-slate-800 transition duration-300 hover:bg-gray-200"
                href="/donation"
              >
                Offrez un don !
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="px-4 py-12 md:py-16 lg:py-20 bg-white text-black leading-relaxed">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="font-semibold leading-tight tracking-tight text-3xl md:text-4xl mb-4">
            Quel est notre but ?
          </h1>
          <p className="mb-4 text-base md:text-lg text-justify">
            Comme d&apos;autres associations humanitaires, nous voulons juste
            <span className="font-bold text-red-300">
              {" "}
              apporter un peu d&apos;aide{" "}
            </span>{" "}
            à Madagascar ! Lorsqu&apos;on a été témoin d&apos;une grande
            pauvreté, on ne peut pas faire semblant de n&apos;avoir rien vu. La
            suite dépend des moyens !
          </p>
          <h1 className="font-semibold leading-tight tracking-tight text-3xl md:text-4xl mb-4 mt-10">
            Comment agir ?
          </h1>
          <p className="mb-4 text-base md:text-lg text-justify">
            Nous travaillons avec des bénévoles sur places. Des personnes qui offrent
            gratuitement leurs services ; qui font les tâches avec amour ; qui
            sont nos représentantes sur place ; qui ont la joie de servir leurs
            semblables et intègres, quelque soit leurs situations.
          </p>
          <p className="mb-4 text-base md:text-lg text-justify">
            L&apos;éducation occupe une place centrale dans la mission de Za
            Gasy Ko. L&apos;association s&apos;emploie à offrir aux enfants
            malgaches la possibilité d&apos;apprendre et de grandir dans un
            environnement éducatif favorable. Des programmes éducatifs novateurs
            sont mis en place pour stimuler la curiosité intellectuelle et
            encourager le développement des compétences.
          </p>
          <p className="mb-4 text-base md:text-lg text-justify">
            Za Gasy Ko reconnaît également que la santé est un pilier
            fondamental du bien-être. Ainsi, l&apos;association travaille en
            partenariat avec des professionnels de la santé pour fournir des
            soins médicaux essentiels aux communautés malgaches les plus
            vulnérables. Des campagnes de sensibilisation sont menées pour
            promouvoir l&apos;hygiène, la prévention des maladies et les
            pratiques de vie saines.
          </p>
          <p className="mb-4 text-base md:text-lg text-justify">
            En réunissant des ressources, des compétences et des idées
            novatrices, Za Gasy Ko incarne la capacité de la jeunesse malgache
            et de ses alliés à créer un avenir meilleur. Chaque don, chaque
            bénévole et chaque partenaire contribuent à renforcer l&apos;impact
            de l&apos;association et à faire progresser sa mission altruiste.
          </p>
          <p className="mb-4 text-base md:text-lg text-justify">
            En somme, Za Gasy Ko se profile comme un exemple inspirant de
            solidarité et d&apos;action collective. À travers son engagement
            envers les enfants malgaches et les populations défavorisées,
            l&apos;association façonne un avenir où l&apos;espoir prévaut sur
            les difficultés et où la compassion ouvre la voie à un changement
            positif durable.
          </p>
          <div className="items-center mt-10">
            <h1 className="font-semibold leading-tight tracking-tight text-3xl md:text-4xl mb-4 mt-8">
              Quelques photos de nos actions
            </h1>
            <div className="items-center mx-4 md:mx-12">
              <div className="flex justify-center ">
                <Slider />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;

import React from "react";
import Slider from "./components/diapo/slider";

const Home = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: `url('/banner.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-48 z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold 
              text-transparent bg-clip-text 
              bg-gradient-to-r from-white to-blue-200"
            >
              Za Gasy Ko
            </h1>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Une association caritative dédiée à aider les enfants malgaches en
              situation de pauvreté extrême.
            </p>

            <div className="pt-6">
              <a
                href="/donation"
                className="px-6 py-3 bg-white text-slate-900 
                  rounded-full font-semibold 
                  hover:bg-blue-50 transition duration-300 
                  shadow-lg hover:shadow-xl"
              >
                Offrez un don !
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Notre But */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 
              border-b-4 border-blue-500 pb-3"
            >
              Quel est notre but ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Comme d&apos;autres associations humanitaires, nous voulons juste
              <span className="font-bold text-blue-600">
                {" "}
                apporter un peu d&apos;aide{" "}
              </span>
              à Madagascar ! Lorsqu&apos;on a été témoin d&apos;une grande
              pauvreté, on ne peut pas faire semblant de n&apos;avoir rien vu.
              La suite dépend des moyens !
            </p>
          </div>

          {/* Comment Agir */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 
              border-b-4 border-green-500 pb-3"
            >
              Comment agir ?
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>Za Gasy Ko travaille avec des bénévoles sur place.</p>
              <p>
                Nos interventions se concentrent principalement sur trois
                domaines essentiels : l&apos;éducation, la santé et
                l&apos;alimentation.
              </p>
              <p>
                Nous sommes organisés en plusieurs équipes qui, ensemble,
                forment une chaîne. Cette chaîne, selon nous, a une valeur
                inestimable, bien plus précieuse que l&apos;or :
              </p>

              <ol className="list-decimal list-inside pl-4 space-y-2">
                {[
                  "Les bénéficiaires d'aide, qui prennent conscience des principes d'autonomie et deviennent acteurs de leur propre développement.",
                  "Les parents courageux, qui soutiennent leurs enfants dans leur parcours scolaire.",
                  "Les bénévoles intègres et altruistes, sans qui les aides risqueraient de ne pas atteindre leur véritable destination : les enfants.",
                  "Les merveilleux donateurs, qui nous offrent leur temps, leur soutien financier, matériel, et parfois même moral. Sans eux, nos actions seraient limitées.",
                ].map((item, index) => (
                  <li key={index} className="text-base">
                    {item}
                  </li>
                ))}
              </ol>

              <p>
                En réunissant des ressources, des compétences et des idées
                novatrices, Za Gasy Ko incarne la capacité de la jeunesse
                malgache et de ses alliés à créer un avenir meilleur. Chaque
                don, chaque bénévole et chaque partenaire contribuent à
                renforcer l&apos;impact de l&apos;association et à faire
                progresser sa mission altruiste.
              </p>
            </div>
          </div>

          {/* Galerie Photos */}
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 
              text-center border-b-4 border-purple-500 pb-3"
            >
              Quelques photos de nos actions
            </h2>

            <div className="w-full">
              <Slider />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

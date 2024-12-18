import test from "node:test";

// utils/const.js
export const authors = [
  {
    name: "Norosoa Rasolosoa",
    slug: "norosoa",
    avatar: "/people/norosoa.jpg",
  },
  {
    name: "Jimmy Rasolosoa",
    slug: "jimmy-rasolosoa",
    avatar: "/people/jimmy.png",
  },
  // Add more authors as needed
];

export const allImages = [
  {
    src: "/madaLandscape/Berenty.jpg",
    alt: "Berenty",
    text: "La réserve de Berenty est une petite réserve privée, proche d'Amboasary Sud, Anosy. Il est situé le long de la rivière Mandrare, dans l’écorégion de forêt épineuse semi-aride de l’extrême sud de Madagascar.",
  },
  {
    src: "/madaLandscape/majunga-baobab.jpg",
    alt: "Les baobab de Majunga",
    text: "Les baobabs de Majunga sont des arbres emblématiques de la région de Majunga. Ils sont situés à proximité de la ville de Majunga, sur la côte nord-ouest de Madagascar.",
  },
  {
    src: "/madaLandscape/Morondava Baobab.jpg",
    alt: "Les baobab de Morondava",
    text: "Les baobabs de Morondava sont des arbres emblématiques de la région de Morondava. Ils sont situés à proximité de la ville de Morondava, sur la côte ouest de Madagascar.",
  },
  {
    src: "/madaLandscape/Nosy-Be-.jpg",
    alt: "Nosy Be",
    text: "Nosy Be est une île située au nord-ouest de Madagascar. Elle est connue pour ses plages de sable blanc, ses eaux turquoise et sa faune marine diversifiée.",
  },
  {
    src: "/madaLandscape/Sainte Marie.jpg",
    alt: "Sainte Marie",
    text: "Sainte Marie est une île située à l'est de Madagascar. Elle est connue pour ses plages de sable blanc, ses eaux turquoise et sa faune marine diversifiée.",
  },
  {
    src: "/madaLandscape/Tsingy - Copy.jpg",
    alt: "tsingy de bemaraha ",
    text: "Le parc national des Tsingy de Bemaraha est un parc national situé dans la région de Melaky, à l'ouest de Madagascar. Il est connu pour ses formations calcaires uniques appelées tsingy.",
  },
  {
    src: "/madaLandscape/Berenty.jpg",
    alt: "Image 1",
    text: "La réserve de Berenty est une petite réserve privée, proche d'Amboasary Sud, Anosy. Il est situé le long de la rivière Mandrare, dans l’écorégion de forêt épineuse semi-aride de l’extrême sud de Madagascar.",
  },
  {
    src: "/madaLandscape/majunga-baobab.jpg",
    alt: "Image 2",
    text: "Les baobabs de Majunga sont des arbres emblématiques de la région de Majunga. Ils sont situés à proximité de la ville de Majunga, sur la côte nord-ouest de Madagascar.",
  },
  {
    src: "/madaLandscape/Morondava Baobab.jpg",
    alt: "Image 3",
    text: "Les baobabs de Morondava sont des arbres emblématiques de la région de Morondava. Ils sont situés à proximité de la ville de Morondava, sur la côte ouest de Madagascar.",
  },
  { src: "/madaLandscape/Nosy-Be-.jpg", alt: "Image 4", text: "to be added" },
  {
    src: "/madaLandscape/Sainte Marie.jpg",
    alt: "Image 5",
    text: "to be added",
  },
  {
    src: "/madaLandscape/Tsingy - Copy.jpg",
    alt: "Image 6",
    text: "to be added",
  },
  { src: "/madaLandscape/Berenty.jpg", alt: "Image 1", text: "to be added" },
  {
    src: "/madaLandscape/majunga-baobab.jpg",
    alt: "Image 2",
    text: "to be added",
  },
  {
    src: "/madaLandscape/Morondava Baobab.jpg",
    alt: "Image 3",
    text: "to be added",
  },
  { src: "/madaLandscape/Nosy-Be-.jpg", alt: "Image 4", text: "to be added" },
  {
    src: "/madaLandscape/Sainte Marie.jpg",
    alt: "Image 5",
    text: "to be added",
  },
  {
    src: "/madaLandscape/Tsingy - Copy.jpg",
    alt: "Image 6",
    text: "to be added",
  },
  { src: "/madaLandscape/Berenty.jpg", alt: "Image 1", text: "to be added" },
  {
    src: "/madaLandscape/majunga-baobab.jpg",
    alt: "Image 2",
    text: "to be added",
  },
  {
    src: "/madaLandscape/Morondava Baobab.jpg",
    alt: "Image 3",
    text: "to be added",
  },
  { src: "/madaLandscape/Nosy-Be-.jpg", alt: "Image 4", text: "to be added" },
  {
    src: "/madaLandscape/Sainte Marie.jpg",
    alt: "Image 5",
    text: "to be added",
  },
  {
    src: "/madaLandscape/Tsingy - Copy.jpg",
    alt: "Image 6",
    text: "to be added",
  },
];

export const teamMembers = [
  {
    name: "Norosoa Rasolosoa",
    image: "/people/norosoa.jpg",
    role: "Présidente de l'Association",
    description:
      "L'année est hyper chargée pour moi depuis que je me suis engagée dans l'association Zanaka Gasy Koloina. J'avoue que ce n'est pas toujours évident de demander et de recevoir des dons. Lorsqu'on réalise que, derrière chaque contribution, il y a au moins une personne qui a transpiré, qui s'est levée tôt pour gagner cet argent, ou qui s'est privée de quelque chose pour pouvoir l'offrir, cela impose une grande responsabilité.\n\nAgir, c'est aussi sortir de sa zone de confort, s'exposer aux jugements et aux critiques. Il y a parfois la tristesse de devoir dire non, de ne pas pouvoir faire plus. Je fais déjà partie de différentes associations qui accomplissent beaucoup dans l'humanitaire, même à un niveau mondial. Alors, pourquoi consacrer encore plus de temps à Zanaka Gasy Koloina ?\n\nQuand je pense à tous ces enfants pour qui il suffisait d'un coup de pouce pour changer leur vie, à tous ces enfants qui reçoivent un simple sachet de bonbons pour illuminer leur journée de Noël, je ne peux qu'être fière de nos actions.\n\nToujours soutenue par ma famille, mes amis et même des inconnus, chaque difficulté surmontée devient une merveilleuse expérience, un bel apprentissage, une victoire. Au final, ces expériences me donnent envie d'en faire encore plus.\n\nJe suis confiante en l'avenir et je garde espoir, car \"le désespoir est l'ennemi de la justice. L'espoir nous permet d'aller de l'avant... il nous permet de nous lever... et de parler\".\n\nLorsqu'on me remercie pour ce que nous faisons, ma réponse reste la même : je ne suis qu'une bénévole. Merci surtout aux membres de l'association, aux enfants qui font tant d'efforts dans leurs études parce qu'ils savent qu'ils ont de la chance de bénéficier de cette aide, aux parents vaillants, aux bénévoles intègres et altruistes sur place, et aux merveilleux donateurs. Ils sont tous exceptionnels ! Chaque maillon forme une chaîne, une chaîne humaine qui, selon moi, est plus brillante que l'or.",
  },
  {
    name: "Tantely DODO",
    image: "/people/tantely.jpg",
    role: "Trésorier",
    description:
      "Passionné par la culture malgache et la promotion de l'artisanat local.",
  },
  {
    name: "Tiphaine RASOLOSOA",
    image: "/people/tiphaine.jpg",
    role: "Secrétaire",
    description:
      "Engagée pour la promotion de la culture malgache et la solidarité.",
  },
  {
    name: "Reynald et Catherine",
    image: "/people/reynald.jpg",
    role: "Cofondateurs de l'association",
    description:
      "Reynald n'est plus parmi nous mais il occupe une place importante dans l'organisation de l'association. Il a été un grand soutien pour l'association et a contribué à son développement. Catherine est toujours active dans l'association et continue à soutenir les actions de Za Gasy Ko.",
  },
];

export const volunteerMembers = [
  {
    name: "Domoina et Andry",
    image: "/people/domoina_andry.jpeg",
    testimony:
      "Nous sommes très heureux de pouvoir contribuer à la mission de Za Gasy Ko et de soutenir les actions de l'association.",
  },
  {
    name: "Auguste",
    image: "/people/auguste.jpeg",
    testimony:
      "La raison pour laquelle j'aide les gens est que je veux qu'ils soient égaux à tous, je veux qu'ils fassent des efforts et grandissent en connaissances.",
  },
  {
    name: "Prisca et Roger",
    image: "/people/prisca_roger.jpeg",
    testimony:
      "Nous sommes fiers de faire partie de l'équipe de Za Gasy Ko et de contribuer à la promotion de la culture malgache.",
  },
  {
    name: "Keithy",
    image: "/people/keithy.jpg",
    testimony:
      "Je suis reconnaissante de pouvoir participer à cette oeuvre de charité qui consiste à aider les enfants en difficulté financière à avoir accès à l'éducation. Mon plus grand bonheur est l'espoir qu'ils réussissent dans la vie. Je remercie infiniment l'association pour son soutien pour pousser ces enfants vers la réussite",
  },
  {
    name: "Edwige",
    image: "/people/edwige1.jpeg",
    testimony:
      "En août 2009, lors d'une visite à Vohitrafeno, mon mari a croisé une jeune collégienne qui vendait des boules de manioc râpée pour acheter des cahiers. Ce moment nous a inspirés à aider. Conscients des difficultés des familles rurales, nous avons décidé de donner des fournitures scolaires chaque année pour alléger leur charge et offrir un avenir meilleur aux enfants.",
  },
  {
    name: "Rova et Tina",
    image: "/people/rova.jpeg",
    testimony: `
      Mon éducation a sûrement joué un rôle important. Mes parents, qui ont toujours été des exemples pour moi, aiment aider les autres, et cela m'a profondément inspiré.  
      Je ressens avec gratitude la chance que Dieu m'a offerte dans la vie. Ce que j'ai reçu gratuitement, je suis convaincu qu'il est de mon devoir de le partager de la même manière.  
      Pour moi, aider les autres avec un cœur pur et désintéressé est essentiel. Je crois fermement que cette attitude attire des bénédictions dans ma vie.  
      Enfin, je veux voir mon entourage progresser. En aidant, je deviens un exemple positif pour ma communauté, tout en encourageant les autres à suivre cette voie.`,
  },
  {
    name: "Olga",
    image: "/people/olga.jpg",
    testimony: "",
  },
];

export const images = [
  "/actions/fourniture.jpeg",
  "/actions/furniture given.jpeg",
  "/actions/merci.jpg",
  "/actions/nouriture.jpeg",
  "/actions/prisca_oil.jpeg",
  "/actions/covid.jpeg",
  "/actions/covid.jpg",
  "/actions/photo1.jpg",
  "/actions/photo2.jpg",
  "/actions/photo3.jpg",
  "/actions/photo4.jpg",
  "/actions/photo5.jpg",
  "/actions/photo6.jpg",
  "/actions/photo7.jpg",
  "/actions/photo8.jpg",
];

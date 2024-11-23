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
    name: "Jimmy RASOLOSOA",
    image: "/people/jimmy.png",
    role: "Vice trésorier",
    description:
      "Passionné par l'entrepreneuriat et le développement durable à Madagascar.",
  },
  {
    name: "Norosoa Rasolosoa",
    image: "/people/norosoa.jpg",
    role: "Présidente de l'Association",
    description:
      "Engagée pour l'éducation et l'égalité des chances à Madagascar.",
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
    image: "/people/edwige.jpeg",
    testimony:
      "En août 2009, lors d'une visite à Vohitrafeno, mon mari a croisé une jeune collégienne qui vendait des boules de manioc râpée pour acheter des cahiers. Ce moment nous a inspirés à aider. Conscients des difficultés des familles rurales, nous avons décidé de donner des fournitures scolaires chaque année pour alléger leur charge et offrir un avenir meilleur aux enfants.",
  },
];

export const images = [
  "/actions/fourniture.jpeg",
  "/actions/furniture given.jpeg",
  "/actions/merci.jpg",
  "/actions/nouriture.jpeg",
  "/actions/prisca_oil.jpeg",
  "/actions/covid.jpeg",
];

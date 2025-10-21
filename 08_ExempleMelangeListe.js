talks = [
  { title: "JavaScript", duration: 100 },
  { title: "HTML", duration: 50 },
  { title: "Java", duration: 50 },
  { title: "Python", duration: 50 },
];

// '.sort(() => 0.5 - Math.random()' permet de mélanger une liste aléatoirement

const shuffledTalks = [...talks].sort(() => 0.5 - Math.random()); // Crée une copie de ton tableau en mélangeant les items
// ==> Résultat : on a 2 tableaux : le tableau d'origine + un tableau mélangé
console.log(talks);
console.log(shuffledTalks);

talks.sort(() => 0.5 - Math.random()); // Mélanger ton tableau ('talsk')
// => Résultat : on a qu'un seul tableau, on a 'écrasé' le talbeau d'origine pour le remplacer par le tableau trié
console.log(talks);

// La fonction filter crée une copie du tableau existant, la fonction filter de MODIFIE PAS le tableau d'origine.
// filter() applique un filtre sur les éléments

const words = ["spray", "elite", "exuberant", "destruction", "present"];

// Récupérer tous les mots de plus de 6 caractères
// Filtre => word.length > 6
const wordsFilter = words.filter((word) => word.length > 6);
console.log(wordsFilter);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Garder uniquement les nombres supérieurs à 10
numbersFilter = numbers.filter((number) => number > 5);
console.log(numbersFilter);

// 1. Créer un tableau qui contient les nombres pairs ( x % 2 === 0 )
const numbersPairs = numbers.filter((n) => n % 2 === 0);
console.log("nombres paires: ", numbersPairs);

// 2.  Faire une fonction 'textFilter(entreeUtilisateur)' qui prend en parametre une chaine de caractères
// --> la fonction doit trier le tableau 'words' pour ne garder que les mots qui contiennent le texte passé en param
// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// Pour le tri, on peut utiliser includes ou indexOf  ( voir W3 school ou MDN (https://developer.mozilla.org) )

// Par exemple -> console.log(textFilter("es"));
// --> resultat: ["destruction", "present"]

const textFilter1 = (entreeUtilisateur) => {
  const result = words.filter((word) => word.includes(entreeUtilisateur));
  return result;
};

// equivalent de la solution ci-dessus, avec un syntaxe plus concise
const textFilter2 = (entreeUtilisateur) =>
  words.filter((word) => word.includes(entreeUtilisateur));

// Test des fonctions
const result = textFilter1("es");
const result2 = textFilter2("es");

console.log("resultat recherche 1 'es': ", result);
console.log("resultat recherche 2 'es': ", result2);

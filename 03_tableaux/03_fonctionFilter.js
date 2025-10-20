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

// 2.  Faire une fonction 'textFilter(entreeUtilisateur)' qui prend en parametre une chaine de caractères
//  --> la fonction doit retourner un tableau qui contient uniquement les mots qui contiennent la chaine de caractères passée en param

// Pour le tri, on peut utiliser include ou indexOf  ( voir W3 school ou MDN (https://developer.mozilla.org) )

const words = ["spray", "elite", "exuberant", "destruction", "present"];

// Par exemple -> console.log(textFilter("es"));
// --> resultat: ["destruction", "present"]

// Trier le tableau 'words', garder les mots qui contiennent le texte passé en param
// Pour le tri, on peut utiliser indexOf ou includes

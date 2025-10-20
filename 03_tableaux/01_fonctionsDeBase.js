// 1. Céation d'un tableau

let myArray = [];
const myNames = ["Riri", "Fifi", "Loulou"];
let myArray2 = new Array(5);

console.log(myArray, myNames, myArray2);

// 2. Accès aux éléments (via l'index)
const myFirstElement = myNames[0];
const my2ndElement = myNames[1];

console.log(myFirstElement, my2ndElement);

// 3. Ajout / suppression / 'remplacement' de valeurs

// Ajout
myArray.push("Toto");
myNames.push("Toto");
myArray2.push("Toto");
console.log(myArray, myNames, myArray2);

// Suppression : (avec splice() __ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice )
// --> supression avec splice: splice(index du premier élément à supprimer, nombre d'élements à supprimer)
myArray.splice(0, 1);
myNames.splice(3, 1);
myArray2.splice(5, 1);
console.log(myArray, myNames, myArray2);

// Remplacement de valeur
// --> on veut remplacer "Fifi" par "Tata"
myNames.splice(1, 1, "Tata");
console.log(myArray, myNames, myArray2);

// --> on veut injecter "Toto" en 2e position
myNames.splice(1, 0, "Toto");
console.log(myArray, myNames, myArray2);

// 4. Parcourir un tableau
for (name of myNames) {
  console.log(name);
}

console.log("__________________________");

// On ne le verra que très très peu souvent
myNames.forEach(function (name) {
  console.log(name);
});

myNames.forEach(function (name, index, arr) {
  console.log(index + ": " + name + " et tableau: " + arr);
});

// Les développeurs javacripts utilisent beaucoup les fonctions fléchées
// sur les fonctions passées en paramètres d'autres fonctions
myNames.forEach((name) => console.log(name));

myNames.forEach((name, index, arr) =>
  console.log(index + ": " + name + " et tableau: " + arr)
);

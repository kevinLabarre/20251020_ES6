// La fonction map crée une copie du tableau existant, et applique la même opération sur chacun des éléments du tableau
// La fonction map ne MODIFIE PAS le tableau d'origine

const persons = [
  { firstName: "Malcom", lastName: "Reynolds" },
  { firstName: "Kaylee", lastName: "Frye" },
  { firstName: "Jayne", lastName: "Cobb" },
];

const person = { firstName: "Malcom", lastName: "Reynolds" };

const personCopy = persons.map(
  (person) => person.firstName + " " + person.lastName
);

console.log(personCopy);

const chiffres = [1, 2, 3, 4, 5];
// ==> Transformer ce tableau en un tableau contenant chacun des éléments au carré
// Résultat ==> [1, 4, 9, 16, 25]

const chiffresCarre = chiffres.map((n) => n * n);

const chiffresCarre2 = chiffres.map((n) => Math.pow(n, 2));

console.log(chiffresCarre, chiffresCarre2);

// Le .map doit avoir un return !
const chiffresCarre3 = chiffres.map((n) => {
  // Vérif si besoin

  return n * n;
});

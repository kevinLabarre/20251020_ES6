const numbersOne = [1, 2, 3, 4, 5];
const numbersTwo = [6, 7, 8, 9, 10];

// 1. Le spread operator sur le tableaux
console.log(numbersOne);
console.log(...numbersOne);
// Equivalent de la ligne ci-dessus
console.log(1, 2, 3, 4, 5);

// Copie propre d'un tableau avec spread operator
const numbersCopie = [...numbersOne];
console.log("copie de 'numbersOne': ", numbersCopie);

// Ne pas faire avec un type complexe (objet ou tableau)
const copieSale = numbersOne;

const numbersCombined = [...numbersOne, 6, 7];
console.log("numbersCombined: ", numbersCombined);

const numbersCombined2 = [...numbersOne, ...numbersTwo];
console.log("2eme numbersCombined: ", numbersCombined2);

// 2. Fonction avec un paramètre qui utilise le spread

const sum = (...numbers) => {
  // Dans cette fonction, nous récupérons une variable 'numbers' de type tableau

  let result = 0;

  numbers.forEach((n) => (result = result + n));
  return result;
};

const resultSum = sum(1, 2, 3, 4, 5);
console.log(resultSum);

// 3. Spread operator sur les objets

const user = {
  fisrtName: "John",
  lastName: "Doe",
  age: 25,
};

// Copie d'objet
const userCopie = { ...user };
console.log(userCopie);

// Copie + modification / ajout de propriétés
const user2 = { ...user, age: 30 }; // pour copier en modifiant la valeur de 'age'
console.log(user2);

const user3 = { ...user, city: "New-york", phone: "01 02 03 04 05" }; // pour copier + ajouter des propriétés
console.log(user3);

// Concaténation d'objets
const userInfo = {
  city: "New-york",
  phone: "01 02 03 04 05",
};

const user4 = { ...user, ...userInfo };
console.log(user4);

// 4. DESTRUCUTRATION

console.log("_________________ DESTRUCTURATION _________________");

const cars = ["Mustang", "Corvette", "F-150", "Focus"];

const [car1, car2, car3, car4] = cars;
// const car1 = cars[0];
// const car2 = cars[1];
// const car3 = cars[2];
// const car4 = cars[3];

console.log(car1, car2, car3, car4);

cars.push("Tesla");
const [, , , , car5] = cars; // Pour extraire uniquement la dernière voiture

const calculate = (a, b) => {
  const add = () => a + b;
  const sub = () => a - b;
  const mul = () => a * b;
  const div = () => a / b;

  return [add, sub, mul, div];
};

const [add, , multiply, div] = calculate(4, 2);

console.log(
  ` Opération avec 4 et 2 -->  add: ${add()}  |  multiply: ${multiply()}  |  div: ${div()}`
);

// Exemple équivalent sans destructuration (en utilisant un param supplémentaire + un switch)
const calculate2 = (a, b, operator) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return "Opération non prise en charge";
  }
};

console.log(
  ` Opération avec 4 et 2 -->  add: ${calculate2(
    4,
    2,
    "+"
  )}  |  multiply: ${calculate2(4, 2, "*")}  |  div: ${calculate2(4, 2, "/")}`
);

// Destructuration d'objets
const person = {
  fisrtName: "John",
  lastName: "Doe",
  age: 25,
};

const { age } = person;
console.log("nom, prénom et âge: ", age);

const calculate3 = (a, b) => {
  const add = () => a + b;
  const sub = () => a - b;
  const mul = () => a * b;
  const div = () => a / b;

  return { add, sub, mul, div };
};

// Renommer la variable créé lors de la destructuration
const { div: division } = calculate3(4, 2); // ici on a créé une vairbale 'division' qui est la fonction lié à la propriété 'div' de return
console.log(division());

// 5. Destructuration + spread operator
const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10];

const [n1, n2, n3, n4, ...rest] = numbers; // permet de garder dans un tableau nommé 'rest' les valeurs non extraite par la destructuration
console.log(rest);

// Attention, 'rest' n'est pas un mot clé
const [n5, n6, n7, n8, ...toto] = numbers; // permet de garder dans un tableau nommé 'rest' les valeurs non extraite par la destructuration
console.log(toto);

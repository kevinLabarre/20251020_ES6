const numbersOne = [1, 2, 3, 4, 5];
const numbersTwo = [6, 7, 8, 9, 10];

// 1. Le spread operator
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
  let result = 0;

  numbers.forEach((n) => (result = result + n));
  return result;
};

const resultSum = sum(1, 2, 3, 4, 5);
console.log(resultSum);

// DESTRUCUTRATION / Copie d'objet complexe

const user = {
  fisrtName: "John",
  lastName: "Doe",
  age: 25,
  city: "New-york",
  phone: "01 02 03 04 05",
};

// A  eviter : Ne pas copier des types 'complexes' avec un symple égales
// les types complexes en js sont : (objet, tableau et fonction)

const userCopy = user;

console.log(`____user :___`);
console.log(user);
console.log(`____user copie:___`);
console.log(userCopy);

userCopy.age = 30;
userCopy.job = "ingeneur";

console.log(`____user :___`);
console.log(user);
console.log(`____user copie:___`);
console.log(userCopy);

// COPIE PROPRE :
// ( avec Object.assign ou avec le spread )
const copiePropre = Object.assign({}, user);
const copiePropre2 = { ...user };

console.log(copiePropre2);

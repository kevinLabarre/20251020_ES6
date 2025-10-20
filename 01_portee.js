{
  let myLet = "Hello world !";
  myLet = 10; // Javscript utilise du typage dynamique -> On peut réaffecter la variable, avec le type que l'on souhaite

  var myVar = "Hello world !";
  myVar = 10;

  const MYCONST = "Hello world !";
  // MYCONST = 10; // Erreur déclenchée

  console.log(MYCONST);
}

console.log(myVar);
// console.log(myLet);
// console.log(MYCONST);

console.log("__________Exo portée : __________");

var x = 10;
console.log("1", x); // 10

{
  let x = 2;
  console.log("2", x); // 2
  var y = 5;
  const Z = 6;
}

console.log("3", x); // 10
console.log("4", y); // 5
console.log("5", Z); // erreur

function hello() {
  console.log("Hello world !");
}

function helloName(name) {
  console.log(typeof name);

  if (typeof name !== "string") {
    // return; // Solution 1: juste un 'return' -> notre fonction ne retournera 'rien'

    // Solution 2: On peut déclencher une erreur
    throw new Error("le type attendu doit être une chaîne de caractères");
  }
  return "Hello " + name;
}

hello();

const CONST_HELLO = helloName("Toto");

console.log(helloName("John"));

// helloName(null); // Déclenche notre erreur

console.log("_________________ Fonctions fléchées _________________");

const helloFleche = () => {
  console.log("Hello world !");
};

const helloNameFleche = (name) => {
  return "Hello " + name;
};

helloFleche();

const NAME_FLECHE = helloNameFleche("Toto");
console.log(NAME_FLECHE);
console.log(helloNameFleche("Toto"));

// Sans les ' {} ' , la fonction fléchée a un return implicite
const helloNameFleche2 = (name) => "Hello " + name;

function helloNameFleche3(name) {
  return "Hello " + name;
}

console.log(helloNameFleche2("Toto"));
console.log(helloNameFleche3("Toto"));

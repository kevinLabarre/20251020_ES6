// 1. Création d'un objet 'à la volée'

const user = { fisrtName: "John", lastName: "Doe", age: 25 };

console.log(user);

// 2. Création d'un objet en passant par un modèle (par une class)

class User {
  fisrtName;
  lastName;
  age;

  constructor(firstName, lastName, age) {
    this.fisrtName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const userWithModel = new User("John", "Doe", 25);

console.log(userWithModel);

// 3. 2nd exemple avec Class + méthode de class + getter/setter

class Car {
  constructor(name, model, year) {
    this._name = name;
    this.model = model;

    // this.#year = year; // on attribut la valeur sans passer par le setter
    this.year = year; // on attribut la valeur en passant par le setter
  }

  _name;
  #year;

  // On peut se passer de réécrire le nom des attributs dont on attribut des valeurs dans le constructeur
  //   model;

  display() {
    console.log(
      `Voiture, nom: ${this.name}, modèle : ${this.model}, année: ${this.#year}`
    );

    this.#year = 2020;
    this.year = 2020;
  }

  get fullName() {
    return this.name + " " + this.model;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    console.log("On passe par le setter !");
    this._name = newName;
  }

  get year() {
    console.log("passé par le getter 'get year()' ");
    return this.#year;
  }

  set year(newYear) {
    console.log("Passé par le setter  'set year'");

    if (typeof newYear !== "number") {
      throw new Error("L'année doit être une valeur numérique");
    }

    if (newYear > 2025) {
      throw new Error("Une voiture ne peut avoir une année superieur à 2025");
    }

    this.#year = newYear;
  }
}

const car = new Car("Toyota", "Camry", 2022);
console.log(car);

// 1. Accès aux propriétés et méthodes
const carName = car.name;
const carModel = car.model;
console.log("nom et modèle: ", carName, carModel);

car.display();

// 2. Accès aux propriétés avec accesseurs
const carYear = car["year"];
console.log("année: ", carYear);

// 3. Utilisation des getters
const fullName = car.fullName;
console.log("fullName avec getter: ", fullName);

// 4. Modification de la valeur d'une propriété
car.year = 2024;
console.log(car);

// Attention, on peut ajouter des attributs 'à la volée', donc attention aux fautes de frappes lorsqu'on
// veut modifier la valeur d'un des attributs de notre objet :
car.color = "red";

car.yeear = 2024; // ici on créée un nouveau attribut 'yeear' en plus de l'attribut 'year' existant
console.log(car);

// 5. Utilisation des setters
car.name = "Mercedes";
console.log(car);

// 6. Attibut privé + Getters et setters
const year2 = car.year;
car.year = 2025;
console.log("Année après modif avec le setter: ");
car.display();

// car.year = "Toto"; // Génère une erreur
// const car2 = new Car("Toyota", "Camry", 2026); // Génère une erreur
// const car2 = new Car("Toyota", "Camry", "Test avec chaine de caratères"); // Génère une erreur

//
car.year = 2020;
// car.#year = 2020;

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  ageComparison(userX) {
    if (this.age > userX.age) {
      console.log(this.firstName, " è più grande di", userX.firstName);
    } else if (userX.age > this.age) {
      console.log(userX.firstName, " è più grande di", this.firstName);
    } else {
      console.log(userX.firstName, " e ", this.firstName, "sono coetanei");
    }
  }
}

const user1 = new User("Kateryna", "Matviyeva", 28, "Napoli");
const user2 = new User("Pinko", "Pallino", 30, "Genova");
const user3 = new User("Giovanni", "Muciaccia", 54, "Foggia");
const user4 = new User("Papa", "Francesco", 30, "Buenos Aires");

user1.ageComparison(user2);
user2.ageComparison(user3);
user3.ageComparison(user1);
user2.ageComparison(user4);

class Pets {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  sameOwner(petX) {
    return this.ownerName === petX.ownerName;
  }
}

const pet = [];

const form = document.getElementById("petForm");
const lista = document.getElementById("petList");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pets(petName, ownerName, species, breed);
  pet.push(newPet);

  const li = document.createElement("li");
  li.innerText = "Nome: " + newPet.petName + ", Padrone: " + newPet.ownerName + ", Specie: " + newPet.species + ", Razza: " + newPet.breed;
  lista.appendChild(li);

  pet.forEach((pet) => {
    if (pet !== newPet && newPet.sameOwner(pet)) {
      console.log(newPet.petName, " e ", pet.petName, "hanno lo stesso padrone", newPet.ownerName);
    }
  });
  form.reset();
});

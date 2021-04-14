// Ферма животных
class Animal {
  constructor(name, age, childs = null) {
    this.name = name;
    this.age = age;
    this.childs = childs;
  }
}

class Cat extends Animal {
  constructor(name, age, childs = null) {
    super(name, age, childs);
  }
}

class Dog extends Animal {
  constructor(name, age, childs = null) {
    super(name, age, childs);
  }
}

class Cow extends Animal {
  constructor(name, age, childs = null) {
    super(name, age, childs);
  }
}

function getAnimalsAge(animals) {
  let output = 0;

  if (animals.length > 0) {
    output += animals.reduce((acc, current) => {
      let count = 0;
      if (current.childs && current.childs.length > 0) {
        count += getAnimalsAge(current.childs);
      }
      return acc + current.age + count;
    }, 0);
  }

  return output;
}

function generateAnimals(type, count) {
  let output = [];

  for (let i = 0; i <= count; i++) {
    let parameter = {
      name: `${type} ${i}`,
      age: i,
      childs: []
    };

    let item = null;

    switch (type) {
      case "Cat":
        item = new Cat(parameter.name, parameter.age);
        break;
      case "Dog":
        item = new Dog(parameter.name, parameter.age);
        break;
      case "Cow":
        item = new Cow(parameter.name, parameter.age);
        break;
    }

    if (item) {
      output.push(item);
    }
  }

  return output;
}

function addChildsTo(animals, count, type) {
  animals.forEach(animal => {
    if (!animal.childs) {
      animal.childs = [];
    }
    animal.childs = generateAnimals(type, count);
  });
}

let cats = generateAnimals("Cat", 5);
addChildsTo(cats, 10, "Cat");

let dogs = generateAnimals("Dog", 3);
addChildsTo(dogs, 3, "Dog");

let cows = generateAnimals("Cow", 7);
addChildsTo(cows, 1, "Dog");

let animals = [...cats, ...dogs, ...cows];

console.log(getAnimalsAge(animals))

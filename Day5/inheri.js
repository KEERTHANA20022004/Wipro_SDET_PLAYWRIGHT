// Single Inheritance
class Bird {
  fly() {
    console.log("Bird can fly");
  }
}

class Parrot extends Bird {
  speak() {
    console.log("Parrot can talk");
  }
}

const p = new Parrot();

p.fly();    
p.speak();  


//Multilevel Inheritance
class Animal {
  eat() {
    console.log("Eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking");
  }
}

class Puppy extends Dog {
  weep() {
    console.log("Weeping");
  }
}
const puppy = new Puppy();
puppy.eat();
puppy.bark();
puppy.weep();   
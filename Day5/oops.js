// OOPS concepts in JavaScript
// Constructor function
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

const dog = new Animal("Jhonny");
const cat = new Animal("Whiskers");
dog.speak();
cat.speak();


// Encapsulation
class BankAccount {
    #balance = 0; // private variable | Access modifier
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. Current Balance: ₹${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. Current Balance: ₹${this.#balance}`);
        } else {
            console.log("Withdrawal amount must be positive and less than or equal to the current balance.");
        }
    }
    getBalance() {
        return this.#balance;
    }
}

const keerthAccount = new BankAccount();
keerthAccount.deposit(1000);
keerthAccount.withdraw(200);
// keerthAccount.balance = 10000;
console.log(`Final Balance: ₹${keerthAccount.getBalance()}`);
 
const kiruAccount = new BankAccount();
kiruAccount.deposit(500);
kiruAccount.withdraw(1000);
console.log(`Final Balance: ₹${kiruAccount.getBalance()}`);


// Inheritance
class User {
    constructor(name) {
        this.name = name;
    }
    logIn() {
        console.log(`${this.name} has logged in.`);
    }
}
class Admin extends User {
    constructor(name, role) {
        super(name); // call the parent class constructor
        this.role = role;
    }
    logIn() {
        super.logIn(); // call the parent class method
        console.log(`${this.name} has admin privileges as a ${this.role}.`);
    }
}
 
const user1 = new User("Alice");
const admin1 = new Admin("Bob", "Super Admin");
 
user1.logIn(); // Alice has logged in.
admin1.logIn(); // Bob has logged in. Bob has admin privileges as a Super Admin.


// Polymorphism
class Shape {
    draw() {
        console.log('Drawing a shape');
    }
}
class Circle extends Shape {
    draw() {
        console.log('Drawing a circle');
    }
}
class Square extends Shape {
    draw() {
        console.log('Drawing a square');
    }
}
 
const shapes = [new Circle(), new Square()];
 
shapes.forEach(shape => shape.draw());


// Abstraction
class CoffeMachine {
    #waterTemperature = 90;
    #boilWater() {
        return `Boiling water to ${this.#waterTemperature} degrees.`;
    }
    #grindBeans() {
        return "Grinding beans.";
    }
    brew() {
        const boilMessage = this.#boilWater();
        const grindMessage = this.#grindBeans();
        return `${boilMessage} ${grindMessage} Brewing coffee.`;
    }
}
 
const myCoffeMachine = new CoffeMachine();
console.log(myCoffeMachine.brew());
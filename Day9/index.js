"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = "Aaryan";
let result;
result = 45;
result = "success";
console.log(name, result);
function add(a, b) {
    return "Sum: " + (a + b);
}
console.log(add(5, 10));
var Role;
(function (Role) {
    Role["User"] = "USER";
    Role["Admin"] = "ADMIN";
    Role["SuperAdmin"] = "SUPER_ADMIN";
})(Role || (Role = {})); // USER, user, User, ADMIN, Admin, admin, SUPER_ADMIN, SuperAdmin, superAdmin
const user = {
    id: 1,
    name: "Aaryan",
    age: 25,
    role: Role.User,
    email: "aaryan@gmail.com"
};
const admin = {
    id: 2,
    name: "Arush",
    age: 30,
    email: "arush@gmail.com",
    role: Role.Admin,
    isAdmin: true
};
console.log(user, admin);
let coordinates = [40.7128, "-74.0060"]; // Tuple for latitude and longitude
console.log("Coordinates:", coordinates);
let arr = [1, 2, 3]; // array of numbers
console.log("Array:", arr);
// function identity<T>(arg: T): T {
//     return arg;
// }
// let output = identity<number>(10);
// let outpu1 = identity<string>("Aaryan");
// let outpu2 = identity<boolean>(true);
// console.log(output, outpu1, outpu2);
// Generic interface for a bag that can hold any type of content
// interface Bag<T> {
//     content: T;
// }
// const stringBag: Bag<string> = {content: "Apple"};
// const numberBag: Bag<number> = {content: 5};
// console.log(stringBag, numberBag);
class Storage {
    items = [];
    addItems(item) {
        this.items.push(item);
    }
    getItem(index) {
        return this.items[index]; // non-null assertion operator to indicate that the item will exist at the given index
    }
}
const names = new Storage();
names.addItems("Aaryan");
names.addItems("Arush");
names.addItems("Rohan");
console.log(names.getItem(0), names.getItem(1), names.getItem(2), names.getItem(3)); // undefined for index 3
// generics with contraints | extends keyword
function logLength(arg) {
    console.log(arg.length);
}
logLength("Aaryan"); // string --> length
logLength([1, 2, 3]); // array --> length
// logLength(10); // number --> X
//# sourceMappingURL=index.js.map
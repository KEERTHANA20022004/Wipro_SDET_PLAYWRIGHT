// 1. Logging Names
const names = ['Alice', 'Bob', 'Charlie'];
names.forEach(name => console.log("Hello, " + name));


// 2. Temperature Conversion
const celsius = [0, 10, 20, 30];
const fahrenheit = celsius.map(c => c * 1.8 + 32);
console.log(fahrenheit); 


// 3. Finding Adults
const users = [
  { name: 'Li', age: 16 },
  { name: 'Dan', age: 22 },
  { name: 'Sarah', age: 17 }
];
const adults = users.filter(user => user.age >= 18);
console.log(adults);


// 4. String Lengths
function filterLongStrings(arr) {
  return arr.filter(str => str.length > 5);
}
console.log(filterLongStrings(['sparrow', 'eagle', 'owl', 'peacock']));


// 5. Total Cost
const prices = [19.99, 5.50, 3.99, 25.00];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); 


// 6. Counting Occurrences
const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];
const count = fruits.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log(count.apple); 


// 7. Array Transformation
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * num);
console.log(result); 


// 8. Object Extraction
const products = [
  { id: 1, title: 'Laptop' },
  { id: 2, title: 'Mouse' }
];
const titles = products.map(p => p.title);
console.log(titles);


// 9. The Average
const scores = [80, 90, 70, 100];
const avg = scores.reduce((sum, val) => sum + val, 0) / scores.length;
console.log(avg); 


// 10. Flattening
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat);
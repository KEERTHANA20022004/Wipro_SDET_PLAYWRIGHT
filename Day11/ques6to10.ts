
// 6. Conditional Types & the infer Keyword
// Scenario: You are working with a library that returns data wrapped in a Promise, and you need to extract the underlying type.
// Task: Create a utility type UnwrapPromise<T>.
//  It should check if T is a Promise. 
//  If it is, use the infer keyword to return the type the promise resolves to; otherwise, return T itself.

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type UsernameType = UnwrapPromise<Promise<string>>;
type EmailType = UnwrapPromise<Promise<string>>;
type LoginStatusType = UnwrapPromise<boolean>;

const username: UsernameType = "keerthana";
const email: EmailType = "keer@gmail.com";
const isLoggedIn: LoginStatusType = true;

console.log(username);
console.log(email);
console.log(isLoggedIn);












// 7. The Union Manipulation Puzzle
// Scenario: You have a massive union of possible events but need to categorize them for specific handlers.
// Task: Given type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress'.
// Use Extract to create MouseEvents (only click and dbclick).
// Use Exclude to create NonFormEvents (everything except submit and reset).
type AllEvents = 'click' | 'dbclick' | 'submit' | 'reset' | 'keypress';

type MouseEvents = Extract<AllEvents, 'click' | 'dbclick'>;
type NonFormEvents = Exclude<AllEvents, 'submit' | 'reset'>;

const mouseEvents: MouseEvents = 'click';
const nonFormEvent: NonFormEvents = 'keypress';

console.log(mouseEvents);
console.log(nonFormEvent);

// 8. Async Higher-Order Function (HOF)
//  Scenario: You want to wrap any asynchronous function with a standard error logger. ● Task: Write a generic function safeExecute<T> 
// that takes an async function as an argument.
//  It should return a new function that, when called, executes the original function inside a try/catch block and returns null if it fails.







// 9. Index Signatures for Dynamic Metadata ● 
// Scenario: You are receiving a "Metadata" object from a server where the keys are dynamic strings, 
// but the values must be either a string, number, or boolean. ● 
// Task: Create an interface UserMetadata that has a required 
// createdAt: Date but allows any other dynamic string keys as long as their values match the union type mentioned.





//10. Mapped Types with Key Remapping
// ● Scenario: You have a data model and need to generate a type for an API response that "prefixes" all the keys.
// ● Task: 1. Define an interface Car { make: string; model: string; }. 
// 2. Create a mapped type ApiResponse<T> that iterates through keys of T and 
// renames them to be uppercase and prefixed with DATA_ (e.g., make becomes DATA_MAKE).
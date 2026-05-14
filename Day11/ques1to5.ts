
//question 1. The Generic API Wrapper
// Scenario: You need a reusable function to fetch data that automatically types the response.
// Task: Write a generic function fetchData<T>(url: string): Promise<T>. It should use the fetch API, 
// check if the response is okay, and return the JSON parsed as type T. 
// Test it by creating an Album interface and fetching data from a mock URL.

async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error('Network request Failed: ' + response.statusText)
    }
    const data: T = await response.json();
    return data;
}

interface Album {
    userId: number,
    id: number,
    title: string
}

async function demo() {
    const url = "https://jsonplaceholder.typicode.com/albums/1";
    const album = await fetchData<Album>(url);

    console.log(`Album ID: ${album.id}`)
    console.log(`Album Title: ${album.title}`)
}

demo();

// // question 2  Record Mapping for Configuration
// // Scenario: You are managing feature flags or permissions for specific user roles.
// // Task: Define an enum Role { Admin, Editor, Guest }. Use the Record utility type to create a 
// // variable PermissionMap where every Role must be mapped to a boolean value. If a role is missing from the object, 
// // TypeScript should throw an error.

enum Role {
    Admin,
    Editor,
    Guest
}

type PermissionMap = Record<Role, boolean>;

const permissions: PermissionMap = {
    [Role.Admin]: true,
    [Role.Editor]: false,
    [Role.Guest]: false
};
console.log(permissions);


//  question 3 Exhaustiveness Checking (The never Type)
// Scenario: You want to ensure that if a new member is added to a Union, your logic must be updated to handle it.
// Task:
// Create a union type TaskStatus = 'Open' | 'InProgress' | 'Closed'.
// Write a function handleTask(status: TaskStatus) using a switch statement.
// In the default case, assign the status to a variable of type never.
// The Test: Add 'Archived' to the union and verify that the code fails to compile until you add the new case.

type TaskStatus = 'Open' | 'InProgress' | 'Closed';

function handleTask(status: TaskStatus) {
    switch (status) {
        case 'Open':
            console.log('Task is open.');
            break;
        case 'InProgress':
            console.log('Task is in progress.');
            break;
        case 'Closed':
            console.log('Task is closed.');
            break;
        default:
            const exhaustiveCheck: never = status;

 }
}

// question 4. Recursive Navigation Type
// ● Scenario: You are building a tree structure for a file system or a sidebar menu. 
// ● Task: Define a type FolderNode that has a name: string. 
// It should also have an optional files: string[] and an optional subFolders property, 
// which is an array of FolderNode objects.

type FolderNode = {
  name: string;
  files?: string[];
  subFolders?: FolderNode[];
};

const sidebar_menu: FolderNode = {
  name: "Root",
  files: ["menu.html", "menu.css"],
  subFolders: [
    {
      name: "SubFolder1",
      files: ["Dishes.html", "Dishes.css"]
    },
    {
      name: "SubFolder2",
      subFolders: [
        {
          name: "SubSubFolder1",
          files: ["meals.html", "meals.css"]
        }
      ]
    }
  ]
};










// question 5. Template Literal Types for CSS
// Scenario: You are building a UI library and want to strictly enforce unit types for a "spacing" prop.
// Task: Create a type MarginValue that only allows strings 
// ending in "px", "rem", or "vh" (e.g., "10px", "2rem"). Use Template Literal Types to ensure a number must precede the unit.


type MarginValue = `${number}px` | `${number}rem` | `${number}vh`;

let M1: MarginValue = "10px"; // Valid
let M2: MarginValue = "2rem"; // Valid
// let M4: MarginValue = "15%"; // Invalid
// let M5: MarginValue = "20"; // Invalid

console.log("M1:", M1);
console.log("M2:", M2);






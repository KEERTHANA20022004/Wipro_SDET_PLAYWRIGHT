// Synopsis: JavaScript Exercises

// This set of 4 problems demonstrates real-world JavaScript operations such as data cleaning, transformation, filtering, sorting, callback handling, and asynchronous processing.

// Q1: Flight Booking Data Cleaner

// Processes raw flight booking strings and converts them into structured flight objects. Invalid or missing prices are safely converted to 0. The data is filtered within a specific price range, sorted in ascending order, and converted into a JSON string.

// Concepts Used
// split()

// Used to separate city names and prices from a string.

// map()

// Transforms each raw string into an object.

// Number()

// Converts string prices into actual numbers.

// isNaN()

// Checks whether converted price is invalid.

// filter()

// Keeps only flights between $100 and $500.

// sort()

// Sorts flights from cheapest to highest price.

// JSON.stringify()

// Converts final array into JSON string format.

// Q2: E-Commerce Discount Applicator

// Implements a promo-code system using callback functions. Eligible products receive discounts, discount status is added to every item, and results are displayed after a delay.

// Concepts Used
// Callback Function

// A function passed as an argument to another function for custom discount checking.

// map()

// Updates every product object with discount information.

// Conditional Logic

// Checks product category and price eligibility.

// Percentage Calculation

// Calculates 10% discount from product price.

// Spread Operator (...)

// Copies existing object properties while adding new ones.

// Template Literals

// Creates dynamic output messages.

// setTimeout()

// Simulates delayed server response.

// Q3: Movie Stream Analytics

// Processes raw movie streaming data into structured objects, validates views, filters top-performing content, and sorts by popularity.

// Concepts Used
// split()

// Separates movie name, genre, and views.

// map()

// Converts raw movie strings into objects.

// Number()

// Converts view count into number.

// isNaN()

// Handles corrupted or invalid views.

// Logical Operators (||, &&)

// Checks movie genre and views conditions.

// filter()

// Keeps only top-performing movies.

// sort()

// Sorts movies by highest views first.

// JSON.stringify()

// Returns final movie list as JSON string.

// Q4: Automated Payroll Processor

// Builds a payroll system that calculates taxes, computes net salary, assigns employee status, and processes payroll after a delay.

// Concepts Used
// Callback Function

// Used for custom tax calculation logic.

// Ternary Operator

// Used for deciding tax percentage.

// map()

// Processes every employee object.

// Percentage Calculation

// Calculates salary tax deductions.

// Object Property Addition

// Adds netSalary and status.

// Conditional Logic

// Checks employee salary slabs and status.

// Template Literals

// Displays payroll summary dynamically.

// setTimeout()
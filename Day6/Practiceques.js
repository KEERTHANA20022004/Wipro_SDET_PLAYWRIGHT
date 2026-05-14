// Flight Booking Data Cleaner

const rawFlights = [
  "Chennai-Delhi:300",
  "Mumbai-Dubai:700",
  "Bangalore-Goa:200",
  "Hyderabad-Singapore:abc"
];

const cleanedFlights = rawFlights
  .map(flight => {

    const [route, priceData] = flight.split(":");

    const [from, to] = route.split("-");

    let price = Number(priceData);

    // check invalid number
    if (isNaN(price)) {
      price = 0;
    }

    return {
      from,to,price
    };
  })
  .filter(flight => flight.price >= 100 && flight.price <= 500)

  .sort((a, b) => a.price - b.price);

// convert into JSON string
const finalResult = JSON.stringify(cleanedFlights);
console.log(finalResult);

// =========================
// Question 2
// E-Commerce Discount Applicator
// =========================

const shoppingItems = [
  { productName: "Laptop", cost: 900, type: "Electronics" },
  { productName: "Mixer", cost: 80, type: "Home" },
  { productName: "Tablet", cost: 350, type: "Electronics" },
  { productName: "Chair", cost: 120, type: "Furniture" }
];

// callback function
const checkDiscount = item => {
  return item?.type === "Electronics" && item?.cost > 200;
};

function applyOffer(itemsList, callbackFn) {
  if (!itemsList) return;

  let discountedItems = 0;
  let savedAmount = 0;

  const updatedItems = itemsList.map(item => {
    if (callbackFn(item)) {
      const discountValue = item.cost * 0.10;

      discountedItems++;
      savedAmount += discountValue;

      return {
        ...item,
        cost: item.cost - discountValue,
        isDiscounted: true
      };
    }

    return {
      ...item,
      isDiscounted: false
    };
  });

  console.log(
    `Promotion applied! ${discountedItems} items were discounted for a total saving of $${savedAmount}.`
  );

  setTimeout(() => {
    console.log(updatedItems);
  }, 1000);
}

applyOffer(shoppingItems, checkDiscount);



// =========================
// Question 3
// Movie Stream Analytics
// =========================

const movieCollection = [
  "Avatar|Sci-Fi|20000",
  "Frozen|Animation|7000",
  "John Wick|Action|9000",
  "Batman Begins|Action|wrong",
  "Interstellar|Sci-Fi|15000"
];

const filteredMovies = movieCollection
  .map(movieData => {
    const [movieTitle, movieCategory, watchCount] =
      movieData.split("|");

    let totalViews = Number(watchCount);

    if (isNaN(totalViews)) {
      totalViews = 0;
    }

    return {
      movieTitle,
      movieCategory,
      totalViews
    };
  })

  .filter(
    movie =>
      (movie.movieCategory === "Action" ||
        movie.movieCategory === "Sci-Fi") &&
      movie.totalViews > 5000
  )

  .sort((a, b) => b.totalViews - a.totalViews);

const movieResult = JSON.stringify(filteredMovies);

console.log(movieResult);



// =========================
// Question 4
// Automated Payroll Processor
// =========================

const workerDetails = [
  { empId: 201, empName: "Rahul", monthlySalary: 6500 },
  { empId: 202, empName: "Sneha", monthlySalary: 3000 },
  { empId: 203, empName: "Arjun", monthlySalary: 5500 }
];

// callback function
const calculateTaxRate = worker => {
  return worker.monthlySalary > 5000 ? 0.20 : 0.10;
};

function processPayroll(employeeList, taxCallback) {
  if (!employeeList) return;

  let payoutAmount = 0;

  const payrollData = employeeList.map(worker => {
    const currentTax = taxCallback(worker);

    const taxDeduction =
      worker.monthlySalary * currentTax;

    const finalSalary =
      worker.monthlySalary - taxDeduction;

    payoutAmount += finalSalary;

    return {
      ...worker,
      finalSalary,
      employeeStatus:
        finalSalary > 4000 ? "Premium" : "Standard"
    };
  });

  console.log(
    `Payroll Processed: Total Net Payout is $${payoutAmount} for ${employeeList.length} employees.`
  );

  setTimeout(() => {
    console.log(payrollData);
  }, 2000);
}

processPayroll(workerDetails, calculateTaxRate);

// =========================
// Questions
//
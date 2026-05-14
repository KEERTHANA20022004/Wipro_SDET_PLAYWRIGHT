fetch("https://catfact.ninja/facts")
  .then(res => res.json()) // Step 1: convert to JSON
  .then(data => {
    console.log(data); // check full response

    // Step 2: extract array
    const facts = data.data;

    // Step 3: filter useful data
    const result = facts.filter(item => item.length > 70);

    return result;
  })
  .then(filteredData => console.log(filteredData)) // Step 4: final output
  .catch(error => console.error("Error:", error));
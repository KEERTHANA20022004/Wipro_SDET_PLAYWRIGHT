// 1. Dog CEO — Breeds list
async function getDogBreeds() {
  let data = await fetch("https://dog.ceo/api/breeds/list/all");
  data = await data.json();

  let result = Object.keys(data.message)
    .filter(b => b.startsWith("a"));

  console.log("Dog Breeds:", result);
  return result;
}

getDogBreeds();


// 2. Open Brewery DB — California Breweries
async function getBreweries() {
  let data = await fetch("https://api.openbrewerydb.org/v1/breweries");
  data = await data.json();

  let result = data
    .filter(b => b.state === "California")
    .map(b => b.name);

  console.log("Breweries:", result);
  return result;
}

getBreweries();


// 3. SpaceX — Active Rockets
async function getRockets() {
  let data = await fetch("https://api.spacexdata.com/v4/rockets");
  data = await data.json();

  let result = data
    .filter(r => r.active)
    .map(r => r.name);

  console.log("Rockets:", result);
  return result;
}

getRockets();


// 4. TVMaze — High Rated Shows
async function getShows() {
  let data = await fetch("https://api.tvmaze.com/shows");
  data = await data.json();

  let result = data
    .filter(s => s.rating.average > 7)
    .map(s => s.name);

  console.log("Shows:", result);
  return result;
}

getShows();


// 5. Random User — Female Names
async function getUsers() {
  let data = await fetch("https://randomuser.me/api/?results=10");
  data = await data.json();

  let result = data.results
    .filter(u => u.gender === "female")
    .map(u => u.name.first);

  console.log("Users:", result);
  return result;
}

getUsers();


// 6. Open Notify — Astronauts
async function getAstronauts() {
  let data = await fetch("https://api.open-notify.org/astros.json");
  data = await data.json();

  let result = data.people
    .map(p => p.name);

  console.log("Astronauts:", result);
  return result;
}

getAstronauts();


// 7. Photos API — First 5 URLs
async function getPhotos() {
  let data = await fetch("https://jsonplaceholder.typicode.com/photos");
  data = await data.json();

  let result = data
    .filter(p => p.id <= 5)
    .map(p => p.url);

  console.log("Photos:", result);
  return result;
}

getPhotos();


// 8. Random User API — Female Names
async function getRandomUsers() {
  let data = await fetch("https://randomuser.me/api/?results=10");
  data = await data.json();

  let result = data.results
    .filter(u => u.gender === "female")
    .map(u => u.name.first);

  console.log("Random Users:", result);
  return result;
}

getRandomUsers();


// 9. Pokémon API — Names starting with "b"
async function getPokemon() {
  let data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  data = await data.json();

  let result = data.results
    .filter(p => p.name.startsWith("b"))
    .map(p => p.name);

  console.log("Pokémon:", result);
  return result;
}

getPokemon();


// 10. Cat Facts API — Short Facts
async function getCatFacts() {
  let data = await fetch("https://catfact.ninja/facts");
  data = await data.json();

  let result = data.data
    .filter(f => f.fact.length < 50)
    .map(f => f.fact);

  console.log("Cat Facts:", result);
  return result;
}

getCatFacts();
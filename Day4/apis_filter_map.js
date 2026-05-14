
//1. Dog CEO — Breeds list
fetch("https://dog.ceo/api/breeds/list/all")
  .then(r => r.json())
  .then(o => o.message)
  .then(o => Object.keys(o))
  .then(a => a.filter(b => b.startsWith("a")))
  .then(a => a.map(b => b))
  .then(console.log);


//2. Open Brewery DB
fetch("https://api.openbrewerydb.org/v1/breweries")
  .then(r => r.json())
  .then(a => a.filter(b => b.state === "California"))
  .then(a => a.map(b => b.name))
  .then(console.log);


//3. SpaceX — Rockets
fetch("https://api.spacexdata.com/v4/rockets")
  .then(r => r.json())
  .then(a => a.filter(r => r.active === true))
  .then(a => a.map(r => r.name))
  .then(console.log);



4. //TVMaze — Shows
fetch("https://api.tvmaze.com/shows")
  .then(r => r.json())
  .then(a => a.filter(s => s.rating.average > 7))
  .then(a => a.map(s => s.name))
  .then(console.log);


//5 Random User
fetch("https://randomuser.me/api/?results=10")
  .then(r => r.json())
  .then(o => o.results)
  .then(a => a.filter(u => u.gender === "male"))
  .then(a => a.map(u => u.name.first))
  .then(console.log);

6. //Open Notify — Astronauts
fetch("http://api.open-notify.org/astros.json")
  .then(r => r.json())
  .then(o => o.people)
  .then(a => a.map(p => p.name))
  .then(console.log);


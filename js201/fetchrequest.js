// fetch('www.website.com')
// .then(...)
// .then(...)

fetch('https://swapi.dev/api/people/1/')
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
    })

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(response=>response.json())
.then(data=>{
    console.log(data)
})
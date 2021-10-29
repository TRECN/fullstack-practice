let obj={}

try{
    fetch('https://swapi.dev/api/people/1/')
        .then(response=>response.json())
        .then(data=>{
            console.log(typeof(data))
            obj=data
        })
}
catch(error){
    console.log(error)
}
finally{
    console.log(typeof(data))
}
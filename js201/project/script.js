let obj={}

    fetch('https://swapi.dev/api/people/1/')
        .then(response=>response.json())
        .then(
            dat=>{
                obj=dat
            }
        )

setTimeout(() => {
    console.log(obj)
}, (5000));

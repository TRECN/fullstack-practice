let obj={}

    fetch('https://swapi.dev/api/people/1/')
        .then(response=>response.json())
        .then(
            dat=>{
                obj=dat
            }
        )

if(dat!=undefined){
    console.log(obj)
}

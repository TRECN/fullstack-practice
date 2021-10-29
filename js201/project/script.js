let obj={}
let num=prompt('enter the character number')
    fetch(`https://swapi.dev/api/people/${num}/`)
        .then(response=>response.json())
        .then(
            dat=>{
                obj=dat
            }
        )

setTimeout(() => {
    console.log(obj)
}, (1000));

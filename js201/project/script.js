let obj={}
let num=Math.ceil(Math.random()*100);

const name=document.getElementById('#name')


    fetch(`https://swapi.dev/api/people/${num}/`)
        .then(response=>response.json())
        .then(
            dat=>{
                obj=dat
            }
        )

setTimeout(() => {
    console.log(obj['name'])
    console.log(num)
    

}, (1000));



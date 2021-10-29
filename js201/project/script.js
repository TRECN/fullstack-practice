let obj={}


const names=document.getElementById('name')

const reset=()=>{
    let num=Math.ceil(Math.random()*18);
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
            names.innerHTML=obj['name']
        
        }, (1000));
}
    





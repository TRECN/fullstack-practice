let obj={}
const names=document.getElementById('name')
const height=document.getElementById('height')
let num;

const Fetch=()=>{
    num=Math.ceil(Math.random()*18);
    fetch(`https://swapi.dev/api/people/${num}/`)
    .then(response=>response.json())
    .then(
        dat=>{
            obj=dat
        }
    )
}

const print=()=>{
    setTimeout(() => {
        names.innerHTML=obj['name']
        height.innerHTML=obj['height']
    
    }, (500));
}
const reset=()=>{
    Fetch()
    print()    
}

    





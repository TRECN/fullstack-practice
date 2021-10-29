let obj={}
let homeworld=''
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

const planet=()=>{
    fetch(obj['homeworld'])
    .then(response=>response.json())
    .then(
        dat=>{
            homeworld=dat['homeworld']
        }
    )
}

const print=()=>{
    setTimeout(() => {
        names.innerHTML=obj['name']
        planet()
        height.innerHTML=homeworld
    
    }, (500));
}
const reset=()=>{
    Fetch()
    print()    
}

    





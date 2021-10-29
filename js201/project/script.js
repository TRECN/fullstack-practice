let obj={}
let world={}
const names=document.getElementById('name')
const height=document.getElementById('height')
const homeworld=document.getElementById('homeworld')
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
    console.log(obj['homeworld'])
    fetch(obj['homeworld'])
    .then(response=>response.json())
    .then(
        data=>{
            world=data
            console.log(world)
        }
    )
}

const print=()=>{
    setTimeout(() => {
        console.log(num)
        names.innerHTML=obj['name']
        height.innerHTML=obj['height']
        homeworld.innerHTML=world['name']
    
    }, (1000));
}
const reset=()=>{
    Fetch()
    setTimeout(()=>{
        planet() 
        print()  
    },1000)
}

    





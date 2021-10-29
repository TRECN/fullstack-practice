let obj={}
let homeworld={}
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
    console.log(obj['homeworld'])
    fetch(obj['homeworld'])
    .then(response=>response.json())
    .then(
        data=>{
            homeworld=data
            console.log(homeworld)
        }
    )
}

const print=()=>{
    setTimeout(() => {
        console.log(num)
        names.innerHTML=obj['name']
        planet()
        height.innerHTML=homeworld['name']
    
    }, (1000));
}
const reset=()=>{
    Fetch()
    setTimeout(()=>{
        planet() 
    print()  
    },1000)
     
    
}

    





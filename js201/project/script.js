

const print=()=>{
    setTimeout(() => {
        console.log(num)
        names.innerHTML=obj['name']
        height.innerHTML=obj['height']
        homeworld.innerHTML=world['name']
    
    }, (1000));
}
const reset=()=>{
    names.innerHTML='xxxxx'
        height.innerHTML='xxxxxx'
        homeworld.innerHTML='xxxxxx'
    if(num=='17'){
        num++;
    }
    Fetch()
    setTimeout(()=>{
        planet() 
        print()  
    },1000)
}

    





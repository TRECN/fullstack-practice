let obj={}


const names=document.getElementById('name')

const random=()=>{
    let num=Math.ceil(Math.random()*18);

}
    

setTimeout(() => {
    console.log(obj['name'])
    console.log(num)
    names.innerHTML=obj['name']

}, (1000));



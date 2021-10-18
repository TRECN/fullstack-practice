const ele=document.querySelectorAll(".thisClass")
console.log(ele)//this shows the node list 


const items=document.querySelectorAll('li')

console.log(items)

items.forEach(node=>{
    node.innerText="This is changed";
})

items.forEach((i,index)=>{
    i.innerText=`hello ${index+1}`
})

items.forEach(node=>{
    node.classList.add("class1","class2")
})

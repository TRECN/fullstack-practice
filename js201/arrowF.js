//without arrow function
const hello=function(){
    return "hello rishabh"
}
const greeting = hello();
console.log(greeting)

//with a arrow function

const hello1=()=>{
    return "hello rishabh"
}
console.log(hello1())

//even shorter
const hello2=()=> "hello rishabh"
console.log(hello2())

//using parameters
const number=(numm)=>{
    numm=Number(numm);
    numm+=numm;
    return numm;
}
console.log(number(23))
//this keyword works globally inside a arrow function
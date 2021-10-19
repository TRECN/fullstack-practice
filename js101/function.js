function addNumbers(num1,num2){
    const total=Number(num1)+Number(num2);
    return total
}

const addT=addNumbers("46","67");
console.log(addT)
console.log(typeof(addT))

//...rest

function sum(name,...numbers){
    let total=0;
    for(i in numbers){
        total=total+numbers[i];
    }
    return `${name} : ${total}`//total
}

const Total=sum("rishabh",2,3,4)
console.log(Total)

//object with function
const person={
    'name':'rishabh',
    'age':18,
    'height':"5'9\""
}
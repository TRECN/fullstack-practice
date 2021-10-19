function addNumbers(num1,num2){
    const total=Number(num1)+Number(num2);
    return total
}

const addT=addNumbers("46","67");
console.log(addT)
console.log(typeof(addT))

//...rest

function sum(...numbers){
    let total=0
    for(i in numbers){
        total=total+numbers[i];
    }
    return total
}
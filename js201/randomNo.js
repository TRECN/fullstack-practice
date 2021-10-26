let number=prompt("guess a number")
number=Number(number);
let randomno=Math.floor(Math.random())
while(true){
    if(number===randomno){
        alert("you guessed a number")
        break;
    }
}
const randomno=Math.floor(Math.random()*10)

while(true){
    let number=prompt("guess a number")
    number=Number(number);
    if(number===randomno){
        alert("you guessed a number")
        break;
    }
}
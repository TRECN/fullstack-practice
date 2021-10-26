while(true){
    let randomno=Math.floor(Math.random()*10)
    let number=prompt("guess a number")
    number=Number(number);
    if(number===randomno){
        alert("you guessed a number")
        break;
    }

}
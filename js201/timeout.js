// console.log("rishbah")
// setTimeout(function(){
//     console.log("rishabh")
// },3000)

let count =0;


setInterval(function(){

    console.log("Checking something...co")
    count++;

    if(count===3){
        clearInterval()
    }
},2500)
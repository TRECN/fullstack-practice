
//without this keyword
const person={
    'name':"person",
    speak(){
        console.log(person['name'])
    }
}


//with this keyword
const person1={
    'name':"person1",
    speak(){
        console.log(this.name)
    }
}
person.speak()
person1.speak()


function counter(){
    if(this.total===undefined){
        this.total=1;
    }else{
        this.total++;
    }
    console.log("running: ",total)
}
counter()
counter()
counter()
counter()
counter()
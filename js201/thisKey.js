
//without this keyword
const person={
    'name':"rishabh",
    speak(){
        console.log(person121['name'])
    }
}


//with this keyword
const person1={
    'name':"rishabh",
    speak(){
        console.log(this.name)
    }
}
person.speak()
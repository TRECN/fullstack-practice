
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
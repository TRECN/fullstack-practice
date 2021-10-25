const months = ['January', 'February','march']
//destructuring
const [jan,feb]=months;
console.log(jan,feb)
console.log(months)

const person3={
    "name":"rishabh",
    "class":"10",
    "roll":"47"
}
//normal
const name=person3['name']
const classes=person3['class']
//destructuring
const {name1,classe}=person3;
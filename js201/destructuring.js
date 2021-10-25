const months = ['January', 'February','march']
//destructuring
const [jan,feb]=months;
console.log(jan,feb)
console.log(months)

const person3={
    "name":"rishabh",
    "classe":"10",
    "roll":"47"
}
//normal
const namee=person3['name']
const classes=person3['class']
//destructuring
const {name,classe}=person3;
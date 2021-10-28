
class MyClassName{
    
    setName(name1){
        this.name1=name1;
    }
    speak(){
        console.log(`say my ${this.name1}`)
    }
}
const thing=new MyClassName();

thing.speak()
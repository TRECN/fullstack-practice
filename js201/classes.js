
class MyClassName{
    
    setName(name1){
        this.name1=name1;
    }
    speak(){
        if(this.name1===undefined){
            this.name1="Unnamed"
        }

        console.log(`say my ${this.name1}`)
    }
}
const thing=new MyClassName();

thing.speak()
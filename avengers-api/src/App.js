import React,{useEffect}from "react"
import Card from './components/Card'

function App() {
  let data={};
  //let current={};
  useEffect(()=>{
    const url='https://api.tvmaze.com/search/shows?q=avengers';

    const fetchData = async()=>{
      try{
        const response = await fetch(url);
        const json = await response.json();
        data=json;
        console.log(data);
        console.log(typeof(data))
      }
      catch(error){
        console.log("error",error);
      }
    };
    fetchData();
  },[]);


  return (
    <div className="App" >
      <Card/>
    </div>
    
  );
}

export default App;

import React,{useEffect}from "react"

function App() {

  useEffect(()=>{
    const url='https://api.tvmaze.com/search/shows?q=avengers';

    const fetchData = async()=>{
      try{
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
      }
      catch(error){
        console.log("error",error);
      }
    }

  },[])


  return (
    <div className="App" onLoad="Fetch()">
      
    </div>
  );
}

export default App;

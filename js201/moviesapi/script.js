fetch("https://api.themoviedb.org/3/movie/550?api_key=cfc4a1b05a66247ddb5d7a51cd7c8280")
.then(response=>response.json())
.then(
    dat=>{
        console.log(dat);
    }
)
fetch('api.openweathermap.org/data/2.5/weather?q=ranchi&appid=3bdb8ccccbc9a2bc4a2a07e4acdb6411')
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
    })
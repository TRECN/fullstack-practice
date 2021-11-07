var headers = new Headers();
headers.append("X-CSCAPI-KEY", "API_KEY");

var requestOptions = {
 method: 'GET',
 headers: headers,
 redirect: 'follow'
};

fetch("https://api.countrystatecity.in/v1/countries/IN/cities", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3bdb8ccccbc9a2bc4a2a07e4acdb6411`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
    })
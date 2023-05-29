let lon;
let lat;
let temper = document.querySelector(".temp")
let summ=document.querySelector(".summary")
let loc=document.querySelector(".loc")
let icono=document.querySelector(".icon")
const kelvin= 273.15

window.addEventListener("load", () => {


    if (navigator.geolocation){


    navigator.geolocation.getCurrentPosition((position) => {

            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;})

        const api_id = "8e9845fe25d648672c7eb59d5e3f6cb2";

        const url_base ='https://api.openweathermap.org/data/2.5/weather?id=3435910&lang=sp,es&appid=8e9845fe25d648672c7eb59d5e3f6cb2'


        fetch(url_base)
        .then((response) => {

            console.log("respuesta json");
            return response.json();
        })
        
        
        .then((data) => {
        
            console.log("data")
            console.log(data);

            temper.textContent =
                Math.floor(data.main.temp - kelvin) + "°C";
            summ.textContent = data.weather[0].description;
            loc.textContent = data.name + ", " + data.sys.country;

        
        })
    }})

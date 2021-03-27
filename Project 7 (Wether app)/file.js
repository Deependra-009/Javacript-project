const weatherapi={
        key: "",
        baseurl:"https://api.openweathermap.org/data/2.5/weather"
}

const searchinputbox=document.getElementById('input-box');
searchinputbox.addEventListener('keypress',(event)=>{
        if(event.keyCode==13)
        {  
                getweatherreport(searchinputbox.value);  
                document.querySelector('.weather-body').style.display= "block"; 
        }
        

})
function getweatherreport(city)
{
        fetch(`${weatherapi.baseurl}?q=${city}&appid=${weatherapi.key}`)
        .then(weather =>{
                return weather.json();
        }).then(showweatherreport);
}

function showweatherreport(weather)
{
        console.log(weather);
        let city=document.getElementById('city');
        city.innerHTML=`${weather.name},${weather.sys.country}`


        let a=Math.round((weather.main.temp-273.15));
        let temp=document.getElementById('temp');
        temp.innerHTML=`${a}&deg;C`;


        let b=Math.round(weather.main.temp_max-273.15);
        let c=Math.round(weather.main.temp_min-273.15);
        let min_max=document.getElementById('min-max');
        min_max.innerHTML=`${b}&deg;C (max) , ${c}&deg;C (min)`;

        let humidity=document.getElementById('humidity');
        humidity.innerHTML=`Humidity :${weather.main.humidity}`;

        let weather1=document.getElementById('weather');
        weather1.innerHTML=`${weather.weather[0].main}`;
        console.log(weather1.textContent);
        document.getElementById('sunny').style.display="none";
        document.getElementById('rain').style.display="none";
        document.getElementById('cloudy').style.display="none";
        document.getElementById('snow').style.display="none";
        document.getElementById('thunderstorm').style.display="none";
        document.getElementById('haze').style.display="none";

        if(weather1.textContent=="Clear")
        {
                document.body.style.backgroundImage=`url('Images/clear.jpg')`;
                document.getElementById('sunny').style.display="block";
        }
        else if(weather1.textContent=="Rain")
        {
                document.body.style.backgroundImage=`url('Images/rain.jpg')`;
                document.getElementById('rain').style.display="block";
        }
        else if(weather1.textContent=="Clouds")
        {
                document.body.style.backgroundImage=`url('Images/cloud.jpg')`;
                document.getElementById('cloudy').style.display="block";
        }
        else if(weather1.textContent=="Snow")
        {
                document.body.style.backgroundImage=`url('Images/snow.jpg')`;
                document.getElementById('snow').style.display="block";
        }
        else if(weather1.textContent=="Thunderstorm")
        {
                document.body.style.backgroundImage=`url('Images/thunderstorm.jpg')`;
                document.getElementById('thunderstorm').style.display="block";
        }
        else if(weather1.textContent=="Haze")
        {
                document.body.style.backgroundImage=`url('Images/haze.jpg')`;
                document.getElementById('haze').style.display="block";
        }
        else if(weather1.textContent=="Smoke")
        {
                document.body.style.backgroundImage=`url('Images/haze.jpg')`;
                document.getElementById('haze').style.display="block";
        }





}

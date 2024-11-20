const apikey="9ae916da05ec57f285535b61c84a0225";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox=document.querySelector(".search");
const searchbtn=document.querySelector(".searchbtn");

async function fetchWeather(city) {
  const response= await fetch(apiUrl+city+`&appid=${apikey}`);
  var data= await response.json();
  const temp=data.main.temp;  
  const humidity=data.main.humidity;
  const windspeed=data.wind.speed;
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML=Math.round(temp)+"°C";
  document.querySelector(".humidity").innerHTML="humidity:"+humidity+"%";
  document.querySelector(".windspeed").innerHTML="windspeed:"+windspeed+"km/hr";
  document.querySelector(".weathericon img").src= "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";

  if(data.weather[0].main=="Clear") {
  document.querySelector(".card").style.backgroundColor = "#bef4ff";
  }
  else if(data.weather[0].main=="Rain"){
    document.querySelector(".card").style.backgroundColor="#038de1";
  }
  else if(data.weather[0].main=="Thunderstorm"){
    document.querySelector(".card").style.backgroundColor="#000080";
  } else if(data.weather[0].main=="Drizzle"){
    document.querySelector(".card").style.backgroundColor="#038de1";
  } else if(data.weather[0].main=="Snow"){
    document.querySelector(".card").style.backgroundColor="#C5C5C5";
  } else if(data.weather[0].main=="Clouds"){
    document.querySelector(".card").style.backgroundColor="#038de1";
  }
  else if(data.weather[0].main=="Mist"){
    document.querySelector(".card").style.backgroundColor="#647c90";
  }
  document.querySelector(".weather").style.display="block";

}
searchbtn.addEventListener("click",()=>{
    fetchWeather(searchbox.value);

})


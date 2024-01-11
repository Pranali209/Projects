const API_KEY = `223af4bb514bf890f1a9cd8e399c841f`;
const degrees = document.getElementsByTagName("h1");
const weatherStatus = document.querySelector(".weaterStatus");
const form = document.querySelector("form");
const search = document.getElementById("Searchbar");
const weatherDisplayBox = document.querySelector(".weatherdeg");
const locationBox = document.getElementById("Location");
const locationSeached = locationBox.getElementsByTagName('span');
const weekDataDisplay = document.querySelector(".weeklydata");

form.addEventListener(
    "submit",
    function (event) {
        getWeather(search.value);
        weeklyStatus(search.value);
        event.preventDefault();
    }
)

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    showWeather(data);
}

const showWeather = (data) => {
    
    if (data.code == 404) {
        weatherDisplayBox.innerHTML = ` <div style="display: flex;" >
        <h1>${data.message}</h1>
        <div>`;
        return;
    }
  locationSeached[1].innerHTML = `${data.name}`
    weatherDisplayBox.innerHTML = `
    <div style="display: flex;" >
    <h1>${data.main.temp}℃</h1>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weatherImageSunny" class="weatherSunnyImage"/> 
    </div>
    <div style="display: flex;">
        <span class="weaterStatus">${data.weather[0].main}</span>
    </div> `;  
}

const weeklyStatus = async (city)=>
{
    const weekdata = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    const weekresponse = await fetch(weekdata);
    const Weeklydata = await weekresponse.json();
    console.log(Weeklydata);
    ShowWeeklydata(Weeklydata);
}

const ShowWeeklydata = (Wdata)=>
{
    weekDataDisplay.innerHTML = `
    <div class="Mondayweather">
                         <p><b>${Wdata.list[0].main.temp}℃</b></p>
                        <h5>${Wdata.list[0].dt_txt}</h5>
                        </div>
    <div class="Mondayweather">
                        <p><b>${Wdata.list[1].main.temp}℃</b></p>
                       <h5>${Wdata.list[1].dt_txt}</h5>
                       </div>
    <div class="Mondayweather">
                        <p><b>${Wdata.list[2].main.temp}℃</b></p>
                       <h5>${Wdata.list[2].dt_txt}</h5>
                       </div>
    <div class="Mondayweather">
                        <p><b>${Wdata.list[3].main.temp}℃</b></p>
                       <h5>${Wdata.list[3].dt_txt}</h5>
                       </div>`
    
}
    

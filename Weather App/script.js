const apiKey = "f0c6705196f619ade42477fd94afff1c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather??&q=";

const getDetails = async (city_name) => {
    const details = await fetch(apiURL + city_name + `&appid=${apiKey}`);
    const data = await details.json();
    // console.log(data);
    if(details.status == 404){
        document.querySelector('#error-message').style.display="block";
        document.querySelector('#weather-details').style.display = "none";
        document.querySelector('#weather-properties').style.display = "none";
    }
    else{
        const ans = data.main.temp;
        const ans_2 = ans - 273.15;
        //city
        document.querySelector('#search-city-user').innerHTML = data.name;
        //temperature
        //Math.round(ans_2)
        //ans_2.toFixed(2)
        document.querySelector('#temperature').innerHTML = Math.round(ans_2) + "°C";
        //humidity
        document.querySelector('#humidity').innerHTML = data.main.humidity + "%";
        //wind-speed
        const wind_speed = data.wind.speed;
        const newWindSpeed = (wind_speed * 18) / 5;
        document.querySelector('#wind-speed').innerHTML = Math.round(newWindSpeed) + " km/h";

        document.getElementById('city-input').placeholder = "Enter city name";
        //Change images
        const newImg = document.querySelector('#new-image');
        if (data.weather[0].main == 'Rain') {
            newImg.src = 'Images/rain.png';
        }
        else if (data.weather[0].main == 'Drizzle') {
            newImg.src = 'Images/rain.png';
        }
        else if (data.weather[0].main == 'Mist') {
            newImg.src = 'Images/mist.png';
        }
        else if (data.weather[0].main == 'Clear') {
            newImg.src = 'Images/clear.png';
        }
        else if (data.weather[0].main == 'Snow') {
            newImg.src = 'Images/snow.png';
        }
        document.querySelector('#error-message').style.display = "none";
    }
    
}

const newData = document.querySelector('.search-bar input');
const newBtn = document.querySelector('.search-bar button');
newBtn.addEventListener('click', (cityName) => {
    document.querySelector('#weather-details').style.display = "block";
    document.querySelector('#weather-properties').style.display = "flex";
    getDetails(newData.value);
})

newData.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        newBtn.click();
        newData.value = " ";
    }
})

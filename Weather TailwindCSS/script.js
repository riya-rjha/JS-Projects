document.getElementById('submitButton').addEventListener('click', async () => {
    const cityInput = document.getElementById('cityInput').value;
    const apiKey = 'f0c6705196f619ade42477fd94afff1c';
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        const kelvinToCelsius = (kelvin) => {
            return kelvin - 273.15;
        };

        document.getElementById('cityName').textContent = cityInput;
        document.getElementById('minTemp').innerHTML = `Min Temperature : <span class="text-white">${kelvinToCelsius(data.main.temp_min).toFixed(2)} °C</span>`;
        document.getElementById('maxTemp').innerHTML = `Max Temperature : <span class="text-white">${kelvinToCelsius(data.main.temp_max).toFixed(2)} °C</span>`;
        document.getElementById('pressure').innerHTML = `Pressure : <span class="text-white">${data.main.pressure}</span>`;
        document.getElementById('humidity').innerHTML = `Humidity : <span class="text-white">${data.main.humidity}</span>`;
        document.getElementById('windSpeed').innerHTML = `Wind Speed : <span class="text-white">${data.wind.speed} km/hr</span>`;

        const img = (data.weather[0].main).toLowerCase();
        document.getElementById('weatherImage').src = `./Images/${img}.png`;
        document.getElementById('weatherCondition').textContent = data.weather[0].description;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

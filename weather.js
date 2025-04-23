
const search = document.getElementById("searchbox");
const submitBtn = document.getElementById("btn");

async function weather(city) {
    try {
        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=&q=${city}&aqi=no`);
        let data = await response.json();

        console.log(data);

        document.getElementById('humidit').innerHTML = data.current.humidity + "%";
        document.getElementById('celcius').innerHTML = data.current.temp_c + "°C";
        document.getElementById('fer').innerHTML = data.current.temp_f + "°F";
        document.getElementById('wind').innerHTML = data.current.wind_kph + " km/h ";
        document.getElementById('cit').innerHTML = data.location.name;
        document.getElementById('country').innerHTML = data.location.country;
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        alert("Could not fetch weather data. Please try again.");
    }
}

submitBtn.addEventListener("click", () => {
    const cityName = search.value.trim();
    if (cityName) {
        weather(cityName);
    } else {
        alert("Please enter a city name.");
    }
});

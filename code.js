function apiResult(event) {
    const API_URL = `http://api.weatherapi.com/v1/current.json?key=8ed7d66b42f442d592e140349222907&aqi=yes&q=` + this.value
    fetch(API_URL)
    .then((res) => res.json())
    .then((res) => {
        console.log(res.current)

        document.getElementById('country').innerText = res.location.country
        document.getElementById('capital').innerText = `Capital: ${res.location.name}.`
        document.getElementById('country').classList.replace('hidden','display')
        document.getElementById('region').innerText = `Region: ${res.location.region}.`
        document.getElementById('ubication').innerText =  `Timezone: ${res.location.tz_id}.`
        document.getElementById('textLocalTime').innerText = `LocalTime: ${res.location.localtime}.`
        document.getElementById('lat').innerText = `Latitude: ${res.location.lat}`
        document.getElementById('lon').innerText = `Longitude: ${res.location.lon}`

        document.getElementById('title').innerText = "Air Quality"
        document.querySelector(".weather").innerText = `Weather: ${res.current.condition.text}`
        document.getElementById('img').src = res.current.condition.icon
        document.querySelector(".temp_c").innerText = `C°: ${res.current.temp_c}`
        document.querySelector(".temp_f").innerText = `F°: ${res.current.temp_f}`
    })
}

function conter() {
    console.log(this.value)
}

document.getElementById('demo-country-picker').addEventListener('change', apiResult)
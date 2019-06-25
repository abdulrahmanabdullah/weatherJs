class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.str = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.listDetailes = document.getElementById('w-detailes');
        this.humidit = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.cloud = document.getElementById('w-cloud');
        this.wind = document.getElementById('w-wind');
    }


    paint(result) {
        this.location.textContent = result.name;
        this.desc.textContent = result.weather[0].description;
        this.str.textContent = `${this.kelvinToCelsius(result.main.temp)} ${String.fromCharCode(176)}C (${this.kelvinToFah(result.main.temp)} ${String.fromCharCode(176)}F)`;
        this.icon.setAttribute('src',`http://openweathermap.org/img/w/${result.weather[0].icon}.png`);
        this.humidit.textContent =`Relative Humidity :${result.main.humidity}` ;
        this.pressure.textContent = `Pressure ${result.main.pressure}`
        this.cloud.textContent = `Clouds ${result.clouds.all}%`
        this.wind.textContent = `wind ${result.wind.speed}%`
    }

    
    kelvinToCelsius(degress){
        return (Math.floor((degress - 273.15)));
    }

    kelvinToFah(degress){
        return (Math.floor((degress * 9/5)-459.67));
    }
}
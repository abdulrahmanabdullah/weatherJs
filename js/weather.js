class Weather {
    constructor(city) {
        this.apiKey = "eac1b09635b32b1416f148329634fc16";
        this.city = city;
    }


    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
        const responseData = await response.json();
       return  responseData ;
    }

    changeCity(city) {
        this.city = city;
    }
}
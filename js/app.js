//Iinit UI class 
const ui = new UI;
//Init storage class 
const store = new Storage();
//Fetch weather from Weather class 
const weather = new Weather(store.getLocationData().city);

// Load weather when DOM loaded .. 
document.addEventListener("DOMContentLoaded", getWeather);


// Change location event in modal . 
document.getElementById('w-change-btn').addEventListener('click', e => {

    const city = document.getElementById('city').value;
    //Save new city in storage .
    store.setLocationData(city)
    //Change city in  Weather class to fetch a new city.  
    weather.changeCity(city);
    //Call getWeather to display weather 
    getWeather();
    // Hide modal 
    $('#locationModal').modal('hide');

});
function getWeather() {
    weather.getWeather().then(res => {
        // Call UI Class object here .. 
        ui.paint(res);
    }).catch(err => {
        console.log(err);
    });
}
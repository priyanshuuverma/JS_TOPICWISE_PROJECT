const button = document.getElementById("search-button");
const input = document.getElementById('city');
const cityNa = document.getElementById('CityN');
const cityTime = document.getElementById('CityT');
const cityTemp = document.getElementById('CityTem');
async function getData(cityName){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=d22e0d50372c4dcdac2133456250402&q=${cityName}&aqi=yes`);
    return await promise.json()
}
button.addEventListener("click",async  () => {
    const value = input.value;
    getData(value);
    const result = await getData(value);
    cityNa.innerText = `${result.location.name}`+ ","+`${result.location.region}`+","+`${result.location.country}`;
    cityTime.innerText ="LocalTime : "+`${result.location.localtime}`;
    cityTemp.innerText ="Temperature : "+ `${result.current.temp_c}` + "*C";
});






//http://api.weatherapi.com/v1/current.json?key=d22e0d50372c4dcdac2133456250402&q=London&aqi=yes


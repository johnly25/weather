let search = document.getElementById("search");

search.addEventListener("keypress", (event) => {
    if(event.key ==="Enter") {
        event.preventDefault();
        let promise = getApi(event.target.value);
        console.log(promise);
        loadData(promise);
    }
})

async function loadData(forecast) {
    const data = await forecast
    console.log(data);
}
async function getApi(city) {
    const query = 'http://api.weatherapi.com/v1/forecast.json?key=175167add14f41e0abe221313232612&aqi=no&days=3&q=' + city;
    const weather = await fetch(query, { mode: 'cors' });   
    const data = await weather.json();
    return data;
}

async function test(promise){
    const data = await promise;
}


const domHandler = (function () {


    function searchEvent() {
        let search = document.getElementById("search");
        search.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                let promise = getApi(event.target.value);
                getData(promise);
            }
        });
    }

    function setup() {
        let promise = getApi("seattle");
        getData(promise);
    }
    async function getData(forecast) {
        let data = await forecast;
        loadData(data);
    }

    function loadData(data) {
        loadCity(data);
        loadDegrees(data);
        loadTabs(data);
        loadContent(data);
        setupTabs();
    }

    function loadCity(data) {
        let city = document.querySelector('.city');
        city.textContent = "";
        let name = document.createElement('div');
        let date = document.createElement('div');
        let imgContainer = document.createElement('div');
        let img = document.createElement('img');
        let status = document.createElement('div');

        name.classList.add('name');
        date.classList.add('date');
        imgContainer.classList.add('status-image');
        status.classList.add('status');
        name.textContent = data.location.name + ", " + data.location.region;
        date.textContent = data.location.localtime;
        img.src = "https:"+data.current.condition.icon;
        status.textContent = data.current.condition.text;

        city.append(name, date, img, status);
    }

    function loadDegrees(data) {
        let degrees = document.querySelector('.degrees');
        degrees.textContent = "";
        let current = document.createElement('div');
        let range = document.createElement('div');
        current.textContent = data.current.feelslike_f + "°";
        range.textContent = data.forecast.forecastday[0].day.maxtemp_f + "°" + " / " + data.forecast.forecastday[0].day.mintemp_f + "°";
        degrees.append(current, range);
    }

    function loadTabs(data) {
        let tabs = document.querySelector('.tabs');
        tabs.textContent = "";
        let container = document.createElement('div');
        let buttons = document.createElement('div');
        let hourly = document.createElement('button');
        let daily = document.createElement('button');
        let details = document.createElement('button');
        let percipitation = document.createElement('button');

        container.classList.add("tabs-container");
        buttons.classList.add("buttons");
        hourly.textContent = "Hourly";
        daily.textContent = "Daily";
        details.textContent = "Details";
        percipitation.textContent = "Precipitation";
        hourly.id = "hourly";
        daily.id = "daily";
        details.id = "details";
        percipitation.id = "precipitation";


        buttons.append(hourly, daily, details, percipitation);
        container.append(buttons);
        tabs.append(container);


    }

    function loadContent(data) {
        loadHourly(data);
        loadDaily(data);
        loadDetails(data);
        loadPrecipitation(data);
    }

    function loadHourly(data) {
        let container = document.querySelector(".tabs-container");
        let hourly = document.createElement("div");
        hourly.classList.add("hourly", 'tab');

        let time = parseInt(data.location.localtime.split(' ')[1].split(':')[0].trim());
        let i = 0;
        let day = 0;
        while (i < 6) {
            let div = document.createElement('div');
            let timewrapper = document.createElement('div');
            let img = document.createElement('img');
            let degree = document.createElement('div');
            timewrapper.textContent = time;
            img.src = "https:"+data.forecast.forecastday[day].hour[time].condition.icon;
            degree.textContent = data.forecast.forecastday[day].hour[time].temp_f + "°";
            div.append(timewrapper, img, degree);
            hourly.append(div);
            time++;
            i++;
            if (time == 24) {
                time = 0;
                day = 1;
            }
        }

        container.append(hourly);
    }

    function loadDaily(data) {
        let container = document.querySelector(".tabs-container");
        let daily = document.createElement("div");
        daily.classList.add("daily", 'content', 'tab');

        for (let i = 0; i < 3; i++) {
            let weather = data.forecast.forecastday[i];
            let div = document.createElement("div");
            let day = document.createElement("div");
            let img = document.createElement("img");
            let degrees = document.createElement("div");

            day.textContent = weather.date;
            img.src = "https:"+weather.day.condition.icon;
            degrees.textContent = weather.day.maxtemp_f + "°/" + weather.day.mintemp_f + "°";


            div.append(day, img, degrees);
            daily.append(div);
        }

        container.append(daily);

    }

    function loadDetails(data) {
        let container = document.querySelector(".tabs-container");
        let details = document.createElement('div');
        details.classList.add('details', 'content', 'tab');

        let windMph = document.createElement('div');
        let windDirection = document.createElement('div');
        let pressure = document.createElement('div');
        let humidity = document.createElement('div');
        let visibility = document.createElement('div');

        windMph.textContent = "Wind MPH: " + data.current.wind_mph;
        windDirection.textContent = "Wind Direction: " + data.current.wind_dir;
        pressure.textContent = "Pressure IN: " + data.current.pressure_in;
        humidity.textContent = "Humidity: " + data.current.humidity;
        visibility.textContent = "Visibility: " + data.current.vis_miles;

        details.append(windMph, windDirection, pressure, humidity, visibility);
        container.append(details);
    }

    function loadPrecipitation(data) {
        let container = document.querySelector(".tabs-container");
        let precipitation = document.createElement('div');
        precipitation.classList.add('precipitation', 'content', 'tab');

        let info = document.createElement("div");
        info.textContent = "Precipitation IN: " + data.current.precip_in;
        precipitation.append(info);
        container.append(precipitation);
    }

    function setupTabs() {
        let buttons = document.querySelectorAll('.buttons button');
        buttons.forEach((button) => {
            button.addEventListener('click', (event) => {
                showTab(event.target.textContent.toLowerCase());
            });
        });
    }

    function showTab(name) {
        hideActive();
        hideTabs();
        let tab = document.querySelector("." + name);
        let button = document.getElementById(name);
        button.classList.add('active');
        tab.classList.remove('content');


    }

    function hideTabs() {
        let tabs = document.querySelectorAll('.tab');
        tabs.forEach((tab) => {
            tab.classList.add('content');
        });
    }

    function hideActive() {
        let buttons = document.querySelectorAll('.buttons button');
        buttons.forEach((button) => {
            button.classList.remove('active');
        })
    }
    async function getApi(city) {
        const query = 'https://api.weatherapi.com/v1/forecast.json?key=175167add14f41e0abe221313232612&aqi=no&days=3&q=' + city;
        const weather = await fetch(query, { mode: 'cors' });
        const data = await weather.json();
        return data;
    }

    return { searchEvent, setup };
})();

export default domHandler;
function setup() {
    let container = document.createElement("div");
    let nav = document.createElement("div");
    let div = document.createElement("div");
    let input = document.createElement("input");
    let containerWeather = document.createElement("div");
    let tophalf = document.createElement("div"); 
    let city = document.createElement("div");
    let degrees = document.createElement("div");
    let tabs = document.createElement("div");

    container.classList.add("container");
    tophalf.classList.add("tophalf");
    nav.classList.add('nav');
    containerWeather.classList.add("container-weather");
    city.classList.add("city");
    degrees.classList.add('degrees');
    tabs.classList.add("tabs");

    input.id = "search";
    input.type = "text";

    tophalf.append(city,degrees);
    container.append(nav, containerWeather)
    nav.append(div);
    div.append(input);
    containerWeather.append(tophalf, tabs);
    document.body.append(container);
}

export { setup };
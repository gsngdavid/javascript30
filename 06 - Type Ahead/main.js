const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const cities = [];

async function getData() {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
}

function searchCity(word, cities) {
    let patten = new RegExp(word, 'gi');
    return cities.filter(city => {
        return city.city.match(patten) || city.state.match(patten);
    });
};

function handleInputChange(e) {
    let value = e.currentTarget.value;
    let filteredPlaces = searchCity(value, cities);

    let html = filteredPlaces.map(place => {
        let patten = new RegExp(value, 'gi');
        let name = `${place.city}, ${place.state}`.replace(patten, `<span class="hl">${value}</span>`);
        let population = Number(place.population).toLocaleString();

        return `<li>
            <span>${name}</span>
            <span class='population'>${population}</span>
        </li>`
    }).join('');

    suggestions.innerHTML = html;
}


getData().then(data => cities.push(...data)).catch(err => {
    console.log(err);
});

input.addEventListener('input', handleInputChange);

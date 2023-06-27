const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const input = document.querySelector('input');

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
    let filteredCities = searchCity(value, cities);
    console.log(filteredCities);
}


getData().then(data => cities.push(...data)).catch(err => {
    console.log(err);
});

input.addEventListener('input', handleInputChange);

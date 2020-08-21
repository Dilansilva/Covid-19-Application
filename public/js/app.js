

const covidForm = document.querySelector('form');   //for form
const search = document.querySelector('input');     //for search country
const confirmed = document.querySelector('#confirmed');
const deaths = document.querySelector('#deaths');     
const recovered = document.querySelector('#recovered');
const active = document.querySelector('#active');
const country = document.querySelector('#country');

const todayconfirmed= document.querySelector('#todayconfirmed');
const todaydeaths = document.querySelector('#todaydeaths');
const todayrecovered = document.querySelector('#todayrecovered');
const todayactive = document.querySelector('#todayactive');
 
document.addEventListener("DOMContentLoaded", () => { //This function calls when page load
    fetch('http://localhost:3000/covid?search=sri-lanka').then( (response) => {
        response.json().then( (data) => {
            confirmed.textContent = data.confirmed;
            deaths.textContent = data.deaths;
            recovered.textContent = data.recovered,
            active.textContent = data.active,

            todayconfirmed.textContent = data.todayconfirmed,
            todaydeaths.textContent = data.todaydeaths,
            todayrecovered.textContent = data.todayrecovered,
            todayactive.textContent = data.todayactive
            console.log(data);
        })
    });
});

covidForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location =  search.value;
    
    fetch('http://localhost:3000/covid?search='+location+'').then((response) => {
        response.json().then( (data) => {
            if(data.error) {
                console.log(data.error);
            } else {
                console.log(data);
                confirmed.textContent = data.confirmed;
                deaths.textContent = data.deaths;
                recovered.textContent = data.recovered,
                active.textContent = data.active,

                todayconfirmed.textContent = data.todayconfirmed,
                todaydeaths.textContent = data.todaydeaths,
                todayrecovered.textContent = data.todayrecovered,
                todayactive.textContent = data.todayactive
            }
        })
    });

    
});


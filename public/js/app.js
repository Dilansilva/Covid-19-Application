

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

const error = document.querySelector('#error');
 
document.addEventListener("DOMContentLoaded", () => { //This function calls when page load
    error.textContent = "Loading......Please wait!";
    fetch('/covid?search=sri-lanka').then( (response) => {
        response.json().then( (data) => {
            
            if(data.error) {
                error.textContent = data.error;
            } else {
                
                confirmed.textContent = data.confirmed;
                deaths.textContent = data.deaths;
                recovered.textContent = data.recovered,
                active.textContent = data.active,

                todayconfirmed.textContent = data.todayconfirmed,
                todaydeaths.textContent = data.todaydeaths,
                todayrecovered.textContent = data.todayrecovered,
                //todayactive.textContent = data.todayactive,
                error.textContent = ''
                country.textContent = 'Sri-Lanka'
            }
            
          
            
        })
    });
});

covidForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location =  search.value;
    error.textContent = "Loading......Please Wait!";
    fetch('/covid?search='+location+'').then((response) => {
        response.json().then( (data) => {
            
            if(data.error) {
               
                error.textContent =   data.error;
            } else {
                
                confirmed.textContent = data.confirmed;
                deaths.textContent = data.deaths;
                recovered.textContent = data.recovered,
                active.textContent = data.active,

                todayconfirmed.textContent = data.todayconfirmed,
                todaydeaths.textContent = data.todaydeaths,
                todayrecovered.textContent = data.todayrecovered,
                //todayactive.textContent = data.todayactive,
                 error.textContent = " "
               country.textContent = data.country
            }
        })
    });

    
});


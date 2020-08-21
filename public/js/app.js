

const covidForm = document.querySelector('form');   //for form
const search = document.querySelector('input');     //for search country
const confirmed = document.querySelector('#confirmed');     
const recovered = document.querySelector('#recovered');
const active = document.querySelector('#active');
const country = document.querySelector('#country');
 
document.addEventListener("DOMContentLoaded", () => { //This function calls when page load
    console.log('Hello World');
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
            }
        })
    });

    
});


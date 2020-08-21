console.log('Hello World');

const covidForm = document.querySelector('form');   
const search = document.querySelector('input');
const confirmed = document.querySelector('#confirmed');
const recovered = document.querySelector('#recovered');
const active = document.querySelector('#active');
const country = document.querySelector('#country');




covidForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    
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


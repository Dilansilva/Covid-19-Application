console.log('Hello World');

const covidForm = document.querySelector('form');   
const search = document.querySelector('input');

covidForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    console.log(location);
});

fetch('http://localhost:3000/covid?search=india').then((response) => {
    response.json().then( (data) => {
        if(data.error) {
            console.log(data.error);
        } else {
            console.log(data);
        }
    })
});
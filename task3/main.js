/*
  Parašyti JS kodą, kuris vartotojui paspaudus ant mygtuko "Rodyti Vartotoją" užkrautų vartotoją iš API į ekraną. (Mygtukas neberodomas ekrane po jo paspaudimo. Nebūtina ekrane rodyti visos informacijos apie vartotoją.)
  API nuoroda: https://randomuser.me/api/
*/

const button = document.getElementById('button');

button.addEventListener('click', () => {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      document.getElementById('name').innerHTML = `${user.name.first} ${user.name.last}`;
      document.getElementById('age').innerHTML = `Amžius: ${user.dob.age}`;
      document.getElementById('email').innerHTML = `El. paštas: ${user.email}`;
      document.getElementById('phone').innerHTML = `Telefonas: ${user.phone}`;
      button.style.display = 'none';
    });
});

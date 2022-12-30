/*
  Parašyti JS kodą, kuris, vartotojui atėjus į puslapį, iš data.json failo į ekraną išvestų filmus ir aktorius, kurie tuose filmuose vaidina. (duomenų yra didelis perteklius, jums jų visų naudoti nereikia. Tik filmų pavadinimai ir aktorių vardai+pavardės).
*/

window.addEventListener('load', () => {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      data.movies.forEach(movie => {
        const movieTitle = movie.title;
        const actors = movie.actors;
        const movieElement = document.createElement('h3');
        movieElement.innerHTML = movieTitle;
        const actorsElement = document.createElement('ul');
        if (Array.isArray(actors)) {
          actors.forEach(actor => {
            const actorElement = document.createElement('li');
            actorElement.innerHTML = actor.name;
            actorsElement.appendChild(actorElement);
          });
        }

        document.body.appendChild(movieElement);
        document.body.appendChild(actorsElement);
      });
    });
});


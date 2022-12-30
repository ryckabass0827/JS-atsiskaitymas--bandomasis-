/*
  Parašyti JS kodą, kuris skaičiuos kiek kartų buvo paspausta ant vieno arba kito elemento ekrane. (Ekrane turėti 2 nuotraukas ir laukelį po jomis, kuriame bus atvaizduojama kiek kartų buvo paspausta ant kurios nuotraukos)
*/


let image1Count = 0;
let image2Count = 0;


let image1 = document.getElementById('image1');
image1.addEventListener('click', () => {
  image1Count++;
  updateCount();
});

let image2 = document.getElementById('image2');
image2.addEventListener('click', () => {
  image2Count++;
  updateCount();
});

function updateCount() {
  document.getElementById('image1Count').innerHTML = image1Count;
  document.getElementById('image2Count').innerHTML = image2Count;
}

/*
  Parašyti JS kodą, kuris leis vartotojui įvesti temperatūrą celsijumi arba farenheitu.
  Įvedus celsijų - parodoma kiek temperatūros tai būtų farenheitu | įvedus farenheitą - parodoma kiek temperatūros tai būtų celsijumi.
*/

const form = document.getElementById('Forma');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const temperature = document.getElementById('temperature').value;
  const unit = document.getElementById('unit').value;

  const result = convertTemperature(temperature, unit);

  document.getElementById('result').innerHTML = result;
});

const convertTemperature = (temperature, unit) => {
  if (unit === 'C') {
    return `${temperature}°C yra ${(temperature * 1.8) + 32}°F`;
  } else if (unit === 'F') {
    return `${temperature}°F yra ${(temperature - 32) / 1.8}°C`;
  } else {
    return 'Neteisingas matavimo vienetas';
  }
}


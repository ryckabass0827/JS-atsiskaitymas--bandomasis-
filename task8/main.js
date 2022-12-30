/*
  Surkite klasę "trueFalse", kuri turi 4 metodus:
    metodas1 priima skaičių ir grąžina true jei skaičius didesnis už 100 ir false kitu atveju.
    metodas2 priima žodį ir grąžina true jeigu jis prasideda didžiąja raide ir false kitu atveju.
    metodas3 priima skaičių ir grąžina true jeigu šis yra lyginis ir false kitu atveju.
    metodas4 priima žodį ir grąžina true jeigu šis yra ilgesnis nei 8 raidžių ir false kitu atveju.
*/

class trueFalse {
  metodas1(sk) {
    return sk > 100 ? true : false;
  }

  metodas2(zodis) {
    return zodis[0] === zodis[0].toUpperCase() ? true : false;
  }

  metodas3(sk) {
    return sk % 2 === 0 ? true : false;
  }

  metodas4(zodis) {
    return zodis.length > 8 ? true : false;
  }
}

const trueFalseKlase = new trueFalse();

console.log(trueFalseKlase.metodas1(120));
console.log(trueFalseKlase.metodas1(50));
console.log(trueFalseKlase.metodas2('Vardas'));
console.log(trueFalseKlase.metodas2('pavarde'));
console.log(trueFalseKlase.metodas3(2));
console.log(trueFalseKlase.metodas3(7));
console.log(trueFalseKlase.metodas4('IlgasZodis'));
console.log(trueFalseKlase.metodas4('Trumpas'));

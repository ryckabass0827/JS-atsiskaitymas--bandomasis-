/*
  Sukurkite klasę, kuri priima 4 savybes ir turi 2 metodus.
  Savybės: masinosMarke, masinosModelis, masinosKaina, masinosGamybosMetai.
  Metodai:
    1 metodas tikrina ar mašina brangesnė negu 10 000 eurų ir grąžina true|false.
    2 metodas tikrina ar mašina senesnė negu 2010 ir grąžina mašinos amžių ir tekstą "Antikvaras"|"Šviežiena".
*/

class Masina {
  constructor(marke, modelis, kaina, gamybosMetai) {
    this.masinosMarke = marke;
    this.masinosModelis = modelis;
    this.masinosKaina = kaina;
    this.masinosGamybosMetai = gamybosMetai;
  }

  metodas1() {
    return this.masinosKaina > 10000 ? true : false;
  }

  metodas2() {
    if (this.masinosGamybosMetai < 2010) {
      return `${2020 - this.masinosGamybosMetai} metai / Antikvaras`;
    } else {
      return `${2020 - this.masinosGamybosMetai} metai / Šviežiena`;
    }
  }
}

const masina1 = new Masina('Audi', 'A6', 15000, 2005);
console.log(masina1.metodas1());
console.log(masina1.metodas2());

const masina2 = new Masina('BMW', '440', 9000, 2015);
console.log(masina2.metodas1());
console.log(masina2.metodas2());

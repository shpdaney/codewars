class Person {
  private _firstName: string;
  private _secondName: string;
  private _birthYear: number;

  constructor(firstName, secondName, birthYear) {
    this._firstName = firstName
    this._secondName = secondName
    this._birthYear = birthYear
  }

  get fullName() {
    return `${this._secondName} ${this._firstName}`
  }

  get age() {
    return `${new Date().getFullYear() - this._birthYear}`
  }
}

class WorkPerson extends Person {
  private _phone: number

  constructor(firstName, secondName, birthYear,phone,) {
    super(firstName, secondName, birthYear,);
    this._phone = phone
  }
}

class Developer extends WorkPerson {
  lavel: string

  constructor(firstName, secondName, birthYear, phone, lavel) {
    super(firstName, secondName, birthYear, phone,);
    this.lavel = lavel
  }
  get getLvl() {
    return this.lavel
  }
}

const developer1 = new Developer(
  'fn','sn', '2', 1, 'j'
)


const person1 = new Person('Daney', 'Shp', 2000)


console.log(person1.fullName);
console.log(person1.age);

console.log(developer1.getLvl);



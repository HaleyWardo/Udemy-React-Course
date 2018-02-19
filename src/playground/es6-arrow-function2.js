// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments) - no longer works with ES6
  return a + b;
}
console.log(add(55,1));

// this keyword - no longer bound with arrow functions

const user = {
  name: 'Haley',
  cities: ['Carmel', 'Frisco'],
  printPlacesLived() {
    console.log(this.name);
    console.log(this.cities);

    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};
user.printPlacesLived();


const multiplier = {
  numbers: [4, 8],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};
console.log(multiplier.multiply());


const example = {
  favoriteNumbers: [4,8,12],
  multipleBy: 2,
  combineNumbers() {
    return this.favoriteNumbers.map((number) => number * this.multipleBy);
  }
}
console.clear()

const obj = {}

// let animal = {
// 	name: 'Animal',
// 	eats: true,
// 	walk() {
// 		return `${this.name} walking`
// 	}
// };
// let rabbit = {
// 	name: 'Rabbit',
// 	jumps: true,
// 	__proto__: animal,
// };

// console.log(rabbit.walk())

// let hamster = {
// 	stomach: [],

// 	eat(food) {
// 		this.stomach.push(food);
// 	}
// };

// let speedy = {
// 	__proto__: hamster
// };

// let lazy = {
// 	__proto__: hamster
// };

// speedy.eat = speedy.eat("apple");

// Function.prototype.defer = function(ms) {
// 	console.log(`defer ${ms}`)
// 	setTimeout(this, ms)
// };

// function f() {

// }

// f.defer(1000)

function logPeson() {
	console.log(`Person: ${this.name} age: ${this.age}`)
}

const person1 = {name: 'danila', age: 22}
const person2 = {name: 'Коля', age: 19}

function bind(context, fn) {
	return (...args) => fn.apply(context, args)
}

bind(person1, logPeson)()
// Способы взаимодействия с элементами массива (Методы массива)

const array = [
	{ name: 'Данила', age: 21, budget: 50000 },
	{ name: 'Ваня', age: 25, budget: 700 },
	{ name: 'Костя', age: 31, budget: 1800 },
	{ name: 'Кира', age: 18, budget: 15000 },
	{ name: 'Дима', age: 50, budget: 9000 },
	{ name: 'Оля', age: 15, budget: 50000 },
]


// Classic
for (let index = 0; index < array.length; index++) {
	// Code here...
}


// For Of - Перебор элетентов массива
for (let item of array) {
	// Code here...
}
// For In - Перебор индексов массива
for (let index in array) {
	// Code here...
}


// ForEach
array.forEach(item => console.log(item))
// Full ForEach
array.forEach((item, index, arr) => {
	// Code here...
})


// Map
// Создает на основе взаимодействия с элементами массива Новый массив
// return Объязателен!
let mapArray = array.map(item => item.name) // [ 'Данила', 'Ваня', 'Костя', 'Кира', 'Дима', 'Оля' ]
// Full
mapArray = array.map((item, index, arr) => {
	// Code here...
	return `${arr[index].name} ${item.age} index: ${index}`
}) // [ 'Данила 21 index: 0', 'Ваня 25 index: 1', 'Костя 31 index: 2', 'Кира 18 index: 3', 'Дима 50 index: 4', 'Оля 15 index: 5' ]


// Filter
// Создает на основе массива Новый массив c с переданными условиями
// return Объязателен!
let filterArray = array.filter((item) => {
	if (item.age >= 18) {
		return item.age
	}
})
// Simple Filter
filterArray = array.filter(item => item.age >= 18)



// Reduse 
// Возвращяет итог взаимодействий элементов массива
// return и начальная точка Объязательны!
let reduseArray = array.reduce((result, item) => {
	return result + item.budget  // 126500
}, 0) // <-- Начальная точка: result

// Аналогично
// let result = 0
// for (let index = 0; index < array.length; index++) {
// 	result += array[index].budget
// } // 126500



// Find и FindLast(итерация с конца)
// Возвращяет указаный объект
const myName = array.find(item => item.name === 'Данила') // { name: 'Данила', age: 21, budget: 50000 }
// FindIndex и FindLastIndex(итерация с конца)
// Возвращяет индекс указаного объекта
const myIndex = array.findIndex(item => item.name === 'Данила') // 0


// With
// Создает новый массив с изменением указаного объекта по индексу
// const withArray = array.with(1, 'withed!')

// toSorted
// toReverced
// toSpliced


// Пример совместного использования методов массивов
const primer = array
	.filter(person => person.budget > 3000)
	.map((person, index) => {
		return {
			id: index,
			name: person.name,
			budget: person.budget,
		}
	})
	.reduce((total, person) => total + person.budget, 0)
// primer end

// Каскадное создание двух мерного массива
const matix = new Array(5).fill(0).map(x => Array(5).fill(0))

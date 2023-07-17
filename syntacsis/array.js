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













// toLowerCase
// Преобразует символы в строке в нижний регистр.
"Hello Tproger".toLowerCase(); // "hello tproger"

// toUpperCase
// Преобразует символы в строке в верхний регистр.
"Hello Tproger".toUpperCase(); // "HELLO TPROGER"


// Как объединить строки

// concat
// Объединяет две или более строки и возвращает одну строку.
"Hello".concat(" Tproger"); // "Hello Tproger"
"Hello".concat(" T", "p", "r", "o", "g", "e", "r"); // "Hello Tproger"


// Как разделить строку на подстроки

// split
// Разбивает строку в массив по указанному разделителю. Вторым показателем может быть ограничитель
// Получаем каждый символ
"Hello Tproger".split(""); // ["H", "e", "l", "l", "o", " ", "T", "p", "r", "o", "g", "e", "r"]

// Получаем каждое слово из строки
"Hello Tproger".split(" "); // ["Hello", "Tproger"]

// Устанавливаем ограничитель
"Hello Tproger".split(" ", 1); // ["Hello"]


// Как повторить строку

// repeat
// Принимает в качестве параметра число и повторяет строку указанное количество раз.
"Tproger ".repeat(3); // "Tproger Tproger Tproger "


// includes
// Проверяет, содержит ли строка указанную подстроку. Возвращает значение true или false. Вторым параметром можно указать позицию в строке, с которой следует начать поиск.
"Hello Tproger".includes("Tproger"); // true
"Hello Tproger".includes("Hello", 1); // false

// indexOf
// Возращает индекс первого найденого вхождения указаного значения. Поиск ведется от начала строки до конца строки. Если совпадения нет, вернет -1. Вторым параметром можно передать позицию, с которой начнется поиск
"Hello Tproger".indexOf('o'); // 4
"Hello Tproger".indexOf('o', 5); // 7

// lastIndexOf
// Возращает индекс последнего найденого вхождения указаного значения. Поиск ведется от конца строки до начала строки. Если совпадения нет, вернет -1. Вторым параметром можно передать позицию, с которой начнется поиск
'Hello Tproger'.lastIndexOf('o'); // 7
'Hello Tproger'.lastIndexOf('o', 5); // 4

// startWith
// Проверяет, начинается ли строка с указаных символов. Второй параметор индекс начала проверки
'Hello Tproger'.startWith('Hello') // true
'Hello Tproger'.startWith('Hello', 1) // false

// endsWith
// Проверяет, заканчивается ли строка с указаных символов. Второй параметор индекс начала проверки
'Hello Tproger'.endsWith('Tproger') // true
'Hello Tproger'.endsWith('Tproger', 12) // false

// search
// Проверяет, есть ли в строке указанное значение и возвращает индекс начала совпадения
'hi, hello, hey'.search('hello') // 4


// Как извлечь подстроку

// slice
// Извлекает часть строки и возвращает новую строку. Обязательный параметр - начало извлечения. Вторым параметром можно указать границу(по умолчанию - до конца строки)
"Методы строк на Tproger".slice(16); // "Tproger"
"Методы строк на Tproger".slice(16, 21); // "Tproger"

// Отрицательные значения тоже работают
"Методы строк на Tproger".slice(-7); // "Tproger"
"Методы строк на Tproger".slice(-7, -2); // "Tprog"


// Как заменить подстроку

// replace
// Ищет в строке указанное значение или регулярное выражение и возвращает новую строку, в которой выполнена замена на второй параметр. Можно заменить найденные значения другой строкой или передать функцию для работы над совпадениями.
"hi, hello, hi".replace("hi", "hey"); // "hey, hello, hi"
"hi, hello, hi".replace(/hi/g, "hey"); // "hey, hello, hey"

// replaceAll
// Даёт такой же результат, как метод replace() с глобальным флагом g. Заменяет все найденные совпадения другой строкой или переданной функцией.
"hi, hello, hi".replaceAll("hi", "hey"); // "hey, hello, hey"


// Как удалить пробелы в строке
// trim
// Обрезает пробелы с обоих концов строки.
"   Hello Tproger ".trim(); // "Hello Tproger"

// trimEnd
// Обрезает пробелы в конце строки
"   Hello Tproger ".trimEnd(); // "   Hello Tproger"

// trimStart
// Обрезает пробелы в начале строки
"   Hello Tproger ".trimStart(); // "Hello Tproger "


// Как добавить в строку пробелы или другие символы
// padEnd
// Добавляет в конце отступы, пока строка не достигнет длины, заданной первым параметром. Вторым параметром можно указать другой символ вместо пробела.
"Hello Tproger".padEnd(20, "*"); // "Hello Tproger*******"

// padStart
// Добавляет в начале отступы, пока строка не достигнет длины, заданной первым параметром. Вторым параметром можно указать другой символ вместо пробела.
"Hello Tproger".padStart(20, "*"); // "*******Hello Tproger"
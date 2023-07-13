// const users = new Object() //  Синтаксис 'конструктора объекта'
// const users = {} // 'Литерал объекта'

let imputKey = 'imputKey'

let userInfo = {
	name: 'Danila', // Поля объекта
	age: 22, // Последняя (весячая) запятая
	'dable sring key': '<-- Объявление ключа объекта состоящего из нескольких слов',
	[imputKey]: '<-- Объявление ключа объекта из вне',

	showInfo: () => console.log(this)

}
// Обращение к полям Object
userInfo.name
userInfo['dable sring key']

// Добавление полей в Object
userInfo.gen = 'mele';

// Удаление полей в Object
delete userInfo.gen

// Копирование Object
let cloneInfo = Object.assign({}, userInfo)

// Проверка существует ли свойство 
"key" in userInfo

// Цикл For для Object
for (let key in userInfo) {
	//Code here...
}

// Функция как поле у Object
const myObj = {
	myMethod: (params) => {
	  // ...do something here
	},
	myOtherMethod: (params) => {
	  // ...do something here
	},
	nestedObj: {
	  myNestedMethod: (params) => {
		// ...do something here
	  }
	}
  };

console.log(userInfo.showInfo())






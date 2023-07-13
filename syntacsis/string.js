// Как изменить регистр

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

// match
// Извлекат результат сопоставления строки с регулярным выражением
"Методы строк на Tproger".match(/[А-Я]/g); // "М"



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



// Конструктор RegExp создает объект регулярного выражения для сопоставления текста с ним
// /pattern/flags
new RegExp(pattern, flags)
const regex = new RegExp('\\w+');
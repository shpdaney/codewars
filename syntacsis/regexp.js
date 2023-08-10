// 1. Обьявление
// const regExp1 = /qwerty/gmi
// const regExp2 = new RegExp('qwerty', 'gmi')


// 2. Флаги
// i - Игнорировать регист
// console.log(/LOVE/i.test('I love you'));

// g - глобальный поиск
// console.log('I love love you'.match(/love/g));

// m - мультистрочный поиск
// const str = `1 text
//     2 text
//     3 text`
// console.log(str.match(/^\d/gm));


// 3. Методы
// 3.1 str.match(regex)
// console.log('I love Love you'.match(/love/gi));
// match() возвращает [массив] или null

// 3.2 str.replace(regex, 'NEW')
// console.log('I love you'.replace(/love/i, 'hate'));

// 3.3 regex.test(str)
// console.log('I love love you'.match(/love/g));


// 4. Буквеные классы
// . - Любой символ кроме \n
// \d - любая цифра [0-9]
// \w - любая Латинская буква [a-z], цифра, _
// \s - Пробел
//
// \D - исключение \d любой цифры
// \W - исключение \w любая Латинская буква [a-z], цифра, _
// \S - исключение \s Пробел

// console.log(/\d\d/.test('22 May'));


// 5. Якоря
// ^ - начало строки
// $ - конец строки
// \b - Граница слова 'border'
// console.log(/^\d\d.May$/.test('22 May'));
// console.log(/\bJava\b/i.test('Java?'));


// 6. - Пропуск специальных символов регулярных вырожений
// [ \ ^ $ ( ) . | ? * + /
// const regex = new RegExp('^\\^\\$\\.')
// console.log(/^\^\$\./.test('^$. text'));
// console.log(regex.test('^$. text'));


// 7. Диапазоны
// [abc] - Любой символ из скобок
// [А-Яё] - Любая кирилическая буква
// [^a-z] - Исключение
// console.log(/[abc]/.test('a'))


// 8. Квантификаторы
// {n} - точное количество
// {n1, n2} - динамический точное количество
// console.log(/\w{3}/.test('www'));

// сокращенная запись квантификаторов
// + {1,}
// ? {0,1}
// * {0,}
// console.log(/^\d+/.test(''));


// 9. Жадность и Лень
// console.log('I "love" or "hate" you'.match(/".+"/g));
// console.log('I "love" or "hate" you'.match(/".+?"/g));























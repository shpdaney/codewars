"use strict";
/*
this это контекстный менеджер,
который ссылается на объект в контексте которого был вызван this
*/
const car = {
    model: 'BMW',
    year: 2001,
    getModel: function (method) {
        console.log(`This is ${this.model}`)
        console.log(`Create with method ${method}()`)
        return `End`
    }
}

const jeep = {
    model: 'Jeep',
    year: 2010,
}
const tesla = {
    model: 'Tesla',
    year: 2010,
}

// bind создает новую функцию для указаного New объекта на основе PARENT
// bindFn = PARENT.fn.bind( NEW )
const bindTeslaGetModel = car.getModel.bind(jeep, 'bind')
bindTeslaGetModel()

// Метод call делает тоже самое что и bind (создает новую функцию), но сразу ВЫЗЫВАЕТ ЕЕ
car.getModel.call(tesla, 'call')

// Метод apply делает тоже самое что и call (Вызывает новую функцию), но имеет всего 2 параметра (1: PARENT 2: Array)
car.getModel.apply(tesla, ['apply'])

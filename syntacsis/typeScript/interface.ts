interface IUser {
    readonly name: string,
    readonly surname: string,
    readonly age: number,
}

interface IInfo {
    phone: number,
    email: string,
}

// Расширение полей интерфейса от других интерфейсов
interface ICustomer extends IInfo {
    user: IUser,
    work: string
}

const myUser: ICustomer = {
    user: {
        name: "Danay",
        surname: 'Shpala',
        age: 22,
    },
    work: 'Frontend',
    phone: 893123,
    email: 'TEXT@mail.com'
}

// типезация Не определенное количество полей интерфейса
interface Iunknow {
    [name: string]: number
}
const unknowFetch: Iunknow = {
    fage: 123,
    feafe: 544,
    // eqwe: ''
}

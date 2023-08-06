class typeClass {
    name: string
    surname: string
    age: number

    private secretMessage: string

    constructor(props: IUser) {
        this.name = props.name
        this.surname = props.surname
        this.age = props.age
    }

    printFullName(): string {
        return `${this.name} ${this.surname}`
    }

    printSecterMessage(): string {
        return `Secret: ${this.secretMessage}`
    }
}

const mySuperClass = new typeClass({
    name: 'Danay',
    surname: 'Shpala',
    age: 22,
})

console.log(mySuperClass.printFullName()); // Danay Shpala

// console.log(mySuperClass.secretMessage); PRIVATE
console.log(mySuperClass.printSecterMessage());
const obj = {}
let a = Symbol('a')
let b = Symbol('b')
obj[a] = 'Hello'
obj[b] = 'World'
const objectSymbols = Object.getOwnPropertySymbols(obj)
console.log(objectSymbols)
for(let i of objectSymbols) {
    console.log(i)
}

let obj2 = {
    [Symbol('myKey')]:1,
    enum:2,
    nonEnum: 3
}
console.log(Reflect.ownKeys(obj2))  //[ 'enum', 'nonEnum', Symbol(myKey) ]

let size = Symbol('size')
class Collection {
    constructor() {
        this[size] = 0
    }
    add(item) {
        this[this[size]] = item
        this[size]++
    }
    static sizeOf(instance) {
        return instance[size]
    }
}
let x = new Collection()
x.add(1)
console.log(Collection.sizeOf(x))
console.log(Object.keys(x))
console.log(Object.getOwnPropertyNames(x))
console.log(Object.getOwnPropertySymbols(x))
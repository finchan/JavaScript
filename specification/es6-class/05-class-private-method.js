class IncreasingCounter {
    #count = 0
    get value() {
        console.log('Getting the current value!')
        return this.#count
    }
    increment() {
        this.#count++
    }
}

let m = new IncreasingCounter()
m.value

class Point {
    #x
    constructor(x = 0) {
        this.#x = x
    }
    get x() {
        return this.#x
    }
    set x(value) {
        this.#x = value
    }
}
let n = new Point(1)
console.log(n.x)
n.x = 2
console.log(n.x)

class Foo{
    #a
    #b
    constructor(a,b) {
        this.#a = a
        this.#b = b
    }
    #sum() {
        return this.#a + this.#b
    }
    printSum() {
        console.log(this.#sum())
    }
}
let k = new Foo(3,4)
k.printSum()

class Counter {
    #xValue = 0
    constructor(value) {
        this.#x = value
    }
    get #x() {
        return this.#xValue
    }
    set #x(value) {
        console.log('#setter')
        this.#xValue = value
    }
}
let j = new Counter(1)

class Foo2{
    #privateValue = 42
    static getPrivateValue(foo) {
        return foo.#privateValue
    }
}
let l = Foo2.getPrivateValue(new Foo2())
console.log(l)

class FakeMath{
    static PI = 22/7
    static #totallyRandomNumber = 4
    static #computeRandomNumber() {
        return FakeMath.#totallyRandomNumber
    }
    static random() {
        console.log("I heard you like random numbers...")
        return FakeMath.#computeRandomNumber()
    }
}
console.log(FakeMath.PI);
console.log(FakeMath.random())
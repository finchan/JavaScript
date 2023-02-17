let log = console.log
class Point{
    constructor(x,y) {
        this.x = x
        this.y = y
    }
    toString() {
        return '(' + this.x + ', ' + this.y +')'
    }
}
log(typeof Point)   //  function
log(Point === Point.prototype.constructor)  //  true

class B{}
let b = new B()
log(b.constructor == B.prototype.constructor)   //  true

class Foo{
    constructor() {
        return Object.create(null)
    }
}
log(new Foo() instanceof Foo)   //false

class Point1 {
    constructor(x,y) {
        this.x = x
        this.y = y
    }
    toString() {
        return '('+this.x+','+this.y+')'
    }
}
let point = new Point1(2,3)
log(point.toString())
log(point.hasOwnProperty('x'))  //true
log(point.hasOwnProperty('y'))  //true
log(point.hasOwnProperty('toString'))   //false
log(point.__proto__.hasOwnProperty('toString'))     //true
log(Point1.prototype.hasOwnProperty('toString'))    //true
log(point.__proto__ === Point1.prototype)   //true
log(Object.getPrototypeOf(point) === Point1.prototype)   //true

class MyClass{
    get prop() {
        log('getter')
        return 'getter value'
    }
    set prop(value) {
        log('setter: ' + value)
    }
}
let inst = new MyClass()
inst.prop = 123
log(inst.prop)

class CustomHTMLElement{
    constructor(element) {
        this.element = element
    }
    get html() {
        return this.element.innerHTML;
    }
    set html(value) {
        this.element.innerHTML = value
    }
}
let descriptor = Object.getOwnPropertyDescriptor(
    CustomHTMLElement.prototype, 'html')
log('get' in descriptor)
log(descriptor)

let methodName = 'getArea'
class Square{
    [methodName](){
        //...
    }
}

class Foo1{
    constructor(...args) {
        this.args = args
    }
    * [Symbol.iterator]() {
        for(let arg of this.args) {
            yield arg
        }
    }
}
for(let x of new Foo1('hello', 'world')){
    log(x)
}

class Logger {
    constructor() {
        this.printName = this.printName.bind(this);
    }

    printName(name = 'there') {
        this.print(`Hello ${name}`);
    }
    print(text) {
        console.log(text);
    }
}
const logger = new Logger();
const { printName } = logger;
printName();
logger.printName('there')

class Obj{
    constructor() {
        this.getThis = () => this
    }
}
const myObj = new Obj()
log(myObj.getThis() === myObj)  //true


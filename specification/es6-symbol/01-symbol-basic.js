let s = Symbol()
console.log(typeof s)

let s1 = Symbol("foo")
let s2 = Symbol("bar")
console.log(s1.description)

console.log(s1)
console.log(s2)
console.log(s1.toString())
console.log(s2.toString())

const obj = {
    toString(){
        return 'abc'
    }
}
const sym = Symbol(obj)
console.log(sym)

let s4 = Symbol()
let s5 = Symbol()
console.log(s4===s5)
let s6 = Symbol('foo')
let s7 = Symbol('foo')
console.log(s6===s7)

let sss = Symbol('My symbol')
console.log("your symbol is " + sss)
//// TypeError: can't convert symbol to string

let sss1 = Symbol('My Symbol')
console.log(String(sss1))   //Symbol(My Symbol)
console.log(sss1.toString())//Symbol(My Symbol)

let sym3 = Symbol()
console.log(Boolean(sym3))  //true
console.log(!sym3)  //false
if(sym3) {
    console.log("Default Boolean value of Symbol is true")
}

console.log(Number(sym3))   ////TypeError
console.log(sym3+2) ////TypeError
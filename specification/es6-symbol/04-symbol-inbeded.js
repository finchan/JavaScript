log = console.log
class MyClass{
    [Symbol.hasInstance](foo) {
        return foo instanceof Array
    }
}
console.log([1,2,3] instanceof new MyClass())    //true

class Even {
    static [Symbol.hasInstance] (obj) {
        return Number(obj) % 2 === 0
    }
}
class Odd {
    [Symbol.hasInstance] (obj) {
        return Number(obj) %2 ===1
    }
}
log(1 instanceof new Odd())
log(1 instanceof Even)
log(2 instanceof Even)
log(2 instanceof new Odd())

log("Symbol.isConcatSpreadable")
let arr1 = ['c', 'd']
console.log(['a','b'].concat(arr1,'e'))
log(arr1[Symbol.isConcatSpreadable])
//  ['a', 'b', 'c', 'd', 'e']
//  undefined

let arr2 = ['c', 'd']
arr2[Symbol.isConcatSpreadable] = false
log(['a', 'b'].concat(arr2, 'e'))
//  ['a', 'b', ['c', 'd', [Symbol(Symbol.isConcatSpreadable)]:false], 'e']

let obj = {length: 2, 0: 'c', 1: 'd'};
log(['a', 'b'].concat(obj, 'e'))
// [ 'a', 'b', { '0': 'c', '1': 'd', length: 2 }, 'e' ]
obj[Symbol.isConcatSpreadable] = true;
log(['a', 'b'].concat(obj, 'e')) // ['a', 'b', 'c', 'd', 'e']

class A1 extends Array{
    constructor(args) {
        super(args)
        this[Symbol.isConcatSpreadable] = true
    }
}
class A2 extends Array{
    constructor(args) {
        super(args)
    }
    get [Symbol.isConcatSpreadable] () {
        return false
    }
}
let a1 = new A1()
a1[0] = 3
a1[1] = 4
let a2 = new A2()
a2[0] = 5
a2[1] = 6
log([1,2].concat(a1).concat(a2))
//  [ 1, 2, 3, 4, A2(2) [ 5, 6 ] ]

log("Symbol.species")
class MyArray extends Array{

}
const a = new MyArray(1,2,3)
const b = a.map(x=>x)
const c = a.filter(x=>x>1)
log(b instanceof MyArray)   //true
log(c instanceof MyArray)   //true

class MyArray1 extends Array{
    static get [Symbol.species]() {
        return Array
    }
}
const aa1 = new MyArray1()
const bb1 = a.map(x=>x)
log(bb1 instanceof MyArray1)     //false
log(bb1 instanceof Array)    //true
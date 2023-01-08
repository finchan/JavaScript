function* hellowWorldGenerator() {
    yield 'hello'
    yield 'world'
    return 'ending'
}
//  上面的函数定义了三个状态：hello，world 和 return 语句（结束执行）
let hw = hellowWorldGenerator()
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
// { value: 'hello', done: false }
// { value: 'world', done: false }
// { value: 'ending', done: true }
// { value: undefined, done: true }
/**
 第一次调用，Generator 函数开始执行，直到遇到第一个yield表达式为止。next方法返回一个对象，它的value属性就是当前yield表达式的值hello，done属性的值false，表示遍历还没有结束。
 第二次调用，Generator 函数从上次yield表达式停下的地方，一直执行到下一个yield表达式。next方法返回的对象的value属性就是当前yield表达式的值world，done属性的值false，表示遍历还没有结束。
 第三次调用，Generator 函数从上次yield表达式停下的地方，一直执行到return语句（如果没有return语句，就执行到函数结束）。next方法返回的对象的value属性，就是紧跟在return语句后面的表达式的值（如果没有return语句，则value属性的值为undefined），done属性的值true，表示遍历已经结束。
 第四次调用，此时 Generator 函数已经运行完毕，next方法返回对象的value属性为undefined，done属性为true。以后再调用next方法，返回的都是这个值。
 */

function* f() {
    console.log('Execute')
}
let generator = f()
setTimeout(function() {
    generator.next()
}, 3000)

let arr = [1,[[2,3],4],[5,6]]
let flat = function* (a) {
    let length = a.length
    for(let i=0;i<length;i++) {
        if(typeof a[i] !== 'number') {
            yield* flat(a[i])
        } else {
            yield a[i]
        }
    }
}
for(let f of flat(arr)) {
    console.log(f)
}

function* demo() {
    console.log('Hello' + (yield))
    console.log('Hello2' + (yield 123))
}
for(let a of demo()) {
    console.log(a)
}
//  undefinded
//  Helloundefined
//  123
//  Hello2undefined

function* demo2() {
    foo(yield 'a', yield 'b')
    let input = yield
}
function foo(a, b) {
    console.log("a and b are undefined")
    console.log(a,b)
}
for(let m of demo2()) {
    console.log(m)
}

let myIterable = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
let c = [...myIterable] // [1, 2, 3]

function* gen(){
    // some code
}
let g = gen();
console.log(g[Symbol.iterator]() === g)
// true
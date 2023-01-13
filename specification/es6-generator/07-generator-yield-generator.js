// function* foo() {
//     yield 'a'
//     yield 'b'
// }
//
// //  yield* Generator函数
// function* bar() {
//     yield 'x'
//     yield* foo()
//     yield 'y'
// }
//
// //  等同于
// function* bar1() {
//     yield 'x'
//     yield 'a'
//     yield 'b'
//     yield 'y'
// }
//
// //  等同于
// function* bar2() {
//     yield 'x'
//     for(let a of foo()) {
//         yield a
//     }
//     yield 'y'
// }
//
// for(let v of bar()) {
//     console.log(v)
// }
// for(let v of bar1()) {
//     console.log(v)
// }
// for(let v of bar2()) {
//     console.log(v)
// }
//
// function* inner() {
//     yield 'hello!'
// }
// function* outer1(){
//     yield 'open'
//     yield inner()   //返回一个遍历器对象 { value: Object [Generator] {}, done: false }
//     yield 'close'
// }
// function* outer2(){
//     yield 'open'
//     yield* inner()  //返回一个遍历器对象内部的值
//     yield 'close'
// }
// let gen = outer1()
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// let gen2 = outer2()
// console.log(gen2.next())
// console.log(gen2.next())
// console.log(gen2.next())
//
// let delegatedIterator = (function* () {
//    yield 'Hello'
//    yield 'Bye!'
// }())
// let delegatingIterator = (function* (){
//    yield 'Greetings!'
//    yield* delegatedIterator
//    yield 'Ok, bye.'
// }())
// for(let value of delegatingIterator) {
//     console.log(value)
// }
//
//
// function* foo() {
//     yield 2;
//     yield 3;
//     return "foo";
// }
// function* bar() {
//     yield 1;
//     let v = yield* foo();
//     console.log("v: " + v);
//     yield 4;
// }
// let it2 = bar();
// it2.log = function() {
//     console.log(this.next())
// }
// it2.log()
// it2.log()
// it2.log()
// it2.log()
// it2.log()
//
// function* genFuncWithReturn() {
//     yield 'a'
//     yield 'b'
//     return 'The result'
// }
// function* logReturned(genObj) {
//     let result = yield* genObj
//     console.log(result)
// }
// let m = [...logReturned(genFuncWithReturn())]
// for(let a of m) {
//     console.log(a)
// }

function* iterTree(tree) {
    if(Array.isArray(tree)){
        for(let i=0; i<tree.length; i++) {
            yield* iterTree(tree[i])
            // if(Array.isArray(tree[i])) {
            //     yield* iterTree(tree[i])
            // } else {
            //     yield tree[i]
            // }
        }
    } else {
        yield tree
    }
}
const tree = ['a', ['b', 'c'], ['d', 'e']]
for(let x of iterTree(tree)){
    console.log(x)
}
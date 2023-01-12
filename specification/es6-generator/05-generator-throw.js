// let g = function* (){
//     try{
//         yield
//         console.log('----')
//     } catch(e) {
//         console.log('内部捕获', e)
//     }
// }
//
// let i = g()
// i.next()
//
// try{
//     i.throw('a')
//     i.throw(new Error('外部捕获'))
// } catch(e) {
//     console.log('outer catch', e.message)
// }
//
// let g2 = function* (){
//     try{
//         yield
//         console.log('----')
//     } catch(e) {
//         if (e != 'a') throw e
//         console.log('内部捕获', e)
//     }
// }
// let i2 = g2()
// i2.next()
// try{
//     throw new Error('a')
//     throw new Error('b')
// } catch(e) {
//     console.log('外部捕获', e.message)
// }

// let g3 = function* () {
//     while (true) {
//         yield;
//         console.log('内部捕获', e);
//     }
// };
// let i3 = g3();
// i3.next();
// try {
//     i3.throw('a');
//     i3.throw('b');
// } catch (e) {
//     console.log('外部捕获', e);
// }

// let gen = function* gen() {
//     yield console.log('hello')
//     yield console.log('world')
// }
// let g4 = gen()
// g4.next()
// g4.throw('a')
// g4.next()
//  hello
//  Uncaught undefined


// let gen2 = function* (){
//     try {
//         yield console.log('---a');
//     } catch (e) {
//
//     }
//     yield console.log('---b');
//     yield console.log('---c');
// }
// let g5 = gen2()
// console.log(g5.next())
// console.log(g5.throw())
// console.log(g5.next())

// function* foo() {
//     let x = yield 3
//     let y = x.toUpperCase()
//     yield y
// }
// let it = foo()
// console.log(it.next()) // { value:3, done:false }
// try {
//     console.log(it.next(42))
// } catch (err) {
//     console.log(err.message)
// }

function* g() {
    yield 1;
    console.log('throwing an exception');
    throw new Error('generator broke!');
    yield 2;
    yield 3;
}
function log(generator) {
    var v;
    console.log('starting generator');
    try {
        v = generator.next();
        console.log('第一次运行next方法', v);
    } catch (err) {
        console.log('捕捉错误', v);
    }
    try {
        v = generator.next();
        console.log('第二次运行next方法', v);
    } catch (err) {
        console.log('捕捉错误', v);
    }
    try {
        v = generator.next();
        console.log('第三次运行next方法', v);
    } catch (err) {
        console.log('捕捉错误', v);
    }
    console.log('caller done');
}
log(g());
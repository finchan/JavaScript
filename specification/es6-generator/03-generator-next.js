function* f() {
    for(let i=0;true;i++) {
        let reset = yield i
        if(reset) {i=-1}
    }
}
let g = f()
console.log(g.next())
console.log(g.next())
console.log(g.next(true))
console.log(g.next())

function* foo(x) {
    let y = 2* (yield (x+1))    //2*undefined is NaN
    let z =  yield (y/3)    //undefined/3 is NaN
    //  返回对象的value属性等于5 + NaN + undefined，即NaN
    return (x+y+z)      //  5 + NaN + undefined is NaN
}
let a = foo(5)
console.log(a.next())
console.log(a.next())
console.log(a.next())

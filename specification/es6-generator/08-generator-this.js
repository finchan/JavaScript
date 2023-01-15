function* g() {}
g.prototype.hello = function() {
    return 'hi!'
}
let obj = g()
console.log(obj instanceof g)
console.log(obj.hello())

function* g2() {
    this.a = 11
}
let obj2 = g2()
console.log(obj2.next())
console.log(obj2.a)

function* F(){
    console.log('Begin...')
    this.a = 1
    yield this.b = 2
    yield this.c = 3
}
let obj3 = {}
let f = F.call(obj)
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(obj.a)
console.log(obj.b)
console.log(obj.c)

function* F2() {
    this.a = 1
    yield this.b =2
    yield this.c = 3
}
let f2 = F2.call(F2.prototype)
console.log(f2.next())
console.log(f2.next())
console.log(f2.next())
console.log(f2.a)
console.log(f2.b)
console.log(f2.c)
function F3() {
    return F2.call(F2.prototype)
}
let f3 = new F3()
console.log(f3.next())
console.log(f3.next())
console.log(f3.next())
console.log(f3.a)
console.log(f3.b)
console.log(f3.c)

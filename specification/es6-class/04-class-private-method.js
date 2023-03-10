const bar = Symbol('bar')
const snaf = Symbol('snaf')
class myClass{
    foo(baz) {
        this[bar](baz)
    }

    //私有方法
    [bar](baz) {
        return this[snaf] = baz
    }
}

let m = new myClass()
m.foo("1")
console.log(m[snaf])
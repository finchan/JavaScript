class Widget{
    foo(baz){
        bar.call(this, baz)
    }
}
function bar(baz) {
    return this.snaf = baz
}
let m = new Widget()
m.foo("1")
console.log(m.snaf)
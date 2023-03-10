class widget {
    //  公有方法
    foo(baz) {
        this._bar(baz)
    }

    //  私有方法
    _bar(baz) {
        return this.snaf = baz
    }
}

let m = new widget()
m.foo("1")
console.log(m.snaf)
m._bar("2")
console.log(m.snaf)
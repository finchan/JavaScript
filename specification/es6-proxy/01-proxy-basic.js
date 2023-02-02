let log = console.log
let proxy =  new Proxy({}, {
    get: function(target, propKey) {
        return 35
    }
})
log(proxy.time)

let target = {}
let handler = {}
let proxy1 = new Proxy(target, handler)
proxy1.a = 'b'
log(target.a)

let obj = Object.create(proxy)
log(obj.time)

let handler1 = {
    get: function(target, name) {
        if(name === 'prototype'){
            return Object.prototype
        }
        return 'Hello, ' + name
    },
    apply: function(target, thisBinding, args) {
        return args[0]
    },
    construct: function(target, args) {
        return {
            value: args[1]
        }
    }
}
let fproxy = new Proxy(function(x,y) {
    return x+y
}, handler1)
log(fproxy(1,2))        //trigger apply interception
log(new fproxy(1,2))
log(fproxy.prototype === Object.prototype)
log(fproxy.foo)

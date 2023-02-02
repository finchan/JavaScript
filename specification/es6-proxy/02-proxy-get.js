let log = console.log
let person = {
    name: 'Alex'
}
let proxy = new Proxy(person, {
    get: function(target, propKey) {
        if(propKey in target) {
            return target[propKey]
        } else {
            throw new ReferenceError('Prop name "' + propKey + '" doesn\'t exist')
        }
    }
})
log(proxy.name)
// log(proxy.age)

let proto = new Proxy({}, {
    get(target, propertyKey, receiver) {
        log('GET ', propertyKey)
        return target[propertyKey]
    }
})
let obj = Object.create(proto)
log(obj.foo)    //  GET foo     // undefined

function createArray(...elements) {
    let handler = {
        get(target, propKey, receiver) {
            let index = Number(propKey)
            if(index < 0) {
                propKey = String(target.length + index)
            }
            return Reflect.get(target, propKey, receiver)
        }
    }
    let target = []
    target.push(...elements)
    return new Proxy(target, handler)
}
let arr =  createArray('a', 'b', 'c')
log(arr[-1])

const proxy1 = new Proxy({}, {
    get:function(target, key, receiver) {
        return receiver
    }
})
log(proxy1.getReceiver  === proxy1)
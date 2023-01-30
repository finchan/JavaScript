let mySymbol = Symbol()
//  第一种写法
let a = {}
a[mySymbol] = 'Hello'
//  第二种写法
let b = {
    [mySymbol]: 'Hello'
}
//  第三种写法
let c = {}
Object.defineProperty(c, mySymbol, {value:'Hello'})

console.log(a[mySymbol],b[mySymbol], c[mySymbol])

const log = {}
log.levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn')
}
console.log(log.levels.DEBUG.description)

const COLOR_RED = Symbol("RED")
const COLOR_GREEN = Symbol("GREEN")
function getComplement(color) {
    switch(color) {
        case COLOR_RED:
            return COLOR_GREEN
        case COLOR_GREEN:
            return COLOR_RED
        default:
            throw new Error('Undefined color')
    }
}
console.log(getComplement(COLOR_RED))
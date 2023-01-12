function* gen(){
    yield 1
    yield 2
    yield 3
}
let g = gen()

console.log(g.next())
console.log(g.return('foo'))
console.log(g.next())

function* gen2() {
    yield 1;
    yield 2;
    yield 3;
}
let g2 = gen2();
g2.next()        // { value: 1, done: false }
console.log(g2.return()) // { value: undefined, done: true }

function* numbers () {
    yield 1
    try {
        yield 2
        yield 3
    } finally {
        yield 4
        yield 5
    }
    yield 6
}
let g3 = numbers()
console.log(g3.next()) // { value: 1, done: false }
console.log(g3.next()) // { value: 2, done: false }
console.log(g3.return(7)) // { value: 4, done: false }
console.log(g3.next()) // { value: 5, done: false }
console.log(g3.next()) // { value: 7, done: true }
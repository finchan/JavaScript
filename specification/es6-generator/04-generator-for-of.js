function* foo() {
    yield 1
    yield 2
    yield 3
    return 4
}
for(let a of foo()){
    console.log(a)
}
let a = foo()
console.log(a.next())
console.log(a.next())
console.log(a.next())
console.log(a.next())

function* objectEntries() {
    let propKeys = Reflect.ownKeys(this);
    for (let propKey of propKeys) {
        yield [propKey, this[propKey]];
    }
}
let jane = { first: 'Jane', last: 'Doe' };
jane[Symbol.iterator] = objectEntries;
for (let [key, value] of jane) {
    console.log(key," : ", value);
}
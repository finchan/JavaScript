let set = new Set().add('a').add('b').add('c')
let [x,y] = set //x='a',y='b'
let [first, ...rest] = set  //first='a', rest = ['b','c']

let str = 'hello';
let c = [...str] //  ['h','e','l','l','o']
let arr = ['b', 'c']
let c2 = ['a', ...arr, 'd']  // ['a', 'b', 'c', 'd']

let generator = function* () {
    yield 1;
    yield* [2,3,4];
    yield 5;
};
let iterator = generator();
console.log(iterator.next()) // { value: 1, done: false }
iterator.next() // { value: 2, done: false }
iterator.next() // { value: 3, done: false }
iterator.next() // { value: 4, done: false }
iterator.next() // { value: 5, done: false }
iterator.next() // { value: undefined, done: true }
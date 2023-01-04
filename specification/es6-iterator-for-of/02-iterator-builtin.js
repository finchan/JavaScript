//  原生具备Iterator接口的数据结构：
//  Array, Map, Set, String, TypedArray, arguments, NodeList
let arr = ['a', 'b', 'c']
let iter = arr[Symbol.iterator]()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
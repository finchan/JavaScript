let someString = "hi"
console.log(typeof someString[Symbol.iterator])
//  function

let iterator = someString[Symbol.iterator]()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

//  修改对象默认iterator
let str = new String("hi")
str[Symbol.iterator] = function() {
    return {
        next: function() {
            if(this._first) {
                this._first = false
                return {
                    value: "bye",
                    done: false
                }
            } else {
                return { done: true}
            }
        },
        _first: true
    }
}
let arr = [...str]
console.log(arr)
console.log(str)

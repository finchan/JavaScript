function Obj(value) {
    this.value = value
    this.next = null
}

Obj.prototype[Symbol.iterator] = function() {
    let iterator = {next: next}
    //  next函数体自9-22
    //  调用该方法会返回遍历器对象iterator，
    //  调用该对象的next方法，在返回一个值的同时，自动将内部指针移到下一个实例
    let current = this
    function next() {
        if(current) {
            let value = current.value
            current = current.next
            return {
                done: false, value:value
            }
        } else {
            return {
                done: true
            }
        }
    }
    return iterator
}

let one = new Obj(1)
let two = new Obj(2)
let three = new Obj(3)

one.next = two
two.next = three

for (let i of one) {
    console.log(i)
}
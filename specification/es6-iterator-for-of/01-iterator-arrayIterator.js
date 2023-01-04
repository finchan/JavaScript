let it = makeIterator(['a','b'])
console.log(it.next())
console.log(it.next())
console.log(it.next())

function makeIterator(array){
    let nextIndex = 0
    return {
        next: function() {
            return nextIndex < array.length ?
                {value: array[nextIndex++], done:false} :
                {value: undefined, done: true}
        }
    }
}

let id = idMaker()
console.log(id.next())
console.log(id.next())
console.log(id.next())

function idMaker() {
    let index = 0
    return {
        next: function() {
            return {
                value: index++,
                done: false
            }
        }
    }
}
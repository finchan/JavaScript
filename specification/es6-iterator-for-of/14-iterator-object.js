let es6 = {
    edition: 6,
    committee: "TC39",
    standard: "ECMA-262"
};
for (let e in es6) {
    console.log(e);
}
// edition
// committee
// standard

for (let key of Object.keys(es6)) {
    console.log(key + ': ' + es6[key]);
}

// for (let e of es6) {
//     console.log(e);
// }
// TypeError: es6[Symbol.iterator] is not a function

function* entries(obj) {
    for(let key of Object.keys(obj)){
        yield [key, obj[key]]
    }
}
for(let [key,value] of entries(es6)){
    console.log(key, '->', value)
}

let fibonacci = {
    n: 1,
    sum: 0,
    [Symbol.iterator](){
        const self = this
        return{
            next(){
                self.sum = self.sum + self.n
                self.n = self.n+1
                return {
                    value: self.sum,
                    done: false
                }
            }
        }
    }
}
for(let n of fibonacci) {
    if(n > 15) break
    console.log(n)
}
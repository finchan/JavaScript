const arr = ['red', 'green', 'blue']
for(let v of arr) {
    console.log(v)
}

const obj = {}
obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr)
for(let v of obj) {
    console.log(v)
}

//  for...of循环可以代替数组实例的forEach方法
arr.forEach((element,index)=>{
    console.log(element)
    console.log(index)
})

for(let a in arr) {
    console.log(a)  //0 1 2
}
for(let a of arr) {
    console.log(a)  //red green blue
}

let arr2 = [3, 5, 7];
arr2.foo = 'hello';
for (let i in arr2) {
    console.log(i); // "0", "1", "2", "foo"
}
for (let i of arr2) {
    console.log(i); //  "3", "5", "7"
}
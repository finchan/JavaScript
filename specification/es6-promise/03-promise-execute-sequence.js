//  先执行promise方法体，在执行当前脚本同步任务，最后执行Promise then方法
//  then方法可以不提供reject函数处理，resolve和reject的回调函数也可以不提供value和error参数
let promise = new Promise((resolve, reject) => {
    console.log('Promise')
    resolve("Done")
})
promise.then((value)=>{
    console.log(['Resolved',value])
}, ()=>{
    console.log('Failed')
})
console.log('Hi!')
// Promise新建后会立即执行
const promise = new Promise(function (resolve, reject) {
    //  Async Code
    setTimeout(execute, 3000, resolve)

    //  这是一个不好的例子，因为同步代码在异步代码之下，程序会顺序执行下面的同步代码
    //  因为同步代码设置了Promise的状态，promise的then方法会立即调用
    //  异步代码10秒后完成执行，再去修改Promise状态已经无任何意义，因为状态只能改一次
    //  Sync Code and Set Status of Promise
    log("promise sync code")
    //  但是如果这里不设置Promise状态，这个例子就是可行的，因为then方法只针对状态改变才调用
    resolve("Success!")
    // reject("Failed!")
});

promise.then(function(value) {
    log(["Resolved: ", value])
}, function(error) {
    log(["Rejected: ", error])
})

function execute(resolve) {
    log("Async Code")
    resolve("Done")

}

function log(msg) {
    console.log(msg)
}
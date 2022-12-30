new Promise((resolve, reject) =>{
    return resolve(1);
    //  后面的代码不会执行，调用resolve或reject后，Promise的使命就完成了
    //  后续的操作应该放在then里面处理，所以应该在resolve或者reject前return
    console.log(2)
})
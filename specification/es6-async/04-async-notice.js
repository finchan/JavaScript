async function myFunction() {
    try{
        await somethingThatReturnsAsPromise()
    } catch(err) {
        console.log(err)
    }
}
//  另一种写法
async function myFunction2() {
    await somethingThatReturnsAsPromise()
        .catch(err=>{
            console.log(err)
        })
}
function somethingThatReturnsAsPromise() {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject("Error")
        },0)
    })
}
//  Error
myFunction()
//  Error
myFunction2()
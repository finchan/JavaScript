let promise = new Promise(function(resolve, reject){
    console.log('Promise');
    resolve();
});
promise.then(()=>{
    console.log('Resolved');
});
console.log('Hi!');
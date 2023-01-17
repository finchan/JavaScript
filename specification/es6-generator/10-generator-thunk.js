// function f(m) {
//     return m*2
// }
let x = 1
let thunk = function() {
    return x+5
}
function f(thunk){
    return thunk()*2
}
console.log(f(thunk))


let fs = {
    readFile(fileName, callback) {
        callback(fileName)
    }
}
//  正常版本的readFile（多参数版本）
let fn = "FileName"
let cb = function(fileName) {
    console.log(fileName)
}
fs.readFile(fn, cb)
//  Thunk版本的readFile（单参数版本）
let Thunk = function(fileName){
    return function(callback) {
        return fs.readFile(fileName, callback)
    }
}
let readFileThunk = Thunk(fn)
readFileThunk(cb)

//  ES5
let ThunkES5 = function(fn) {
    return function() {
        let args = Array.prototype.slice.call(arguments)
        return function(callback){
            args.push(callback)
            return fn.apply(this, args)
        }
    }
}
let readFileThunkES5 = ThunkES5(fs.readFile)
readFileThunkES5(fn+" ES5 Thunk")(cb)

//  ES6
const ThunkES6 = function(fn) {
    return function(...args){
        return function(callback) {
            return fn.call(this, ...args, callback)
        }
    }
}
let readFileThunkES6 = ThunkES6(fs.readFile)
readFileThunkES6(fn+" ES6 Thunk")(cb)

function thunkify(fn){
    return function(){
        var args = new Array(arguments.length);
        var ctx = this;

        for(var i = 0; i < args.length; ++i) {
            args[i] = arguments[i];
        }

        return function(done){
            var called;

            args.push(function(){
                if (called) return;
                called = true;
                done.apply(null, arguments);
            });

            try {
                fn.apply(ctx, args);
            } catch (err) {
                done(err);
            }
        }
    }
}

let fs1 = require('fs')

let read = thunkify(fs1.readFile)
read('10-generator-thunk.js')(function(err, str){
    console.log('AAA')
})
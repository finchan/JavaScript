let log = console.log
let myObject = {
    foo: 1,
    bar: 2,
    get barz() {
        return this.foo + this.bar
    }
}
log(Reflect.get(myObject, 'foo'))   //1
log(Reflect.get(myObject, 'barz'))  //3

let myReceiverObject = {
    foo: 4,
    bar: 4,
};
log(Reflect.get(myObject, 'barz', myReceiverObject)) // 8
let log = console.log
let validator = {
    set: function(obj, prop, value) {
        if(prop === 'age') {
            if(!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer')
            }
            if(value>2000) {
                throw new RangeError("The age seems invalid")
            }
        }
        //  对于满足条件的age属性以及其他属性，直接保存
        obj[prop] = value
    }
}
let person = new Proxy({}, validator)
try{
    person.age = 100;
    log(person.age)
    person.age = 'young'
    person.age = 300
} catch(e) {
    log(e)
}
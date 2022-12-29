Object.prototype.extends = function() {
    var i=0,
        len = arguments.length,
        arg;
    for(;i<len; i++) {
        arg = arguments[i];
        for(var property in arg) {
            this[property] = arg[property];
        }
    }
}

var obj1 = {
    name: 'OBJECT1'
};
var obj2 = {
    age: 25
};
var obj3 = {
    sayHello: function() {
        return "Hello";
    }
};

var otherBook = {};
otherBook.extends(obj1, obj2, obj3);
console.log(otherBook);
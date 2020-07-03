var extend = function() {
    var i = 1,
        len = arguments.length,
        target = arguments[0],
        arg; //缓存参数对象
    for(;i<len;i++) {
        arg = arguments[i];
        for(var property in arg) {
            target[property] = arg[property];
        }
    }
    return target;    
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
var newObj = extend({}, obj1, obj2, obj3);
console.log(newObj);


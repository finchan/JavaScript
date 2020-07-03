Function.prototype.addMethod = function(name, fn) {
    this[name] = fn;
    return this;
};

var methods = function(){};

methods.addMethod('checkName', function() {
    console.log("Check Name");
    return this;
}).addMethod('checkEmail', function(){
    console.log('Check Email');
    return this;
});

methods.checkName().checkEmail();
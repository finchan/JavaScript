/******************************************************
 * This sample is very difficult but very important!!!
******************************************************/
Function.prototype.addMethod = function(name, fn) {
    this.prototype[name] = fn;
    return this;
}

var Methods = function() {};

Methods.addMethod('checkName', function(){
    console.log('Check Name');
    return this;
}).addMethod('checkEmail', function() {
    console.log('Check Email');
    return this;
})

var method = new Methods();
method.checkName().checkEmail();


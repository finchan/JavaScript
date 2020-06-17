Function.prototype.addMethod = function(name, fn) {
    this[name] = fn;
}

var method = function() {};
method.addMethod("checkName", function() {
    console.log("check Name");
});
method.checkName();

var method2 = new Function();
method2.addMethod("checkEmail", function() {
    console.log("check Email")
});
method2.checkEmail();
/**************************************************
 * Build-in Object  - Function, Array, Object, etc...
 **************************************************/
Function.prototype.checkEmail = function() {
    console.log("build-in object enhancement");
}

Function.prototype.checkName = function() {
    console.log("BUILD-IN OBJECT ENHANCEMENT");
}

var f = function(){};
f.checkEmail();
f.checkName();

var f2 = new Function();
f2.checkEmail();
f2.checkName();
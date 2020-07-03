var CheckObject = function() {};
CheckObject.prototype.checkName = function() {
    console.log("Check Name");
};
CheckObject.prototype.checkEmail = function() {};
CheckObject.prototype.checkPassword = function() {};

var a = new CheckObject();
a.checkName();
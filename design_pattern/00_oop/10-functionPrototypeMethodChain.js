var CheckObject = function() {};
CheckObject.prototype = {
    checkName: function() {
        console.log("Check Name");
        return this;
    },
    checkEmail: function() {
        console.log("Check Email");
        return this;
    },
    checkPassword: function() {
        console.log("Check Password");
        return this;
    }
};

var checkObject  = new CheckObject();
checkObject.checkName().checkEmail().checkPassword();
var CheckObject = function() {
    return {
        checkName: function() {},
        checkEmail: function() {
            console.log("Check Email");
        },
        checkPassword: function() {}
    }
}

var a = CheckObject();
a.checkEmail();
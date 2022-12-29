var CheckObject = {
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

CheckObject.checkName().checkEmail().checkPassword();
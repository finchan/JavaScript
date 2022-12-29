var PopFactory = function(type, name) {
    switch(type) {
        case 'alert':
            return new LoginAlert(name);
        case 'confirm':
            return new LoginConfirm(name);
        case 'prompt':
            return new LoginPrompt(name);
    }
}

var LoginAlert = function(text) {
    this.content = text;
}
LoginAlert.prototype.show = function() {
    console.log(this.content);
}

var LoginConfirm = function(text) {
    this.content = text;
}
LoginConfirm.prototype.show = function() {
    console.log(this.content);
}

var LoginPrompt = function(text) {
    this.content = text;
}
LoginPrompt.prototype.show = function() {
    console.log(this.content);
}

var loginConfirm = PopFactory('confirm', '注册新用户吗');
loginConfirm.show();

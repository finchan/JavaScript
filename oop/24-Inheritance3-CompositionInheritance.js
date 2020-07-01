////////////////////////////////////////////////////////////////////////
/*
                            继承实现（三）组合继承
*/
////////////////////////////////////////////////////////////////////////
function SuperClass(name) {
    this.name = name;
    this.books = ['html', 'css', 'JavaScript'];
}
SuperClass.prototype.getName = function() {
    console.log(this.name);
}

function SubClass(name) {
    SuperClass.call(this, name);
    this.time = time;
}
SubClass.prototype = new SuperClass();
SubClass.prototype.getTime = function() {
    console.log(this.time);
}
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

function SubClass(name, time) {
    //1 - 构造函数继承
    SuperClass.call(this, name);
    this.time = time;
}
//2 原型继承
SubClass.prototype = new SuperClass();
SubClass.prototype.getTime = function() {
    console.log(this.time);
}

var instance1 = new SubClass("JS Book", 2014);
instance1.books.push("Design Pattern");
console.log(instance1.books);
instance1.getName();
instance1.getTime();

var instance2 = new SubClass("JS Book2", 2015);
instance2.books.push("Design Pattern2");
console.log(instance2.books);
instance2.getName();
instance2.getTime();
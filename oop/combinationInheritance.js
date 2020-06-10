function SuperClass(name) {
    this.books = ['JavaScript', 'html', 'css'];
    this.name = name;
}

SuperClass.prototype.getName = function() {
    console.log(this.name);
}

function SubClass(name, time) {
    SuperClass.call(this, name);
    this.time = time;
}

SubClass.prototype = new SuperClass();
SubClass.prototype.getTime = function () {
    console.log(this.time);
}

var instance1 = new SubClass("JS book", 2014);
instance1.books.push('Design Pattern');
console.log(instance1.books);
instance1.getName();
instance1.getTime();

var instance2 = new SubClass("Test", 2020);
instance2.books.push("Test Array");
console.log(instance2.books);
instance2.getName();
instance2.getTime();
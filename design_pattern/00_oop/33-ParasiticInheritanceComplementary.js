function inheritObject(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

var SuperClass = function(name) {
    this.name = name;
};
SuperClass.prototype.showName = function() {
    console.log(this.name);
}

var SubClass = function(age, name) {
    this.age = age;
    SuperClass.call(this, name);
};


var p = inheritObject(SuperClass.prototype);
p.constructor = SubClass;
SubClass.prototype = p;
SubClass.prototype.showAge = function() {
    console.log(this.age);
}
var subClass = new SubClass(37, "Name");
subClass.showName();
subClass.showAge();

////////////////////////////////////////////////////////////////////////
/*
                            继承实现（六）寄生组合式继承
*/
////////////////////////////////////////////////////////////////////////
function inheritObject(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function inheritPrototype(subClass, superClass) {
    //复制一份父类的原型副本保存在变量中
    var p = inheritObject(superClass.prototype);
    //为该原型增加constructor属性，并使其指向子类
    p.constructor = subClass;
    //将子类原型指向复制的父类原型
    subClass.prototype = p;
    //以上三个步骤完成了子类复制父类原型的功能
}

function SuperClass(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperClass.prototype.getName = function() {
    console.log(this.name);
}

function SubClass(name, time) {
    //此处为复制父类属性在子类实例中调用（拷贝）
    //及每个实例都深层复制一份父类的实例——不区分是否是引用类型
    SuperClass.call(this, name);
    this.time = time;
}
inheritPrototype(SubClass, SuperClass);
//子类如果需要增加新的原型属性/方法只能通过prototype.xxx来实现，否则会覆盖它继承的原型
SubClass.prototype.getTime = function() {
    console.log(this.time);
}

var instance1 = new SubClass("JS Book", 2014);
var instance2 = new SubClass('CSS Book', 2015);

instance1.colors.push("black");
console.log(instance1.colors);
console.log(instance2.colors);
instance1.getTime();
instance2.getTime();
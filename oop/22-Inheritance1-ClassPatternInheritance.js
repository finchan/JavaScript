////////////////////////////////////////////////////////////////////////
/*
                            继承实现（一）类式继承
*/
////////////////////////////////////////////////////////////////////////
//声明父类
function SuperClass() {
    this.superValue = true;
}
//为父类添加共有方法
SuperClass.prototype.getSuperValue = function() {
    return this.superValue;
}
//声明子类
function SubClass() {
    this.subValue = false;
}
//继承父类
//实例化一个父类的时候，新创建的对象复制了父类的构造函数内的属性与方法，
//并且将原型__proto__指向父类的原型对象，这样就复制了父类的原型对象上的属性和方法，
//这个新创建的对象可以直接访问到父类原型对象上的属性何方法，
//同时，也可以从父类构造函数中复制的属性和方法。
SubClass.prototype = new SuperClass();
SubClass.prototype.getSubValue = function() {
    return this.subValue;
}

//instanceof来检测某个对象是否是某个类的实例，或者说某个对象是否继承了某个类
//instanceof通过判断对象prototype链来确定这个对象是否是某个类的实例，而不关心对象与类的自身结构
var instance = new SubClass();
console.log(instance.getSuperValue());
console.log(instance.getSubValue());
console.log(instance instanceof SuperClass);
console.log(instance instanceof SubClass);
console.log(SubClass instanceof SuperClass);

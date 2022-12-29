////////////////////////////////////////////////////////////////////////
/*
                            继承实现（一）类式继承
*/
////////////////////////////////////////////////////////////////////////
//声明父类
function SuperClass() {
    this.superValue = true;
    //父类属性将被复制到子类中，对于父类中的引用类型，子类
    //仅是进行参考引用，也就是说一个子类实例对引用类型进行修改
    //会直接影响到其他子类数引用类型的数据。
    this.books = ['JavaScript', 'html', 'css'];
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
////////////////////////////////////////////////////////////////////////
/*
继承的实现通过对子类prototype进行new一个父类来实现
存在两个问题：
1. 对于引用类型子类非复制属性值，而是复制参考，所以存在相互影响的情况
2. 对于父类会被new出一个对象，进行prototype的传递，而实例化时无法对父类
进行构造函数初始化
*/
////////////////////////////////////////////////////////////////////////
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
//SubClass.prototype继承了SuperClass
console.log(SubClass.prototype instanceof SuperClass);
console.log(SubClass.prototype instanceof Object);

var instance1 = new SubClass();
var instance2 = new SubClass();
instance1.superValue = "ABC";
instance1.books.push("Add More");
console.log(instance1.superValue);
console.log(instance1.books);
console.log(instance2.superValue);
console.log(instance2.books);
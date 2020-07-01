////////////////////////////////////////////////////////////////////////
/*
                            继承实现（二）构造函数继承
*/
////////////////////////////////////////////////////////////////////////
function SuperClass(id) {
    this.books = ['JavaScript', 'html', 'css'];
    this.id = id;
}

SuperClass.prototype.showBooks = function() {
    console.log(this.books);
}

////////////////////////////////////////////////////////////////////////
/*
由于call方法可以更改函数作用环境，在子类中对父类调用这个方法
是将子类中的变量在父类中执行一遍，由于父类中是给this绑定属性的，
因此子类自然也就继承了父类的共有属性。
这种继承方法没有涉及原型prototype，所以父类的原型方法自然不会
被子类继承。
*/
////////////////////////////////////////////////////////////////////////
function SubClass(id) {
    SuperClass.call(this, id);
}

var instance1 = new SubClass(10);
var instance2 = new SubClass(11);

instance1.books.push("Design Pattern");

console.log(instance1.books);
console.log(instance1.id);
console.log(instance2.books);
console.log(instance2.id);
instance1.showBooks(); //TypeError
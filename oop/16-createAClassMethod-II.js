/***********************************************************
 * 创建类有两个方法：
 * 方法二：通过类的原型上添加属性和方法，一种是一一为
 * 原型赋值，一种是将一个对象赋值给类的原型对象，但
 * 两者不能混用，混用后后者会直接覆盖前者，会报错！
 * 直接为prototype赋值一个对象会修改prototype的模型！！
 * 原本的prototype是自动创建一个constructor属性的，
 * 这样的赋值会造成constructor不会在prototype直接创建。
 * 不能够直接使用这个类，需要使用new来实例化新的对象。
***********************************************************/
var Book = function(){};
//第一种方式
Book.prototype.display = function() {
    console.log("display function");
}
// 第二种方式
Book.prototype = {
    display2: function() {
        console.log("display 2");
    },
    otherFunction: function() {
        console.log("other function");
    }
}

//对象的创建在原型定义后new操作
//不能在prototype赋值期间new操作
//否则无法识别prototype定义的属性或者方法
var book = new Book();
//book.display(); //TypeError: book.display is not a function
//此时Book的prototype指向Object{display2, otherFunction}
//而之前的定义prototype.display被擦除。
book.display2();
// book.otherFunction();
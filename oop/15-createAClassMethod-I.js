/***********************************************************
 * 创建类有两个方法：
 * 方法一：在函数内部通过this（函数内部自带的一个变量
 *              用于指定当前这个对象）变量添加属性或者方法
 *              来实现对类添加属性或者方法。
 * 不能够直接使用这个类，需要使用new来实例化新的对象
***********************************************************/
var Book = function(id, bookname, price, authors) {
    this.id = id;
    this.bookname = bookname;
    this.price = price;
    this.authors = authors
}

var book = new Book(1, "JavaScript Design Pattern", 50, ['a', 'b']);
console.log(book.authors);
book.authors.push('c');
console.log(book.authors);
var book1 = new Book(2, "JavaScript Design Pattern 2", 60, ['a', 'b', 'd']);
console.log(book1.authors);
console.log(book.authors);

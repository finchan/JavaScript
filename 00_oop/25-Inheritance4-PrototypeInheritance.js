////////////////////////////////////////////////////////////////////////
/*
                            继承实现（四）原型式继承
*/
////////////////////////////////////////////////////////////////////////
//原型式继承
function inheritObject(o) {
    //声明一个过渡函数的对象
    function F() {}
    //将prototype指向一个对象
    F.prototype = o;
    return new F();
    //返回的这个对象会修改o的参考对象
}

var book = {
    name: "JS Book",
    alikeBook: ['css book', 'html book']
};

var newBook = inheritObject(book);
newBook.name = 'ajax book';
newBook.alikeBook.push("xml book");

var otherBook = inheritObject(book);
otherBook.name = "flash book";
otherBook.alikeBook.push('as book');

console.log(book.name);
console.log(book.alikeBook);

console.log(newBook.name);
console.log(newBook.alikeBook);

console.log(otherBook.name);
console.log(otherBook.alikeBook);
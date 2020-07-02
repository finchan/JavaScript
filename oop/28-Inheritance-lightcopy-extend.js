////////////////////////////////////////////////////////////////////////
/*
                            继承实现（七）浅复制
*/
////////////////////////////////////////////////////////////////////////
var extend = function(target, source) {
    for(var property in source) {
        //这种方式引用类型只是指向作用，无法完全复制引用类型，所以是浅复制
        target[property] = source[property];
    }
    return target;
}

var book = {
    name: 'JavaScript Design Pattern',
    alike: ['css', 'html', 'JavaScript']
}
var anotherBook = {
    color: 'blue'
}
extend(anotherBook, book);
console.log(anotherBook.name);
console.log(anotherBook.alike);

anotherBook.alike.push('Ajax');
anotherBook.name = 'Design Pattern';
console.log(anotherBook.name);
console.log(anotherBook.alike);
console.log(book.name);
console.log(book.alike);



////////////////////////////////////////////////////////////////////////
/*
                            继承实现（五）寄生式继承
*/
////////////////////////////////////////////////////////////////////////
function inheritObject(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

var book = {
    name: "JS Book",
    alikeBook: ['css book', 'html book']
};

function createBook(obj) {
    //这里是否new都可以的，不用也没有问题
    var o =  new inheritObject(obj);
    //这里便是寄生，就是对于原型继承的二次封装
    o.getName = function() {
        //name是o的原型继承的，访问这里只能通过o.name来访问
        console.log(o.name);
    }
    return o;
}

var book = createBook(book);
book.getName();
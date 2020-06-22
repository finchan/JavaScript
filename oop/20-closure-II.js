var Book = (function() {
    var _bookNum = 0;
    function _checkBook() {
        //Here, this scope is LOCAL - not the Book instance
        //So, the following code won't always be performed.
        // if(this.id ==1) {
        //     console.log("We have this book");
        // }
        if(_bookNum == 1) {
            console.log("We have this book");
        } else {
            console.log("We don't have it");
        }
    }
    function _checkBookEnhancement(obj) {
        if(obj.id == 1) {
            console.log("一种小技巧来访问闭包返回的类实例的值");
        }
    }
    function _book(newId, newName, newPrice) {
        this.init = function() {
            this.id = newId;
            this.name = newName;
            this.price = newPrice;
            //Update CLosure variable
            _bookNum = this.id;
        }
        this.getBook = function() {
            _checkBook();
            return "Id: " + this.id + "\tname: " + this.name + "\tprice: " + this.price;
        }
        this.init();
    }
    _book.prototype = {
        isJSBook: true, 
        display: function() {
            //TODO: access _checkBOok
            console.log(this.getBook(1));
        },
        //这种prototype方法是完全可以访问闭包变量的，因为它是定义在闭包之中
        //对比19-closure-I.js，例子19是不能访问闭包元素的，因为它的定义是在闭包之外单独使用prototype设置，无法访问闭包私有变量
        displayClosurePropertiesAndMethod: function() {
            _checkBook();
            console.log(_bookNum);
        },
        displayTricks: function() {
            _checkBookEnhancement(this);
        }
    }
    return _book;
})();

var book = new Book(1, "JSBOOK", 50);
book.display();
book.displayClosurePropertiesAndMethod();
book.displayTricks();

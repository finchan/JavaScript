var Book = (function() {
    //闭包内部私有变量 
    //对于返回类来说，这些闭包的私有变量/方法相当于全局变量！！！！
    var bookNum = 0;
    //闭包内部私有方法
    function checkBook(name) {
        console.log("闭包内部私有方法");
    }

    return function(newId, newName, newPrice) {
        //私有变量
        var name, price;
        //私有方法
        function checkId() {
            console.log("闭包构造类私有方法");
        }
        //Getter/Setter方法（这里我喜欢用的术语，事实上它们属于特权方法）
        this.setName = function(name) {
            this.name = name;
        };
        this.setPrice = function(price) {
            this.price = price;
        };
        this.getName = function() {
            return this.name;
        };
        this.getPrice = function() {
            return this.price;
        }
        this.getId = function() {
            return this.Id;
        }
        //公有属性
        this.Id = newId;
        //公有方法
        this.display = function() {
            console.log( "Id: " + this.getId() + "\tName: " + this.getName() + "\tPrice: " + this.getPrice());
        }
        //其它逻辑
        name = newName;
        if(name.length < 3)
            throw new Error('书名太短');
        bookNum++;
        console.log("bookNum: " +bookNum );
        if (bookNum == 1){
            console.log("闭包内部返回类访问外部私有变量");
        }
            
        //构造器
        this.setName(newName);
        this.setPrice(newPrice);
    };
})();

Book.prototype = {
    isJSBook: true,
    prototypeDisplay: function() {
        //prototype这种方式无法访问闭包私有变量及方法
        //console.log("!!!无法访问闭包私有变量bookNum: " + bookNum);
        console.log( "Prototype - Method - Display - Id: " + this.getId() + "\tName: " + this.getName() + "\tPrice: " + this.getPrice());
    }
};
//这里只有在new对象时才会产生闭包
var book = new Book(1, "TEST", 50);
book.display();
book.prototypeDisplay();
var book2 = new Book(2, "TEST2", 100);

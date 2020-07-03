var Book = function(id, name, price) {
    //私有属性
    var _num = 1;
    
    //私有方法
    function _checkNumber() {
        if(_num < 0) {
            console.log("Negative Number");
            return -1;
        } else {
            console.log("Positive Number");
            return 0;
        }
    }

    //对象公有属性 - 最好不要这样做，而是使用构造器来处理，这样更优雅
    this.id = id;
    this.name = name;
    this.price = price;

    //特权方法 - 可以访问类属性及方法或私有属性及方法
    //可以单独抽出来作为getter和setter方法，完全模拟面向对象的模式
    //特权方法属于公有方法，公有方法的定义只是访问类属性及方法
    this.getId = function() {
        return this.id;
    }

    this.getName = function() {
        return this.name;
    }

    this.getPrice = function() {
        return this.price;
    }

    this.setId = function(id) {
        this.id = id;
    }

    this.setName = function(name) {
        this.name = name;
    }

    this.setPrice = function(price) {
        this.price = price;
    }

    this.checkPrivateProperty = function() {
        return _checkNumber();
    }

    //对象公有方法
    //类的创建如果通过this或者prototype两种方法同时实现，那么这些属性及方法均会成为这个类的属性和方法
    //也就是说this定义的方法可以使用后面prototype里面定义的属性和方法，反方向操作也是成立的。
    this.copy = function() {
        console.log("Id: " + this.getId() + "\tName: " + this.getName() + "\tPrice: " + this.getPrice());
        console.log("From prototype property: " + "isJSBook - " + this.isJSBook);
    }

    //构造器
    this.setId(id);
    this.setName(name);
    this.setPrice(price*2);
}

//类静态公有属性 - 注意！这里无法被类实例直接使用，如果book.isChinese, book.resetTime，这是undefined
Book.isChinese = true;
//类静态公有方法
Book.resetTime = function() {
    console.log("Class static method");
}
//另类公有属性及方法的实现
Book.prototype = {
    isJSBook: true,
    display: function() {
        console.log('isJSBook: ' + this.isJSBook);
        this.copy();
        Book.resetTime();
    }
}

var book = new Book(1, 'JavaScript Design Pattern', 50);
book.display();
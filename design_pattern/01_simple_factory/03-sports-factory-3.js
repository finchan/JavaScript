//工厂模式
function createBook(name, time, type) {
    var o = new Object();
    o.name = name;
    o.time = time;
    o.type = type;
    o.getName = function() {
        console.log(this.name);
    }
    return o;
}

var book1 = createBook('js book', 2014, 'js');
var book2 = createBook('css book',  2013, 'css');

book1.getName();
book2.getName();
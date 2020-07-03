var Book = function(title, time, type) {
    this.title = title;
    this.time = time;
    this.type = type;
}
//if you neglect  "new", this in Browser means - window; in node js, means - Global
var book = Book('Javascript', '2014', 'js');
console.log(book);

var BookSafe = function(title, time, type) {
    if(this instanceof BookSafe) {
        this.title = title;
        this.time = time;
        this.type = type;
    } else {
        return new BookSafe(title, time, type);
    }
}

var bookSafe = BookSafe('Javascript', '2014', 'js');
console.log(bookSafe);
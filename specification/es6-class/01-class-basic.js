let log = console.log
class Point{
    constructor(x,y) {
        this.x = x
        this.y = y
    }
    toString() {
        return '(' + this.x + ', ' + this.y +')'
    }
}
log(typeof Point)   //  function
log(Point === Point.prototype.constructor)  //  true

class B{}
let b = new B()
log(b.constructor == B.prototype.constructor)   //  true
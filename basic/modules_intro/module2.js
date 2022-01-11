var module2 = new Object({
    _count: 0,
    m1: function() {
        console.log(this._count);
    },
    m2: function() {
        console.log(this._count);
    }
});
module2.m1();
module2._count = 5;
module2.m2();
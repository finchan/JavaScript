var module3 = (function(){
    var _count = 3;
    var m1 = function() {
        console.log("IIFE");
        console.log(_count);
        _count = 5;
    };
    var m2 = function() {
        console.log(_count);
    };
    return {
        m1: m1,
        m2: m2
    }    
})();
module3.m1();   //3
console.log(module3._count);    //undefined
module3.m2();   //5
var module4 = (function(){
    var statusNumber = 1;
    var m1 = function() {
        console.log(statusNumber);
        return statusNumber;
    };
    return {
        m1: m1
    };
})();
module4 = (function(mod){
    mod.m2 = function() {
        //console.log(statusNumber); //Uncaught ReferenceError: statusNumber is not defined for m2
        console.log(mod.m1());
    }
    return mod;
})(module4);
module4.m1();
module4.m2();
module4.m1();
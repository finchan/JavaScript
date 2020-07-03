////////////////////////////////////////////////////////////////////////
/*
                            多态 - 通过传递参数来实现多态
                            1. 函数式
*/
////////////////////////////////////////////////////////////////////////
function add() {
    var arg = arguments,
        len = arg.length;
    switch(len){
        case 0:
            return 10;
        case 1:
            return 10 + arg[0];
        case 2: 
            return arg[0] + arg[1];
    }
}

console.log(add());
console.log(add(5));
console.log(add(5, 6));
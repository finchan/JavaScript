////////////////////////////////////////////////////////////////////////
/*
       对象取值的操作—— && ，||
       对象采用最外层对象，一层一层用&&连接，之间会忽略undefined, "", null，
       最后用||给出默认值！！！！这个操作要学会。
*/
////////////////////////////////////////////////////////////////////////
var param = {
    skill: 'aaa'
}
console.log(param&&param.skill||'secret');  //aaa

var param2 = {};
console.log(param2&&param2.skill||'secret');    //secret
console.log(param2||param2.skill||'secret');    //Object{}

var param3;     //undefined
console.log(param3);        //ReferenceError
console.log(param3&&param3.skill || 'secret');      //secret
console.log(param3||param3.skill || 'secret');           //TypeError - cannot circuit!!!!
console.log(undefined&&undefined.skill||'secret');      //secret
console.log(undefined||undefined.skill||'secret');      //TypeError - cannot circuit!!!!

var param4 = null;

console.log(param4&&param4.skill||'secret');      //secret
console.log(param4||param4.skill||'secret');      //TypeError - cannot circuit!!!!
var param5 = '';
console.log(param5&&param5.skill||'secret');      //secret
console.log(param5||param5.skill||'secret');      //secret

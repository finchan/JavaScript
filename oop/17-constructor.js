/***********************************************************
 * constructor -
 * 1. 未为prototype设置一个对象时 
 * 2. 为prototype设置一个对象时 prototype = {}
***********************************************************/
var Class1 = function(name) {
    this.name = name;
}
var class1 = new Class1("Test1");
console.log(class1.name);
//////////////////////////////////////////////////////////////////
/*
Class1: function(name) { … }
        prototype: Object {constructor: }
                constructor: function(name) { … }
                //如：new Class1.prototype.constructor("BBB").name
class1: Class1 {name: "Test1"}
        __proto__: Object {constructor: }               
                constructor: function(name) { … }
                //如：new class1.__proto__.constructor('AAA').name    
                //如：new class1.constructor('AAA').name
*/
//////////////////////////////////////////////////////////////////
var Class2 = function(){};
Class2.prototype.display = function() {
    console.log("display prototype function");
}
var class2 = new Class2();
class2.display();
//////////////////////////////////////////////////////////////////
/*
Class2: function(){ … }
        prototype: Object {display: , constructor: }
                constructor: function(){ … }
class2: Class2 {}
        __proto__ : Object {display: , constructor: }   
                constructor: function(){ … }            
*/
//////////////////////////////////////////////////////////////////
var Class3 = function(){};
Class3.prototype = {
    anotherFunction: function() {
        console.log("Another Function");
    }
}
var class3 = new Class3();
class3.anotherFunction();
//////////////////////////////////////////////////////////////////
/*
Class3: function(){ … }
        prototype: Object {anotherFunction: }
        //因为prototype被整体设置为一个对象，修改了原本的结构，constructor不存在了
class3: Class3 {}        
        __proto__: Object {anotherFunction: }
        //因为prototype被整体设置为一个对象，修改了原本的结构，constructor不存在了
*/
//////////////////////////////////////////////////////////////////
define(function(require, exports, module){
   var foo = require('foo');
   //Define this module as exporting a function
   return function() {
       foo.doSomething();
   } 
})
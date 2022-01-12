var math = require('./math');
math.add(2,3);

require(['math'], function(math){
    math.add(2,3);
})
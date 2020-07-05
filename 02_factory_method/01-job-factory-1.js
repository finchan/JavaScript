////////////////////////////////////////////////////////////////////////
/*
                            工厂方法模式
        工厂方法模式(Factory Method)，通过对产品类的抽象使其
        创建业务主要负责用于创建多产品的实例。           
        工厂方法模式本意是将实际创建对象工作推迟到子类当中。
        核心类就成了抽象类，在JavaScript中可以将工厂方法看作
        一个实例化对象工厂类。                 
*/
////////////////////////////////////////////////////////////////////////
var JobFactory = function(type, content) {
    if (this instanceof JobFactory) {
        //如下两行是工厂方法实现的灵魂
        var s = new this[type](content);
        return s;
    } else {
        return new Factory(type, content);
    }
}

//将产品类作为工厂方法类的属性
//注意这里使用的技巧——使用闭包立即执行，避免多处new操作，相当于对象的构造函数
JobFactory.prototype = {
    Java: function(content) {
        (function(content){
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.color = 'green';
            document.getElementById('container').appendChild(div);
        })(content);
    },
    JavaScript: function(content) {
        this.content = content;
        (function(content){
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.color = 'yellow';
            div.style.background = 'red';
            document.getElementById('container').appendChild(div);
        })(content);
    },
    UI: function(content) {
        this.content = content;
        (function(content){
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.border = '1px solid red';
            document.getElementById('container').appendChild(div);
        })(content);
    },
    php: function(content) {
        this.content = content;
        (function(content){
            var div = document.createElement('div');
            div.innerHTML = content;
            div.style.background = 'pink';
            document.getElementById('container').appendChild(div);
        })(content);
    }
}; 
var data = [
    {type: 'UI', content: 'UI 1'},
    {type: 'JavaScript', content: 'JavaScript 1'},
    {type: 'Java', content: 'Java 1'},
    {type: 'php', content: 'PHP 1'},
    {type: 'UI', content: 'UI 2'},
    {type: 'JavaScript', content: 'JavaScript 2'},
    {type: 'Java', content: 'Java 2'},
    {type: 'php', content: 'PHP 2'}
];
for(var i=0; i<data.length; i++) {
    new JobFactory(data[i].type, data[i].content);
}

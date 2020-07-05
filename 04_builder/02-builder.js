////////////////////////////////////////////////////////////////////////
/*
                    建造者模式(Builder)
*/
////////////////////////////////////////////////////////////////////////
var Human = function(param) {
    this.skill = param&&param.skill||'保密';
    this.hobby = param&&param.skill||'保密';
};

Human.prototype = {
    getSkill: function() {
        return this.skill;
    },
    getHobby: function() {
        return this.hobby;
    }
}

var Named = function(name) {
    var that = this;
    //构造器 - JS中习惯用闭包来做构造器
    (function(name, that) {
        that.wholeName = name;
        if(name.indexOf(' ')>-1) {
            that.firstName = name.slice(0, name.indexOf(' '));
            that.lastName = name.slice(name.indexOf(' ')+1);
        }
    })(name, that);
};

var Work = function(work) {
    var that = this;
    //构造器 - JS习惯使用闭包来做构造器
    (function(work, that) {
        switch(work){
            case 'code':
                that.work='工程师';
                that.workDescript = '每天沉醉于编程';
                break;
            case 'UI':
            case 'UE':
                that.work = '设计师';
                that.workDescript = '设计更似一种艺术';
                break;
            case 'teach':
                that.work = '教师';
                that.workDescript = '分享也是一种快乐';
                break;
            default:
                that.work = work;
                that.workDescript = '对不起，我们还不清楚您所选择的职位描述';
        }
    })(work, that);
};
Work.prototype.changeWork = function(work) {
    this.work = work;
};
Work.prototype.changeDescript = function(descript) {
    this.workDescript = descript;
}

//建造者——对上述类进行组合调用
var Person = function(name, work){
    //创建应聘者缓存对象
    var _person =  new Human();
    _person.name = new Named(name);
    _person.work = new Work(work);
    return _person;
};
//下面的方法也可以实现，跳过Human类
// var Person = function(name, work, param){
//     this.skill = param&&param.skill||'保密';
//     this.hobby = param&&param.skill||'保密';
//     this.name = new Named(name);
//     this.work = new Work(work);
// };


var person = new Person('Xiao Ming', 'code');
console.log(person.skill);
console.log(person.name.firstName);
console.log(person.work.work);
console.log(person.work.workDescript);
person.work.changeDescript('更改一下职位描述');
console.log(person.work.workDescript);
var person2 = new Person('Xiao Ming2', 'UI');
console.log(person.name.lastName);
console.log(person2.name.lastName);
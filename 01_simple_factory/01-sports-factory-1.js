////////////////////////////////////////////////////////////////////////
/*
                            简单工厂模式
        简单工厂模式(Simple Factory)，又叫静态工厂方法，
        由一个工厂对象决定创建某一种产品对象类的实例。                            
*/
////////////////////////////////////////////////////////////////////////
var Basketball = function() {
    this.intro = "篮球盛行于美国";
}
Basketball.prototype = {
    getMember: function() {
        console.log("每个队伍需要五名队员");
    },
    getBallSize: function() {
        console.log("篮球很大");
    }
}

var Football = function() {
    this.intro = '足球在世界范围内流行';
}
Football.prototype = {
    getMember: function() {
        console.log("每个队伍需要11名队员");
    },
    getBallSize: function() {
        console.log("足球很大");
    }
}

var Tennis = function() {
    this.intro = "每年有很多网球系列赛";
}
Tennis.prototype = {
    getMember: function() {
        console.log("每个队伍需要1名队员");
    },
    getBallSize: function() {
        console.log("网球很小");
    }
}

//运动工厂
var SportsFactory = function(name) {
    switch(name){
        case 'NBA' :
            return new Basketball();
        case 'wordCup':
            return new Football();
        case 'FrenchOpen' :
            return new Tennis();
    }
}

var football = SportsFactory('wordCup');
console.log(football);
console.log(football.intro);
football.getMember();
football.getBallSize();
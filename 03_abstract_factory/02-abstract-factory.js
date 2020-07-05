////////////////////////////////////////////////////////////////////////
/*
                            抽象工厂模式
        抽象工厂模式（Abastract Factory）：通过对类的工厂抽象
        使其业务用于对产品类簇的创建，而不负责创建某一类产品的实例。                 
*/
////////////////////////////////////////////////////////////////////////
var VehicleFactory = function(subType, superType) {
    if(typeof VehicleFactory[superType]=== 'function') {
        //缓存类
        function F() {};
        //继承父类属性和方法
        F.prototype =new VehicleFactory[superType]();
        //将子类constructor指向子类
        subType.constructor = subType;
        //子类原型继承父类
        subType.prototype = new F();
    } else {
        throw new Error('未创建该抽象类');
    }
};
//小汽车抽象类
VehicleFactory.Car = function() {
    this.type = 'car';
};
VehicleFactory.Car.prototype = {
    getPrice: function() {
        return new Error('抽象方法不能调用');
    },
    getSpeed: function() {
        return new Error('抽象方法不能调用');
    }
};
//公交汽车抽象类
VehicleFactory.Bus = function() {
    this.type = 'bus';
};
VehicleFactory.Bus.prototype = {
    getPrice: function() {
        return new Error('抽象方法不能调用');
    },
    getPassengerNum: function() {
        return new Error('抽象方法不能调用');
    }
};
//货车抽象类
VehicleFactory.Truck = function() {
    this.type = 'truck';
};
VehicleFactory.Truck.prototype = {
    getPrice: function() {
        return new Error('抽象方法不能调用');
    },
    getTrainload: function() {
        return new Error('抽象方法不能调用');
    }
};

//若干产品子类，让子类继承相应的产品簇抽象类
var BMW = function(price, speed) {
    this.price = price;
    this.speed = speed;
};
//抽象工厂实现对Car抽象类的继承
VehicleFactory(BMW, 'Car');
BMW.prototype.getPrice = function() {
    return this.price;
};
BMW.prototype.getSpeed = function(){
    return this.speed;
};
var Lamborghini = function(price, speed) {
    this.price = price;
    this.speed = speed;
};
VehicleFactory(Lamborghini, 'Car');
Lamborghini.prototype.getPrice = function() {
    return this.price;
};
Lamborghini.prototype.getSpeed = function(){
    return this.speed;
};
var YUTONG = function(price, passenger) {
    this.price = price;
    this.passenger = passenger;
};
VehicleFactory(YUTONG, 'Bus');
YUTONG.prototype.getPrice = function() {
    return this.price;
};
YUTONG.prototype.getPassengerNum= function() {
    return this.passenger;
};
var BenzTruck = function(price, trainLoad) {
    this.price = price;
    this.trainLoad = trainLoad;
};
VehicleFactory(BenzTruck, 'Truck');
BenzTruck.prototype.getPrice = function() {
    return this.price;
};
BenzTruck.prototype.getTrainload = function() {
    return this.trainLoad;
};

var truck = new BenzTruck(100000, 1000);
console.log(truck.type);
console.log(truck.getPrice());
console.log(truck.getTrainload());
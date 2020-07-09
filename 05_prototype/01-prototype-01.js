////////////////////////////////////////////////////////////////////////
/*
                    原型模式(Prototype)
    原型模式：用原型实例指向创建对象的类，使用于创建新的对象的
    共享原型对象的属性以及方法。
    这种方法的提出——类继承都需要创建一次父类SuperClass.call(this, param)；
    假如说父类构造函数中创建时存在很多耗时较长的逻辑，或者说每次初始化都要做一些
    重复性的东西，这样的性能消耗很大。为了提高性能，我们需要提供一种共享机制，
    这样每当创建基类时，对于每次创建的一些简单而又差异化的属性我们可以放在构造函数中，
    而我们将一些消耗资源比较大的方法放在基类的原型中，这样就会避免很多不必要的消耗，
    这就是原型模式的一个雏形。
    原型模式就是将可复用的、可共享的 、耗时大的从基类中提出来然后放在其原型中，
    然后子类通过（（（组合继承或者寄生组合继承）））而将方法和属性继承下来，
    对于子类中那些需要重写的方法进行重写，这样子类创建的对象既具有子类的属性和方法
    也共享了基类的原型方法。
    ！！！原型对象是一个共享的对象，那么不论是父类的实例对象或者子类的继承，
    都是对它的一个指向引用，所以原型对象才会被共享。
    ！！！在任何时候都可以对基类或者子类进行方法的拓展，而且所有被实例化的对象或者
    类都能获取这些方法，实现了功能拓展的自由性。
*/
////////////////////////////////////////////////////////////////////////
var LoopImages = function(imgArr, container) {
    this.imageArray = imgArr;
    this.container = container;
};

LoopImages.prototype = {
    createImage: function() {
        console.log('LoopImages createImage function');
    },
    changeImage: function() {
        console.log('LoopImage changeImage function');
    }
};

var SlideLoopImg = function(imgArr, container) {
    //子类继承父类属性
    LoopImages.call(this, imgArr, container);
}
//子类继承父类prototype的方法——更确切的说是子类共享父类prototype方法
SlideLoopImg.prototype = new LoopImages();
//重写继承方法
SlideLoopImg.prototype.changeImage = function() {
    console.log('SLideLoopImg change Image funciton');
};

var  FadeLoopImg = function(imgArr, container, arrow) {
    LoopImages.call(this, imgArr, container);
    this.arrow = arrow;
};
FadeLoopImg.prototype = new LoopImages();
FadeLoopImg.prototype.changeImage = function() {
    console.log('FadeLoopImg changeImage function');
}

var fadeImg = new FadeLoopImg([
    '01.jpg',
    '02.jpg',
    '03.jpg',
    '04.jpg'
], 'slide', [
    'left.jpg',
    'right.jpg'
])
console.log(fadeImg);
fadeImg.changeImage();

LoopImages.prototype.getImageLength = function() {
    return this.imageArray.length;
}
FadeLoopImg.prototype.getContainer = function() {
    return this.container;
}
console.log(fadeImg.getImageLength());
console.log(fadeImg.getContainer());
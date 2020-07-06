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

console.log(fadeImg)
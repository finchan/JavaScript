function SuperClass() {
    this.superValue = true;
    this.arrays = [1, 2, 3];
    normalValue = "NormalValue";
    normalArrays = [4, 5, 6];
}

SuperClass.prototype.getSuperValue = function() {
    return this.superValue;
};

function SubClass() {
    this.subValue = false;
}

SubClass.prototype = new SuperClass();
SubClass.prototype.getSubValue = function() {
    return this.subValue;
};

var instance = new SubClass();
// console.log(instance.getSuperValue());
// console.log(instance.getSubValue());
// console.log(instance.normalArrays);

instance.arrays.push(0);
instance.superValue = "Instance 1";

var instance2 = new SubClass();
instance2.superValue = "Instance 2";
// console.log(instance2.getSuperValue());
console.log(instance2.arrays);
console.log(instance2.getSubValue());
// console.log(instance.getSuperValue());

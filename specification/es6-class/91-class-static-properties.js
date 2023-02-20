class MyClass{
    static myStaticProp = 42
    constructor() {
        console.log(MyClass.myStaticProp)
    }
}
MyClass.oldStaticProp = 21

let class1 = new MyClass()
console.log(MyClass.oldStaticProp)
console.log(MyClass.myStaticProp)
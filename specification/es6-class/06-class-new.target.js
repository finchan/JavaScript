function Person(name) {
    if(new.target !== undefined) {
        this.name = name
    } else {
        throw new Error('必须使用new命令生成示例')
    }
}
let person = new Person("K")
let person2 = Person.call(person, 'M')

function Person2(name) {
    if(new.target === Person) {
        this.name = name
    } else {
        throw new Error('必须使用new命令生成示例')
    }
}
let person3 = new Person("K")
let person4 = Person.call(person, 'M')

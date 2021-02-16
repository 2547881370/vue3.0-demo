
class Animal {
    name: string
    constructor(name) {
        this.name = name
    }
    // public private protected,分别使用这三个属性,可以很清晰的发现这三种修饰符的区别
    run() {
        return `${this.name} is running`
    }
}

const snake = new Animal("lily")
console.log(snake.run())


// Dog直接继承Animal,Dog是Animal的子类
class Dog extends Animal {
    bark() {
        return `${this.name} is barking`
    }
}
const xiaobao = new Dog('xiaobao')
console.log(xiaobao.run())


// Cat继承了Animal , 且重写了constructor和run方法,在run中调取了父类的run方法
class Cat extends Animal {
    constructor(name) {
        super(name)
    }
    run() {
        return 'Meow ' + super.run()
    }
}

let cat = new Cat("cat")
console.log(cat.run())
// 类装饰器 属性装饰器 方法装饰器 参数装饰器

// 类装饰器
const getMoney = (money: number): ClassDecorator => (...args) => {
    args[0].prototype.money = money;
}


// 属性装饰器
const choose = (born: string): PropertyDecorator => (...args) => {
    console.log(args[0]) // class对象
    console.log(args[1]) // 属性名称
    args[0][args[1]] = born
}

// 方法装饰器
const disable: MethodDecorator = (...args) => {
    console.log(args[0]) // class对象
    console.log(args[1]) // 方法名称
    console.log(args[2]) // 函数对象

    // 修改性别
    args[0]["gender"] = 'man'

    // 禁止重写该方法
    args[2].writable = false
}


// 参数装饰器
const d: ParameterDecorator = (...args) => {
    console.log(args[0]) // class对象
    console.log(args[1]) // 所属的方法名称 move
    console.log(args[2]) // 参数位置 0
}

@getMoney(600)
class Player {
    public money: number
    public gender: string

    @choose("海角村")
    born: string

    @disable
    move(@d foot?: number) {
        console.log("玩家走了一步")
    }
}

const player = new Player()
console.log(`1. 该玩家拥有初始金币${player.money}`)
console.log(`2. 该玩家的初始出生地为${player.born}`)
console.log(`3. 该玩家的性别${player.gender}`)
player.move() //  玩家走了一步
player.move = () => {
    console.log("玩家在奔跑")
}
player.move() // 玩家走了一步
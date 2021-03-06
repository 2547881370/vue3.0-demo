// 直接定义枚举,默认下标从0开始
enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction.Down,'Direction.Down') // 1 'Direction.Down
console.log(Direction[0],'Direction[0]') // Up Direction[0]

// 定义枚举值,且自定义值.此时无下标
enum Direction1 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log(Direction1.Down,'Direction1.Down') // Up Direction[0]
console.log(Direction1[0],'Direction1[0]') // undefined 'Direction1[0]'
const value = 'Up'
if(value === Direction1.Up){
    console.log("Up")
}

// 定义常量枚举,常量枚举的好处在于性能上的提升,ts编译后的js没有太多无用的代码,上面两种定义枚举的方法都会被完全编译出来
const enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
const value1 = 'Up'
if(value1 === Direction2.Up){
    console.log("Up")
}
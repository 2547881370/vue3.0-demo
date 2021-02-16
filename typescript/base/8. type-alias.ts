function sum1 (x  : number , y : number)  : number {
    return x + y
}
let sum : (x  : number , y : number) => number = sum1
const result = sum(1,3)

// type 将上面的type抽取
type PlusType = (x  : number , y : number) => number
let sum2 : PlusType
const result1 = sum2(1,3)

// type 联合类型
type StrType = string | number
let result2 :StrType = '123'
let result3 :StrType = 12313

// type 字面量
const str : 'number' = 'number'
const number : 1 = 1
type Directions = 'Up' | 'Down' | 'Left' | 'Right'
let toWhere : Directions = 'Up'

// 交叉类型 可以对interface接口进行扩展
interface Iname {
    name : string
}
type IPerson = Iname & { age : number}
const person : IPerson = {
    name : '1',
    age : 123
}
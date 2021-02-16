// 无泛型的约束,定义一个函数,传入一个值返回一个值
function echo(args) {
    return args
}

// 这一行代码明显是有bug的
const result: string = echo(12312)

// 一个最基本的泛型
function echo1<T>(args: T): T {
    return args
}

const result1: string = echo1("123")
const result2 = echo1<string>("123")

// 泛型约束 - 给传入的值进行约束,符合特定的条件
function echoWithLength<T >(args: T[]): T[] {
    console.log(args.length)
    return args
}

const arrs = echoWithLength([1,2,3,4,5])

// 使用接口进行泛型约束 , 传入的参数中,必须要满足约束的条件即可
interface IwhitLength { 
    length : number
}
function echoWithLength1<T extends IwhitLength>(args: T) :T{
    console.log(args.length)
    return args
}
const arrs1 = echoWithLength1([1,2,3,4,5])
const arrs2 = echoWithLength1({length : 1})
const arrs3 = echoWithLength1({length : 1 , width : 3})
const arrs4 = echoWithLength1("str")
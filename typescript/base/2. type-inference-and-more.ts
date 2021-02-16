// type inference 类型推断
let str = 'str'

// union types 联合类型
let numberOrString : number | string

// 类型断言,因为number类型是没有length属性的,使用类型断言,实际是不会改变类型的属性,只是一个辅助作用
function getLength(input: number | string) : number{
    let str = input as string;
    if(str.length){
        return str.length
    }else{
        let number = input as number
        return number.toString().length 
    }
}

// 类型推断2 
function getLenght2(input : number | string) : number{
    if(typeof input === 'string'){
        return input.length
    }else{
        return input.toString().length
    }
}
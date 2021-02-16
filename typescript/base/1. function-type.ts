
const add = ( x : number , y : number , z? : number) : number => {
    if(typeof z === 'number'){
        return x + y + z
    }else{
        return x + y 
    }
}

let add1 : (x: number , y: number,z?: number) => number = add;


function add2( x : number , y : number , z? : number) : number {
    if(typeof z === 'number'){
        return x + y + z
    }else{
        return x + y 
    }
}

// 使用interface声明函数类型

interface ISum{
    ( x : number , y : number , z? : number) : number
}
let add3 : ISum = add
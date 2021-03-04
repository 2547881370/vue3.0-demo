interface TestData {
    _id: string
    name: string
}

export const testData: TestData[] = [
    {
        _id: "1",
        name: "a"
    },
    {
        _id: "2",
        name: "b"
    },
    {
        _id: "3",
        name: "c"
    },
]

/**
 * 将数组转换成哈希map的格式
 * @param arr 
 * {} as { [key: string]: T } , prev[current._id] ,ts会报错;报错的原因是{}中的key是any类型,current._id则是string类型,会造成解析报错,所以要强行断言
 */
export const arrToObj = <T extends { _id?: string }>(arr: Array<T>): { [key: string]: T } => {
    // prev 上一个的值
    // current 当前值
    return arr.reduce((prev, current) => {
        if (current._id) {
            prev[current._id] = current
        }
        return prev
    }, {} as { [key: string]: T })
}

/**
 * 将哈希map数据格式转换成数组格式
 * @param obj 
 */
export const arrToArr = <T>(obj: { [key: string]: T }): Array<T> => {
    return Object.keys(obj).map((key) => {
        return obj[key]
    })
}

const toObj = arrToObj<TestData>(testData)
console.log(toObj)
const toArr = arrToArr<TestData>(toObj)
console.log(toArr)
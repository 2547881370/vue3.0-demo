// 定义接口
interface Radio {
    switchRadio(trigger :  boolean) : void;
}
interface Battery {
    checkBattryStatus() : void;
}

interface RedioWithBattery extends Radio {
    checkBattryStatus() : void;
}


// 定义类 通过implements使用接口
class Car implements Radio {
    switchRadio(trigger :  boolean){

    }
}

// implements Radio , Battery  or  implements RedioWithBattery
class Cellphone implements Radio , Battery  {
    checkBattryStatus(): void {
        throw new Error("Method not implemented.");
    }
    switchRadio(trigger :  boolean){

    }
}
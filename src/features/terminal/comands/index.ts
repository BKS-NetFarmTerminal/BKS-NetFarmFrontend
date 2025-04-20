import {cd} from './cd'
import {Store} from "@/entities/store";
import {buy} from "./buy";
const comandList: Record<string, any> = {
    cd,
    buy
}
const commandDefinition = (value: string, store: Store, navigate: any) => {

    const [comand, ...atr] = value.trim().split(' ')
    console.log(comand)
    if (!Object.keys(comandList).includes(comand)) {
        console.log('нет такого')
        return
    }
    comandList[comand](atr, store, navigate)

}

export { commandDefinition }
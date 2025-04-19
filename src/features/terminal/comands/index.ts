import {cd} from './cd'
import {useStore} from "@/entities/store";
const comandList: Record<string, any> = {
    cd
}
const commandDefinition = (value: string) => {
    const {directories} = useStore()
    const valueArray = value.trim().split(' ')
    console.log(valueArray[0])
    if (!Object.keys(comandList).includes(valueArray[0])) {
        console.log('нет такого')
        return
    }
    comandList[valueArray[0]]('sdsd')
    console.log(directories)
}

export { commandDefinition }
import {Store} from '@/entities/store'

export const cd = (atr: string[], store: Store, navigate: any) => {

    const allOp = atr[0].split('/');
    let startDir = store.currentDirectory
    allOp.forEach((op) => {
        startDir = transition(startDir,op, store)
    })
    store.updateCurrentDirectories(startDir)
    if (startDir == 'root') {
        navigate('/');
    } else {
        navigate(startDir)
    }

}

const transition = (startDir: string, op: string, store: Store) => {
    console.log({ startDir, op})
    if (op == '.' || op == '') {
        console.log('.')
        return startDir
    }
    if (op == '..') {
        console.log('..')
        const dir: string = store.directories.find((d) => d.name === startDir)?.parent || 'root'
        return dir
    }
    const dir = store.directories.find((d) => d.parent === startDir && d.name === op)
    if (!dir) {
        console.log('нет репы')
        return startDir
    }
    if (dir?.parent == startDir) {
        console.log('все норм')
        return dir?.name
    }
    return startDir
}
import { create } from 'zustand'

export interface Store {
    token: string,
    directories: {name: string, parent: string}[],
    currentDirectory: string,
    updateCurrentDirectories: (newCurrentDirectory: string) => void,
    fullPath: (fullPath?: string[], now?: string) => string[],
    commandStory: string[],
    addCommandStory: (newCommandStory: string) => void,
    walletToken: string,
    updateWalletToken: (newWalletToken: string) => void,
    buffer: {
        title: string,
        count: number,
    }[]
}

export const useStore = create<Store>((set, get) => ({
    token: '',
    directories: [
        { name: 'stable', parent: 'root'},
        { name: 'shop', parent: 'root'},
        { name: 'storage', parent: 'root'},
        { name: 'field', parent: 'root'},
        { name: 'pasture', parent: 'root'},
    ],
    currentDirectory: 'root',
    updateCurrentDirectories: (newCurrentDirectory) => set({ currentDirectory: newCurrentDirectory }),
    fullPath: (fullPath=[], now= get().currentDirectory) => {
        fullPath.unshift(now)
        if (now === 'root') {
            return fullPath
        } else {
            const newPath = get().directories.find((e) => e.name === now)?.parent
                return get().fullPath(fullPath, newPath || 'root')
        }

    },
    commandStory: [],
    addCommandStory: (newCommandStory: string) => {
        set((state: Store) => ({...state, commandStory: [...state.commandStory, newCommandStory]}))
    },
    walletToken: '',
    updateWalletToken: (newWalletToken: string) => set({ walletToken: newWalletToken }),
    buffer: [],
    updateBuffer: (newBuffer: {
        title: string,
        count: number,
    }[]) => set({ buffer: newBuffer }),
    tok: '',
    upTok: (nt) => set({ tok: nt }),
}))
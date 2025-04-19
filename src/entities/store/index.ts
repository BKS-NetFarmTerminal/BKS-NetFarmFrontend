import { create } from 'zustand'

export const useStore = create(() => ({
    token: '',
    directories: [
        { name: 'shope', parent: 'root'},
        { name: 'storage', parent: 'root'},
        { name: 'stable', parent: 'root'},
        { name: 'field', parent: 'root'},
        { name: 'pasture', parent: 'root'},
    ]
}))
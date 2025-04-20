const shopList = ['chickenEgg', 'beetSeeds','carrotSeeds']
export const buy = (atr: string[]) => {
    const allOp = atr[0].split('/');
    if (!shopList.includes(allOp[0])) {
        return
    }

}
'use client'
import React, { ReactNode, useState } from 'react'
import { CoinsObject } from './type'
export const contextValueGame = React.createContext<unknown>(null)


const Icoins: CoinsObject = {
    miauStar: 0,
    moonCat: 0,
    michiCoin: 0,
}

const Provider = ({ children }: { children: ReactNode }) => {
    const [coins, setCoins] = useState<CoinsObject>(Icoins)


    return (
        <contextValueGame.Provider value={{ coins, setCoins }}>
            {children}
        </contextValueGame.Provider>
    )
}

export default Provider
'use client'
import React, { ReactNode, useState } from 'react'
import { CoinsObject, ContextCoin, ProbabilityObject } from './type'

const IcoinsInicialState: CoinsObject = {
    miauStar: 0,
    moonCat: 0,
    michiCoin: 0
}

const Iprobability: ProbabilityObject = {
    michiProbabilityValeu: 10,
    moonCatProbabilityValue: 30
}

export const contextValueGame = React.createContext<ContextCoin>({ coins: IcoinsInicialState, setCoins: () => { }, probability: Iprobability, setProbability: () => { } })


const Provider = ({ children }: { children: ReactNode }) => {
    const [coins, setCoins] = useState<CoinsObject>(IcoinsInicialState)
    const [probability, setProbability] = useState<ProbabilityObject>(Iprobability)

    return (
        <contextValueGame.Provider value={{ coins, setCoins, probability, setProbability }}>
            {children}
        </contextValueGame.Provider>
    )
}

export default Provider
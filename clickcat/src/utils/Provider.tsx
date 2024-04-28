'use client'
import React, { ReactNode, useState } from 'react'
import { CoinsObject, ContextCoin, ProbabilityObject, ValueCoinsObject } from './type'

const IcoinsInicialState: CoinsObject = {
    miauStar: 0,
    moonCat: 0,
    michiCoin: 0
}

const IprobabilityInicialState: ProbabilityObject = {
    michiProbabilityValeu: 10,
    moonCatProbabilityValue: 30
}

const IvalueCoinsInicialState: ValueCoinsObject = {
    miauStarValue: 1,
    moonCatValue: 1,
    michiCoinValue: 1
}


export const contextValueGame = React.createContext<ContextCoin>({ coins: IcoinsInicialState, setCoins: () => { }, probability: IprobabilityInicialState, setProbability: () => { }, valueCoins: IvalueCoinsInicialState, setValueCoins: () => { } })


const Provider = ({ children }: { children: ReactNode }) => {
    const [coins, setCoins] = useState<CoinsObject>(IcoinsInicialState)
    const [probability, setProbability] = useState<ProbabilityObject>(IprobabilityInicialState)
    const [valueCoins, setValueCoins] = useState<ValueCoinsObject>(IvalueCoinsInicialState)

    return (
        <contextValueGame.Provider value={{ coins, setCoins, probability, setProbability, valueCoins, setValueCoins }}>
            {children}
        </contextValueGame.Provider>
    )
}

export default Provider
'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import { BuildingsObject, CoinsObject, ContextCoin, ProbabilityObject, ValueCoinsObject } from './type'
import dataPruebaBuildings from '@/Modules/Buildings/utils/builds.json'


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

const BuildingsObjectInicialState: BuildingsObject = {
    id: "",
    name: "",
    value: 0,
    description: "",
    image: ""
}


export const contextValueGame = React.createContext<ContextCoin>({
    coins: IcoinsInicialState,
    setCoins: () => { },
    probability: IprobabilityInicialState,
    setProbability: () => { },
    valueCoins: IvalueCoinsInicialState,
    setValueCoins: () => { },
    buildings: [BuildingsObjectInicialState],
    setBuildings: () => { }
},)


const Provider = ({ children }: { children: ReactNode }) => {
    const [coins, setCoins] = useState<CoinsObject>(IcoinsInicialState)
    const [probability, setProbability] = useState<ProbabilityObject>(IprobabilityInicialState)
    const [valueCoins, setValueCoins] = useState<ValueCoinsObject>(IvalueCoinsInicialState)
    const [buildings, setBuildings] = useState<BuildingsObject[]>([BuildingsObjectInicialState])
    // const [buildingCost, setBuildingCost] = useState


    const handleSetBuilding = (data: BuildingsObject[]) => {
        const dataFormatBuilding = data.map(({ id, name, value, description, image }) => {
            return {
                id: id,
                name: name,
                value: value,
                description: description,
                image: image
            }
        })
        setBuildings(dataFormatBuilding)
    }

    useEffect(() => {
        handleSetBuilding(dataPruebaBuildings)
    }, [])

    return (
        <contextValueGame.Provider
            value={{
                coins,
                setCoins,
                probability,
                setProbability,
                valueCoins,
                setValueCoins,
                buildings,
                setBuildings
            }}>
            {children}
        </contextValueGame.Provider>
    )
}

export default Provider
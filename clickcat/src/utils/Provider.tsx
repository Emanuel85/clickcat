'use client'
import React, { ReactNode, useState } from 'react'
export const contextValueGame = React.createContext<unknown>(null)

const Provider = ({ children }: { children: ReactNode }) => {
    const [miauStar, setMiauStar] = useState<number>(0)
    const [moonCat, setMoonCat] = useState<number>(0)
    const [michiCoin, setMichiCoin] = useState<number>(0)


    return (
        <contextValueGame.Provider value={{ miauStar, setMiauStar, moonCat, setMoonCat, michiCoin, setMichiCoin }}>
            {children}
        </contextValueGame.Provider>
    )
}

export default Provider
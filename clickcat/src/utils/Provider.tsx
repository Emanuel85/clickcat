'use client'
import React, { ReactNode, useState } from 'react'
export const contextValueGame = React.createContext<unknown>(null)

const Provider = ({ children }: { children: ReactNode }) => {
    const [miauStar, setMiauStar] = useState<number>(0)


    return (
        <contextValueGame.Provider value={{ miauStar,setMiauStar }}>
            {children}
        </contextValueGame.Provider>
    )
}

export default Provider
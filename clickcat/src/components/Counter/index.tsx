'use client'
import React, { useContext } from 'react'
import { contextValueGame } from '@/utils/Provider'
import { coinsRandom } from '@/utils/functions/coinsRandom';
import Style from './index.module.css'

const Index = () => {
  const { coins, setCoins, probability } = useContext(contextValueGame)

  const handleCount = () => {
    setCoins(coins => {
      const res = coinsRandom(coins, probability)
      return res
    })
  }
  return (
    <div>
      <div>
        <label>MiauStar: {coins.miauStar} </label>
        <label>MoonCat: {coins.moonCat} </label>
        <label>MichiCoin: {coins.michiCoin} </label>
      </div>
      {/*Este button no utiliza el componente Buttons*/}
      <button className={Style.btnPrincipal} onClick={handleCount}>Prueba</button>
    </div>
  )
}

export default Index


'use client'
import React, { useContext } from 'react'
import { contextValueGame } from '@/utils/Provider'
import { coinsRandom } from '@/Modules/Coins/hooks';
import Style from './index.module.css'

const Index = () => {
  const { coins, setCoins, probability, valueCoins } = useContext(contextValueGame)

  //Este handle maneja la suma de las monedas basado en su probabilidad y valor de moneda
  const handleCount = () => {
    setCoins(coins => {
      const res = coinsRandom(coins, probability,valueCoins)
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
      <button className={Style.btnPrincipal} onClick={handleCount}>CORTA</button>
    </div>
  )
}

export default Index


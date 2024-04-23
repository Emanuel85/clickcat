'use client'
import React, { useContext } from 'react'
import { Buttons } from '@/components/ui/Buttons'
import { contextValueGame } from '@/utils/Provider'
import { coinsRandom } from '@/utils/functions/coinsRandom';

const index = () => {

  const { coins, setCoins } = useContext<any>(contextValueGame)

 

  const handleCount = () => {

    const prueba = {
      miauStar: 0,
      moonCat: 0,
      michiCoin: 0,
    }
    console.log(prueba)

    let resultCoinsRandom = []
    resultCoinsRandom = coinsRandom(coins)
    console.log(resultCoinsRandom,'FUNCTION')
    resultCoinsRandom.map(prev => (
      prev.miauStar !== undefined ? prev.miauStar + prueba.miauStar : 0
    ))

    console.log(prueba, 'RESULTADO')
    // setCoins((resultCoinsRandom) => ({
    //   ...prevCoins,
    //   ...resultCoinsRandom,
    // }));
  }
  //   setMiauStar(miauStar + 1)

  //  setMichiCoin(michiCoin + 1)
  //    setMoonCat(moonCat + 1)

  return (
    <div>
      <div>
        <label>MiauStar: {coins.miauStar} </label>
        <label>MoonCat: {coins.moonCat} </label>
        <label>MichiCoin: {coins.michiCoin} </label>
      </div>
      <Buttons onClick={handleCount} >Prueba</Buttons>
    </div>
  )
}

export default index


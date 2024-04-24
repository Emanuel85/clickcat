'use client'
import React, { useContext, useState } from 'react'
import { Buttons } from '@/components/ui/Buttons'
import { contextValueGame } from '@/utils/Provider'
import { coinsRandom } from '@/utils/functions/coinsRandom';

const Index = () => {
  const { coins, setCoins, probability } = useContext(contextValueGame)

  const handleCount = () => {
    setCoins(coins => {
      const res = coinsRandom(coins,probability)
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
      <Buttons onClick={handleCount}>Prueba</Buttons>
    </div>
  )
}

export default Index


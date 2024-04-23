'use client'
import React, { useContext } from 'react'
import Buttons from '@/app/components/ui/Buttons'
import { contextValueGame } from '@/utils/Provider'
import { Random } from "random-js";

const index = () => {

  const { miauStar, setMiauStar, moonCat, setMoonCat, michiCoin, setMichiCoin } = useContext<any>(contextValueGame)

  const handleCount = () => {
    const michiCoinProvisorio = 10
    const moonCatProvisorio = 30
    setMiauStar(miauStar + 1)
    const random = new Random();
    const michiCoinRandom = random.real(0, 100, true);
    const moonCatRandom = random.real(0, 100, true);

    if (michiCoinRandom <= michiCoinProvisorio) setMichiCoin(michiCoin + 1)
    if (moonCatRandom <= moonCatProvisorio) setMoonCat(moonCat + 1)

      console.log(michiCoinRandom,"Michicoin")
      console.log(moonCatRandom,"Mooncat")
  }





  return (
    <div>
      <div>MiauStar: {miauStar} </div>
      <div>MoonCat: {moonCat} </div>
      <div>MichiCoin: {michiCoin} </div>
      <Buttons onClick={handleCount} >Prueba</Buttons>
    </div>
  )
}

export default index


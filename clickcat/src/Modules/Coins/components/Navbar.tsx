'use client'
import { contextValueGame } from '@/utils/Provider'
import React, { useContext } from 'react'
import Style from './navbar.module.css'


export const Navbar = () => {
  const { coins } = useContext(contextValueGame)
  return (
    <div className={Style.containerNavBar}>
      <nav>
        <label>MiauStar: {coins.miauStar} </label>
        <label>MoonCat: {coins.moonCat} </label>
        <label>MichiCoin: {coins.michiCoin} </label>
      </nav>
    </div>
  )
}

export default Navbar

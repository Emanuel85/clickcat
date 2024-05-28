'use client'
import React, { useContext, useEffect } from 'react'
import { contextValueGame } from '@/utils/Provider'
import { coinsRandom } from '@/Modules/Coins/hooks';
import Style from './index.module.css'
import { disableEntitydButton } from '../utils';
// import { Skills } from '@/Modules';

const Index = () => {
  const { coins, setCoins, probability, valueCoins, buildings, setBuildings, skills, setSkills } = useContext(contextValueGame)

  //Este handle maneja la suma de las monedas basado en su probabilidad y valor de moneda
  const handleCount = () => {
    setCoins(coins => {
      const res = coinsRandom(coins, probability, valueCoins)
      return res
    })
  }

  // const handleButtonDisabled = () => {

  // }

  useEffect(() => {
    const disabledBuilding = buildings.map(building => {
      if (coins.miauStar >= building.buildingCost) {
        return { ...building, disabled: disableEntitydButton(buildings, building.name.id, false) }
      }
      else if (coins.miauStar <= building.buildingCost) {
        return { ...building, disabled: disableEntitydButton(buildings, building.name.id, true) }
      }
      return building
    })
    setBuildings(disabledBuilding)

    const disabledSkills = skills.map(skill => {
      if (coins.miauStar >= skill.skillsCost) {
        return { ...skill, disabled: disableEntitydButton(skills, skill.name.id, false) }
      } else if (coins.miauStar <= skill.skillsCost) {
        return { ...skill, disabled: disableEntitydButton(skills, skill.name.id, true) }
      }
      return skill
    })

    setSkills(disabledSkills)

  }, [coins])


  return (
    
      <div className={Style.containerCoin}>
  
        {/*Este button no utiliza el componente Buttons*/}
        <button className={Style.btnPrincipal} onClick={() => {
          handleCount()
          // handleButtonDisabled()
        }}>CORTA</button>
      </div>
  )
}

export default Index



// buildings.map(item => {
//   if (coins.miauStar >= item.buildingCost) {
//     setButtonDisabledBuilding(false)
//   }
//   else if ((coins.miauStar <= item.buildingCost)) {
//     setButtonDisabledBuilding(true)
//   }
// })
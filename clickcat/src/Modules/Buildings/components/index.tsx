'use client'
import React, { useContext } from 'react'
import Style from './index.module.css'
import { Buttons, Tooltips } from '@Buildings/ui'
import { contextValueGame } from '@/utils/Provider'
import { ValueCoinsObject } from '@/utils/type'
import { amountBuildingCost, increaseValueCoins, totalOverwriteValueCoins, subtractBuildingCoins } from '@Buildings/hooks'

export const index = () => {
  const { valueCoins, setValueCoins, buildings, setBuildings, setCoins } = useContext(contextValueGame)

  //Envia a tooltip costo total a mostrar
  const handleTotalCost = (valueCoins: ValueCoinsObject, id: string, buildingCoinName: string) => {
    return totalOverwriteValueCoins(valueCoins, id, buildingCoinName)
  }

  //Incrementa valor de coins
  const handleincreaseValueCoins = (quantityCoins: number, id: string) => {
    setValueCoins(valueCoin => {
      const res = increaseValueCoins(valueCoin, quantityCoins, id)
      return res
    })
  }

  //Resta costo de building a coins
  const handlesubtractBuildingCoins = (id: string) => {
    buildings.map(building => {
      if (building.name.id === id) {
        setCoins(coin => {
          const res = subtractBuildingCoins(coin, building.buildingCost)
          return res
        })
      }
    })
  }

  //Aumenta costo de building
  const handleamountBuildingCost = (id: string) => {
    const updatedBuildings = buildings.map(building => {
      if (building.name.id === id) {
        return { ...building, buildingCost: amountBuildingCost(building) };
      }
      return building;
    });
    setBuildings(updatedBuildings);
  }


  return (
    <>
      <style>
        {`
        .prueba{
          display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
          width:100%;
        }
  `}
      </style>
      <div className='prueba' >
        Estructuras
        {buildings.map(({ id, buildingCoinName, name, disabled, quantityCoins, buildingCost, description, image, }) => {

          return (
            <div className={Style.containerStructure} >
              <Tooltips
                description={description}
                valueCost={quantityCoins}
                totalCost={handleTotalCost(valueCoins, id, buildingCoinName)}
                nameCoin={buildingCoinName}
                ID={id}
              >
                <div>
                  <Buttons
                    disabled={disabled}
                    onClick={() => {
                      handleincreaseValueCoins(quantityCoins, id)
                      handleamountBuildingCost(name.id)
                      handlesubtractBuildingCoins(name.id)
                    }}>
                    {name.title}
                  </Buttons>
                  {`Costo: ${buildingCost}`}
                </div>
              </Tooltips>
            </div>
          )
        })
        }

      </div >
    </>
  )
}

export default index
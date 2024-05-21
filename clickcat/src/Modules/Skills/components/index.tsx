'use client'
import { contextValueGame } from '@/utils/Provider'
import React, { useContext } from 'react'
import { Buttons, Tooltips } from '@Skills/ui'
import { totalOverwriteProbability, sumProbability } from '@Skills/hooks'
import { ProbabilityObject } from '@/utils/type'
import Style from './index.module.css'


const Index = () => {
  const { probability, setProbability, skills } = useContext(contextValueGame)

  const handleProbability = (quantityProbability: number, id: string) => {
    setProbability(probability => {
      const res = sumProbability(probability, quantityProbability, id)
      return res
    })
  }

  const handleTotalProbability = (probability: ProbabilityObject, id: string, skillCoinName: string) => {  
    return totalOverwriteProbability(probability, id, skillCoinName)
  }


  return (
    <div>Habilidades
      {skills.map(({ id, skillCoinName, name, quantityProbability, skillsCost, description, image, }) => {
        return (
          <div className={Style.containerAbility}>
            <Tooltips
              toolTipDescription={description}
              toolTipValueProbability={quantityProbability}
              toolTipTotalProbability={handleTotalProbability(probability, id, skillCoinName)}
              toolTipID={id}
            >
              <div>
                <Buttons
                  onClick={() => handleProbability(quantityProbability, id)}>
                  {name}
                </Buttons>
                {`Costo: ${skillsCost}`}
              </div>
            </Tooltips>
          </div>)
      })
      }
    </div>
  )
}

export default Index


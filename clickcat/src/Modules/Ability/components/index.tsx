'use client'
import { contextValueGame } from '@/utils/Provider'
import React, { useContext } from 'react'
import { Buttons, Tooltips } from '@/Modules/Ability/ui'
import { totalOverwriteProbability,sumProbability } from '@/Modules/Ability/hooks/'
import { ProbabilityObject } from '@/utils/type'
import abilityData from '@/Modules/Ability/utils/ability.json'
import Style from './index.module.css'


const Index = () => {
  const { probability, setProbability } = useContext(contextValueGame)
  
  const handleProbability = (value: number, id: string) => {
    setProbability(probability => {
      const res = sumProbability(probability, value, id)
      return res
    })
  }

  const handleTotalProbability = (probability: ProbabilityObject, id: string) => {   
    return totalOverwriteProbability(probability, id)
  }


  return (
    <div>Habilidades
      {abilityData.map(({ name, description, image, value, id }) => {
        return (
          <div className={Style.containerAbility}>
            <Tooltips
              toolTipDescription={description}
              toolTipValueProbability={value}
              toolTipTotalProbability={handleTotalProbability(probability, id)}
              toolTipID={id}
            >
              <div>
                <Buttons
                  onClick={() => handleProbability(value, id)}>
                  {name}
                </Buttons>
              </div>
            </Tooltips>
          </div>)
      })
      }
    </div>
  )
}

export default Index


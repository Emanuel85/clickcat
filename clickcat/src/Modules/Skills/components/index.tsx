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

  const handleTotalProbability = (probability: ProbabilityObject, id: string) => {
    return totalOverwriteProbability(probability, id)
  }


  return (
    <div>Habilidades
      {skills.map(({ id, name, quantityProbability, skillsCost, description, image, }) => {
        return (
          <div className={Style.containerAbility}>
            <Tooltips
              toolTipDescription={description}
              toolTipValueProbability={quantityProbability}
              toolTipTotalProbability={handleTotalProbability(probability, id)}
              toolTipID={id}
            >
              <div>
                <Buttons
                  onClick={() => handleProbability(quantityProbability, id)}>
                  {name}
                </Buttons>
                {skillsCost}
              </div>
            </Tooltips>
          </div>)
      })
      }
    </div>
  )
}

export default Index


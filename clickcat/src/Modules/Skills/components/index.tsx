'use client'
import { contextValueGame } from '@/utils/Provider'
import React, { useContext } from 'react'
import { Buttons, Tooltips } from '@Skills/ui'
import { totalOverwriteProbability, sumProbability } from '@Skills/hooks'
import { ProbabilityObject } from '@/utils/type'
import Style from './index.module.css'
import { changeRestaCoins } from '@/Modules/Buildings/hooks'


const Index = () => {
  const { probability, setProbability, skills, setCoins } = useContext(contextValueGame)

  const handleProbability = (quantityProbability: number, id: string) => {
    setProbability(probability => {
      const res = sumProbability(probability, quantityProbability, id)
      return res
    })
  }

  const handleTotalProbability = (probability: ProbabilityObject, id: string, skillCoinName: string) => {
    return totalOverwriteProbability(probability, id, skillCoinName)
  }

  const handleRestaSkillCost = (id: string) => {
    skills.map(skill => {
      if (skill.id === id) {
        setCoins(coin => {
          const res = changeRestaCoins(coin, skill.skillsCost)
          return res
        })
      }
    })
  }


  return (
    <div>Habilidades
      {skills.map(({ id, skillCoinName, name, disabled, quantityProbability, skillsCost, description, image, }) => {
        console.log("habilitado skill",disabled)
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
                  disabled={disabled}
                  onClick={() => {
                    handleProbability(quantityProbability, id)
                    handleRestaSkillCost(id)
                  }
                  }>
                  {name.title}
                </Buttons>
                {`Costo: ${skillsCost}`}
              </div>
            </Tooltips>
          </div >)
      })
      }
    </div >
  )
}

export default Index


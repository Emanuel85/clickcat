'use client'
import { contextValueGame } from '@/utils/Provider'
import React, { useContext } from 'react'
import { Buttons, Tooltips } from '@Skills/ui'
import { totalOverwriteProbability, increaseProbability, subtractSkillCoins, amountSkillCost } from '@Skills/hooks'
import { ProbabilityObject } from '@/utils/type'
import Style from './index.module.css'


const Index = () => {
  const { probability, setProbability, skills, setSkills, setCoins } = useContext(contextValueGame)

  const handleTotalProbability = (probability: ProbabilityObject, id: string, skillCoinName: string) => {
    return totalOverwriteProbability(probability, id, skillCoinName)
  }

  //Incrementa probabilidad de coins
  const handleProbability = (quantityProbability: number, id: string) => {
    setProbability(probability => {
      const res = increaseProbability(probability, quantityProbability, id)
      return res
    })
  }

  //Resta costo de skill a coins
  const handlesubtractSkillCoins = (id: string) => {
    skills.map(skill => {
      if (skill.name.id === id) {
        setCoins(coin => {
          const res = subtractSkillCoins(coin, skill.skillsCost)
          return res
        })
      }
    })
  }


  //Aumenta costo de skill
  const handleamountBuildingCost = (id: string) => {
    const amountSkill = skills.map(skill => {
      if (skill.name.id === id) {
        return { ...skill, skillsCost: amountSkillCost(skill) };
      }
      return skill;
    });
    setSkills(amountSkill);
  }


  return (
    <div className={Style.containerSkills}>
      <h2>
        Habilidades
      </h2>
      {
        skills.map(({ id, skillCoinName, name, disabled, quantityProbability, skillsCost, description, image, }) => {
          return (
            <div className={Style.containerTooltipsAndButtons}>
              <Tooltips
                description={description}
                valueProbability={quantityProbability}
                totalProbability={handleTotalProbability(probability, id, skillCoinName)}
                ID={id}
              >
                <div>
                  <Buttons
                    className={Style.containerButtons}
                    disabled={disabled}
                    onClick={() => {
                      handleProbability(quantityProbability, id)
                      handleamountBuildingCost(name.id)
                      handlesubtractSkillCoins(name.id)
                    }}>
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


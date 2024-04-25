'use client'
import { contextValueGame } from '@/utils/Provider'
import React, { useContext } from 'react'
import Labels from '../ui/Labels'
import abilityData from '@/utils/JSON/ability.json'
import { Buttons } from '../ui'
import { probabilityFunction } from '@/utils/functions/probability';
import Style from './index.module.css'

const Index = () => {

  const { probability, setProbability } = useContext(contextValueGame)

  const handleProbability = (value: number, id: string) => {
    setProbability(probability => {
      console.log(probability, value, id)
      const res = probabilityFunction(probability, value, id)
      console.log(res)
      return res
    })

  }

  console.log(probability.michiProbabilityValeu)

  return (
    <div>Habilidades
      {abilityData.map(({ name, description, image, value, id }) => {
        return (
          <div className={Style.containerAbility}>
            <Buttons
              onClick={() => handleProbability(value, id)}
              toolTipDescription={`${description}.`}
              toolTipValueProbability={`+${value}%.`}
              toolTipTotalProbability={`
              ${id === 'Michicoin' ?
                  id + " +" + probability.michiProbabilityValeu.toFixed(2) + "%."
                  : id === 'Mooncat' ?
                    id + " +" + probability.moonCatProbabilityValue.toFixed(2) + "%."
                    : id + " +" + probability.moonCatProbabilityValue.toFixed(2) + "%" + " "+ " +" + probability.michiProbabilityValeu.toFixed(2) + "%."
                }`}
            >
              {name}
            </Buttons>
            <Labels>

            </Labels>
          </div>)
      })
      }
    </div>
  )
}

export default Index

// {id === 'michicoint' ?
// probability.michiProbabilityValeu.toFixed(2)
// : id === 'mooncat' ?
//   probability.moonCatProbabilityValue.toFixed(2)
//   :
//   `${probability.moonCatProbabilityValue.toFixed(2)} ${probability.michiProbabilityValeu.toFixed(2)}`}
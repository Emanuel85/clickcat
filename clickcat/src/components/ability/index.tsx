'use client'
import { contextValueGame } from '@/utils/Provider'
import React, { useContext } from 'react'
import Labels from '../ui/Labels'
import abilityData from '@/utils/JSON/ability.json'
import { Buttons } from '../ui'
import { probabilityFunction } from '@/utils/functions/probability';


const Index = () => {

  const { setProbability } = useContext(contextValueGame)

  const handleProbability = (value: number, id: string) => {
    setProbability(probability => {
      console.log(probability, value, id)
      const res = probabilityFunction(probability, value, id)
      console.log(res)
      return res
    })

  }


  return (
    <div>Habilidades
      {abilityData.map(({ name, description, image, value, id }) => {
        return (
          <div>
            <Buttons
              onClick={() => handleProbability(value, id)}
              title={`${description}`}>{name}</Buttons>
            <Labels  >{` ${value}`}</Labels>
          </div>)
      })
      }
    </div>
  )
}

export default Index
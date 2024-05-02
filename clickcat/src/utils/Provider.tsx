'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import { BuildingsObject, CoinsObject, ContextCoin, ProbabilityObject, SkillsObject, ValueCoinsObject } from './type'
import dataBuildings from '@Buildings/utils/builds.json'
import dataSkills from '@Skills/utils/ability.json'

const IcoinsInitialState: CoinsObject = {
  miauStar: 0,
  moonCat: 0,
  michiCoin: 0
}

const IprobabilityInitialState: ProbabilityObject = {
  michiProbabilityValeu: 10,
  moonCatProbabilityValue: 30
}

const IvalueCoinsInitialState: ValueCoinsObject = {
  miauStarValue: 1,
  moonCatValue: 1,
  michiCoinValue: 1
}

const BuildingsObjectInitialState: BuildingsObject = {
  id: "",
  name: {
    title: "",
    id: ""
  },
  quantityCoins: 0,
  buildingCost: 0,
  description: "",
  image: ""
}

const SkillsObjectInitialState: SkillsObject = {
  id: "",
  name: "",
  quantityProbability: 0,
  skillsCost: 0,
  description: "",
  image: ""
}

export const contextValueGame = React.createContext<ContextCoin>({
  coins: IcoinsInitialState,
  setCoins: () => { },
  probability: IprobabilityInitialState,
  setProbability: () => { },
  valueCoins: IvalueCoinsInitialState,
  setValueCoins: () => { },
  buildings: [BuildingsObjectInitialState],
  setBuildings: () => { },
  skills: [SkillsObjectInitialState],
  setSkills: () => { }
},)


const Provider = ({ children }: { children: ReactNode }) => {
  const [coins, setCoins] = useState<CoinsObject>(IcoinsInitialState)
  const [probability, setProbability] = useState<ProbabilityObject>(IprobabilityInitialState)
  const [valueCoins, setValueCoins] = useState<ValueCoinsObject>(IvalueCoinsInitialState)
  const [buildings, setBuildings] = useState<BuildingsObject[]>([BuildingsObjectInitialState])
  const [skills, setSkills] = useState<SkillsObject[]>([SkillsObjectInitialState])

console.log(buildings)
  const handleSetBuilding = (data: BuildingsObject[]) => {
    const dataFormatBuilding = data.map(({ id, name, quantityCoins, buildingCost, description, image }) => {
      return {
        id,
        name,
        quantityCoins,
        buildingCost,
        description,
        image
      }
    })
    setBuildings(dataFormatBuilding)
  }

  const handleSetSkills = (data: SkillsObject[]) => {
    const dataFormatSkills = data.map(({ id, name, quantityProbability, skillsCost, description, image }) => {
      return {
        id,
        name,
        quantityProbability,
        skillsCost,
        description,
        image
      }
    })
    setSkills(dataFormatSkills)
  }

  useEffect(() => {
    handleSetBuilding(dataBuildings)
    handleSetSkills(dataSkills)
  }, [])

  return (
    <contextValueGame.Provider
      value={{
        coins,
        setCoins,
        probability,
        setProbability,
        valueCoins,
        setValueCoins,
        buildings,
        setBuildings,
        skills,
        setSkills
      }}>
      {children}
    </contextValueGame.Provider>
  )
}

export default Provider
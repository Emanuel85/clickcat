import React from "react";

export interface propsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> { }
export interface propsLabel extends React.LabelHTMLAttributes<HTMLLabelElement> { }

export interface propsTooltipsSkills {
    description: string;
    valueProbability: number;
    totalProbability: string;
    ID: string;
    children: any;
}

export interface propsTooltipsBuilding {
    description: string;
    valueCost: number;
    totalCost: string;
    ID: string;
    nameCoin: string;
    children: any;
}

export interface CoinsObject {
    miauStar: number;
    moonCat: number;
    michiCoin: number;
}

export interface ValueCoinsObject {
    miauStarValue: number,
    moonCatValue: number,
    michiCoinValue: number
}
export interface ProbabilityObject {
    michiProbabilityValeu: number,
    moonCatProbabilityValue: number
}

export interface BuildingsObject {
    id: string,
    buildingCoinName: string,
    name: {
        title: string,
        id: string
    },
    disabled: boolean,
    quantityCoins: number,
    buildingCost: number,
    description: string,
    image: string
}

export interface SkillsObject {
    id: string,
    skillCoinName: string,
    disabled: boolean,
    name: {
        title: string,
        id: string
    },
    quantityProbability: number,
    skillsCost: number,
    description: string,
    image: string
}

export type ContextCoin = {
    coins: CoinsObject,
    setCoins: React.Dispatch<React.SetStateAction<CoinsObject>>,
    probability: ProbabilityObject,
    setProbability: React.Dispatch<React.SetStateAction<ProbabilityObject>>
    valueCoins: ValueCoinsObject,
    setValueCoins: React.Dispatch<React.SetStateAction<ValueCoinsObject>>
    buildings: BuildingsObject[],
    setBuildings: React.Dispatch<React.SetStateAction<BuildingsObject[]>>
    skills: SkillsObject[],
    setSkills: React.Dispatch<React.SetStateAction<SkillsObject[]>>
}
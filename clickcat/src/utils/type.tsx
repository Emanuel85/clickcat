export interface propsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> { }
export interface propsLabel extends React.LabelHTMLAttributes<HTMLLabelElement> { }

export interface propsTooltips {
    toolTipDescription: string;
    toolTipValueProbability: number;
    toolTipTotalProbability: string;
    toolTipID: string
    children: any
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
    name: string,
    value: number,
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
}
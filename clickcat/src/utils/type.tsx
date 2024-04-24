export interface propsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> { }
export interface propsLabel extends React.LabelHTMLAttributes<HTMLLabelElement> { }
export interface CoinsObject {
    miauStar: number;
    moonCat: number;
    michiCoin: number;
}

export interface ProbabilityObject {
    michiProbabilityValeu: number,
    moonCatProbabilityValue: number
}

export type ContextCoin = {
    coins: CoinsObject,
    setCoins: React.Dispatch<React.SetStateAction<CoinsObject>>,
    probability: ProbabilityObject,
    setProbability: React.Dispatch<React.SetStateAction<ProbabilityObject>>
}
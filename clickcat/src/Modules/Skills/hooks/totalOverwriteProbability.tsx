import { ProbabilityObject } from "@/utils/type";

export default function totalOverwriteProbability(probability: ProbabilityObject, id: string, skillCoinName:string) {
    let resulTotalProbability = ''
    if (id === 'michi') { resulTotalProbability = skillCoinName + " " + probability.michiProbabilityValeu.toFixed(2) + "%." }
    if (id === 'moon') { resulTotalProbability = skillCoinName + " " + probability.moonCatProbabilityValue.toFixed(2) + "%." }
    if (id === "michiMoon") resulTotalProbability = "Mooncat" + " " + probability.moonCatProbabilityValue.toFixed(2) + "%" + " " + "Michicoin" + " " + probability.michiProbabilityValeu.toFixed(2) + "%."
    return resulTotalProbability
}
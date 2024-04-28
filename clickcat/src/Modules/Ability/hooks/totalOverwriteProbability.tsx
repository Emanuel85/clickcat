import { ProbabilityObject } from "@/utils/type";

export default function totalOverwriteProbability(probability: ProbabilityObject, id: string) {
    let resulTotalProbability = ''
    if (id === 'Michicoin') { resulTotalProbability = id + " " + probability.michiProbabilityValeu.toFixed(2) + "%." }
    if (id === 'Mooncat') { resulTotalProbability = id + " " + probability.moonCatProbabilityValue.toFixed(2) + "%." }
    if (id === "Michicoin y Mooncat") resulTotalProbability = "Mooncat" + " " + probability.moonCatProbabilityValue.toFixed(2) + "%" + " " + "Michicoin" + " " + probability.michiProbabilityValeu.toFixed(2) + "%."
    return resulTotalProbability
}
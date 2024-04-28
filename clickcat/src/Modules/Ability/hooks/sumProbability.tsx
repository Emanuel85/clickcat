import { ProbabilityObject } from "@/utils/type";

//funcion que suma la probabilidad comprada por el jugador


export default function sumProbability(
    { michiProbabilityValeu, moonCatProbabilityValue }: ProbabilityObject,
    value: number,
    id: string
) {
    if (id === 'Michicoin') michiProbabilityValeu = michiProbabilityValeu + value
    if (id === 'Mooncat') moonCatProbabilityValue = moonCatProbabilityValue + value
    if (id === 'Michicoin y Mooncat') {
        moonCatProbabilityValue = moonCatProbabilityValue + value
        michiProbabilityValeu = michiProbabilityValeu + value
    }

    return { michiProbabilityValeu, moonCatProbabilityValue }
}
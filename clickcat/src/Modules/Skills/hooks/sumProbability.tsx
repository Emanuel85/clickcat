import { ProbabilityObject } from "@/utils/type";

//funcion que suma la probabilidad comprada por el jugador


export default function sumProbability(
    { michiProbabilityValeu, moonCatProbabilityValue }: ProbabilityObject,
    quantityProbability: number,
    id: string
) {
    if (id === 'Michicoin') michiProbabilityValeu = michiProbabilityValeu + quantityProbability
    if (id === 'Mooncat') moonCatProbabilityValue = moonCatProbabilityValue + quantityProbability
    if (id === 'Michicoin y Mooncat') {
        moonCatProbabilityValue = moonCatProbabilityValue + quantityProbability
        michiProbabilityValeu = michiProbabilityValeu + quantityProbability
    }

    return { michiProbabilityValeu, moonCatProbabilityValue }
}
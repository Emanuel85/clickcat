import { ProbabilityObject } from "@/utils/type";

//funcion que suma la probabilidad comprada por el jugador


export default function increase(
    { michiProbabilityValeu, moonCatProbabilityValue }: ProbabilityObject,
    quantityProbability: number,
    id: string
) {
    if (id === 'michi') michiProbabilityValeu = michiProbabilityValeu + quantityProbability
    if (id === 'moon') moonCatProbabilityValue = moonCatProbabilityValue + quantityProbability
    if (id === 'michiMoon') {
        moonCatProbabilityValue = moonCatProbabilityValue + quantityProbability
        michiProbabilityValeu = michiProbabilityValeu + quantityProbability
    }

    return { michiProbabilityValeu, moonCatProbabilityValue }
}
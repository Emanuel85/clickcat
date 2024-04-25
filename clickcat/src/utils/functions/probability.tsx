import { ProbabilityObject } from "../type";

export function probabilityFunction(
    { michiProbabilityValeu, moonCatProbabilityValue }: ProbabilityObject,
    value: number,
    id: string
) {

    console.log('ANTES de Suma de michi', michiProbabilityValeu)
    console.log('ANTES de Suma de moon', moonCatProbabilityValue)

    if (id === 'Michicoin') michiProbabilityValeu = michiProbabilityValeu + value
    if (id === 'Mooncat') moonCatProbabilityValue = moonCatProbabilityValue + value
    if (id === 'Michicoin y Mooncat') {
        moonCatProbabilityValue = moonCatProbabilityValue + value
        michiProbabilityValeu = michiProbabilityValeu + value
    }
    console.log('Suma de michi', michiProbabilityValeu)
    console.log('Suma de moon', moonCatProbabilityValue)
    return { michiProbabilityValeu, moonCatProbabilityValue }
}
import { ProbabilityObject } from "../type";

export function probabilityFunction(
    { michiProbabilityValeu, moonCatProbabilityValue }: ProbabilityObject,
    value: number,
    id: string
) {

    console.log('ANTES de Suma de michi', michiProbabilityValeu)
    console.log('ANTES de Suma de moon', moonCatProbabilityValue)

    if (id === 'michicoint') michiProbabilityValeu = michiProbabilityValeu + value
    if (id === 'mooncat') moonCatProbabilityValue = moonCatProbabilityValue + value
    if (id === 'michimoon') {
        moonCatProbabilityValue + value
        michiProbabilityValeu + value
    }
    console.log('Suma de michi', michiProbabilityValeu)
    console.log('Suma de moon', moonCatProbabilityValue)
    return { michiProbabilityValeu, moonCatProbabilityValue }
}
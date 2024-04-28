import { ValueCoinsObject } from '@/utils/type'

export function changeValueCoins(
    { miauStarValue, moonCatValue, michiCoinValue }: ValueCoinsObject,
    value: number,
    id: string
) {
    if (id === 'Michicoin') michiCoinValue = michiCoinValue + value
    if (id === 'Mooncat') moonCatValue = moonCatValue + value
    if (id === 'Miaustar') { miauStarValue = miauStarValue + value }
    return { miauStarValue, moonCatValue, michiCoinValue }
}
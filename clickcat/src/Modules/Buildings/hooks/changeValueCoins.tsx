import { ValueCoinsObject } from '@/utils/type'

export default function changeValueCoins(
    { miauStarValue, moonCatValue, michiCoinValue }: ValueCoinsObject,
    quantityCoins: number,
    id: string
) {
    if (id === 'Michicoin') michiCoinValue = michiCoinValue + quantityCoins
    if (id === 'Mooncat') moonCatValue = moonCatValue + quantityCoins
    if (id === 'Miaustar') { miauStarValue = miauStarValue + quantityCoins }
    return { miauStarValue, moonCatValue, michiCoinValue }
}
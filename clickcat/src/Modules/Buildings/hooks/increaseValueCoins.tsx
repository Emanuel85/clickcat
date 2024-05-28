import { ValueCoinsObject } from '@/utils/type'

export default function increase(
    { miauStarValue, moonCatValue, michiCoinValue }: ValueCoinsObject,
    quantityCoins: number,
    id: string
) {
    if (id === 'michi') michiCoinValue = michiCoinValue + quantityCoins
    if (id === 'moon') moonCatValue = moonCatValue + quantityCoins
    if (id === 'miau') { miauStarValue = miauStarValue + quantityCoins }
    return { miauStarValue, moonCatValue, michiCoinValue }
}
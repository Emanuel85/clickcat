import { BuildingsObject, CoinsObject } from "@/utils/type"

export default function subtract({ miauStar, moonCat, michiCoin }: CoinsObject, skillCost: number) {

    miauStar = miauStar - skillCost

    return { miauStar, moonCat, michiCoin }
}
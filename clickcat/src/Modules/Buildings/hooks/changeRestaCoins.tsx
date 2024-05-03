import { BuildingsObject, CoinsObject } from "@/utils/type"

export default function resta({ miauStar, moonCat, michiCoin }: CoinsObject, buildingCost: number) {

    miauStar = miauStar - buildingCost

    return { miauStar, moonCat, michiCoin }
}
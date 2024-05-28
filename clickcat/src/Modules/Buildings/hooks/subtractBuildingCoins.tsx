import {CoinsObject } from "@/utils/type"

export default function subtract({ miauStar, moonCat, michiCoin }: CoinsObject, buildingCost: number) {

    miauStar = miauStar - buildingCost

    return { miauStar, moonCat, michiCoin }
}
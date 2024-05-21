import { ValueCoinsObject } from "@/utils/type";

export default function totalOverwriteValueCoins(valueCoin: ValueCoinsObject, id: string, buildingCoinName: string) {
    let resulTotalProbability = ''
    if (id === 'michi') { resulTotalProbability = (valueCoin.michiCoinValue - 1) + " " + buildingCoinName + "." }
    if (id === 'moon') { resulTotalProbability = (valueCoin.moonCatValue - 1) + " " + buildingCoinName + "." }
    if (id === "miau") { resulTotalProbability = (valueCoin.miauStarValue - 1) + " " + buildingCoinName + "." }
    return resulTotalProbability
}
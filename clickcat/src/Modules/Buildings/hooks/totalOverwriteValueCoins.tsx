import { ValueCoinsObject } from "@/utils/type";

export default function totalOverwriteValueCoins(valueCoin: ValueCoinsObject, id: string) {
    let resulTotalProbability = ''
    if (id === 'Michicoin') { resulTotalProbability = id + " " + valueCoin.michiCoinValue + "." }
    if (id === 'Mooncat') { resulTotalProbability = id + " " + valueCoin.moonCatValue + "." }
    if (id === "Miaustar") resulTotalProbability = id + " "+ valueCoin.miauStarValue + "."
    return resulTotalProbability
}
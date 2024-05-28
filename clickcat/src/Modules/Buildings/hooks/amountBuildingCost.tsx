import { BuildingsObject } from "@/utils/type";

export default function amount(building: BuildingsObject) {
    let result = building.buildingCost;
    result = result + 2
    return result;
}

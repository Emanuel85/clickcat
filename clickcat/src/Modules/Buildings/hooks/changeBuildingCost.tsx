import { BuildingsObject } from "@/utils/type";

export default function changeBuildingCost(building: BuildingsObject) {
    let result = building.buildingCost;
    result = result + 2
    return result;
}

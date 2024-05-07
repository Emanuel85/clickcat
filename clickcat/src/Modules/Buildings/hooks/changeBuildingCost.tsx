import { BuildingsObject } from "@/utils/type";

export default function changeBuildingCost(buildings: BuildingsObject[]) {
    let result = 0;
    buildings.forEach(item => {
        result = item.buildingCost + 2;

    });
    return result;
}

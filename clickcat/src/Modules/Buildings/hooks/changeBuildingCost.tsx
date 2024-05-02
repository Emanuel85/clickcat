import { BuildingsObject } from "@/utils/type";

export default function changeBuildingCost(buildings: BuildingsObject[], id: string) {
    let result = 0; // Inicializamos result en 0 para manejar el caso en que no se encuentre el ID
    buildings.forEach(item => {
        if (item.name.id === id) {
            result = item.buildingCost + 2; // Sumamos 2 al buildingCost si encontramos el ID
        }
    });
    return result;
}

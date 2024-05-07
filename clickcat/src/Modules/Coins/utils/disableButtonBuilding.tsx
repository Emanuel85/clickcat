import { BuildingsObject } from "@/utils/type";

export default function disabledButtonBuilding(
    buildings: BuildingsObject[],
    id: string,
    disabled: boolean) {
    let result = true
    buildings.forEach(
        item => {
            if (item.name.id === id && item.disabled === true) {
                result = disabled
            } else {
                result = disabled
            }

        }
    )


    return result
}
import { BuildingsObject, SkillsObject } from "@/utils/type";

type BuildingOrSkill = BuildingsObject[] | SkillsObject[]

export default function disableEntitydButton(
    objects: BuildingOrSkill,
    id: string,
    disabled: boolean) {
    let result = true
    objects.forEach(
        item => {
            if (item.name.id === id && item.disabled === true) {
                result = disabled
            } else {
                result = disabled
            }

        }
    )
    console.log('Deshabilitar', id, result)
    return result
}   
import { SkillsObject } from "@/utils/type";

export default function amount(skill: SkillsObject) {
    let result = skill.skillsCost;
    result = result + 2
    return result;
}

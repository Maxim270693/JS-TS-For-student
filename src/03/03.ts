import {StudentPropsType} from "../02/02";
import {GovernmentBuildingsPropsType, HousesPropsType} from "../02/02_02";

export function sum( a: number, b: number) {
    return a + b
}

const result = sum(sum(1,2), sum(2,4))

export function addSkill(students: StudentPropsType, skill: string) {
    students.technologies.push({id: 4, title: skill})
}

export const makeStudentActive = (st: StudentPropsType) => {
    st.isActive = false
}

export function doesStudentLiveIn( student: StudentPropsType, titleCity: string ) {
    return student.address.city.cityTitle === titleCity
}

export function addMoneyToBudget(building: GovernmentBuildingsPropsType,budget: number) {
    building.budget += budget
}

export function repairHouse(houses: HousesPropsType) {
    return houses.repaired = true
}

export function toFireStaff(building: GovernmentBuildingsPropsType, number: number) {
    return building.staffCount -= number
}
export function toHireStaff(building: GovernmentBuildingsPropsType, number: number) {
     return building.staffCount += number
}

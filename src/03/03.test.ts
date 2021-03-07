import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";
import {StudentPropsType} from "../02/02";

let students: StudentPropsType

beforeEach(() => {
    students = {
        name: 'Maxim',
        age: 27,
        isActive: true,
        address: {
            streetTitle: "Surganova 2",
            city: {
                country: 'Belarus',
                cityTitle: 'Minsk'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'React'
            }
        ]
    }
})

test('new tech skill should be added to students', () => {
    expect(students.technologies.length).toBe(3)

    addSkill(students, "JS")

    expect(students.technologies.length).toBe(4)
    expect(students.technologies[3].title).toBe('JS')

})
test('students  should be made active', () => {
    expect(students.isActive).toBe(true)

    makeStudentActive(students)

    expect(students.isActive).toBe(false)
})
test('does students lives in city?', () => {

    let result1 = doesStudentLiveIn(students, 'Moscow')
    let result2 = doesStudentLiveIn(students, 'Minsk')

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})


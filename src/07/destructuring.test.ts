import {ManPropsType} from "./Destructuring";

let man: ManPropsType;
beforeEach(() => {
    man = {
        name: 'Maxim',
        age: 27,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Lobonka 14'
            }
        }
    }
})

test('', () => {

    // const age = man.age
    // const lessons = man.lessons

    const {age, lessons} = man
    const {title} = man.address.street

    expect(age).toBe(27)
    expect(lessons.length).toBe(2)
    expect(title).toBe('Lobonka 14')
})

test('', () => {
    const l1 = man.lessons[0]
    const l2 = man.lessons[1]

    const [ls1,ls2] = man.lessons

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
})
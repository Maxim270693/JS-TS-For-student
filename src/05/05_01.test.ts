import {ManType} from "./05_01";

let people: Array<ManType> = []

beforeEach( () => {
    people = [
        {name: 'Maxim Zhuk', age: 33},
        {name: 'Alex Fedorov', age: 24},
        {name: 'Iliay Shev', age: 18},
    ]
})

test('should get array of greeting messages', () => {
    const messages = people.map( man => `Hello ${man.name.split('')[0]}. Welcome to It-Incubator` )


    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello M. Welcome to It-Incubator')
    expect(messages[1]).toBe('Hello A. Welcome to It-Incubator')
    expect(messages[2]).toBe('Hello I. Welcome to It-Incubator')
})


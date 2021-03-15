export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Maxim Zhuk', age: 33},
    {name: 'Alex Fedorov', age: 24},
    {name: 'Iliay Shev', age: 18},
]

const dimychTransformator = (man: ManType) => ({
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split('')[1]
})

const devs1 = [
    {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: 'Maxim',lastName: 'Zhuk'
    },
    {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: 'Alex',lastName: 'Fedorov'
    },
    {
        stack: ['css,html', 'js', 'tdd', 'react'],
        firstName: 'Iliay',lastName: 'Shev'
    },
]

const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]
const devs3 = people.map(dimychTransformator)
const devs4 = people.map( man => ({
    stack: ['css,html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}))

const messages = people.map( man => `Hello ${man.name.split('')[0]}. Welcome to It-Incubator` )


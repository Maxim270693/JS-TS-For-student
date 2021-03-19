
type AddressType = {
    title: string
}

type UserType = {
    name: string
    age: number
    address: AddressType
}

function increaseAge(u: UserType) {
    u.age++
}

test('bug test', () => {
    let user = {
        name: 'Maxim',
        age: 27,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user)

    expect(user.age).toBe(28)

    let user2 = user
    user2.age = 1000

    expect(user.age).toBe(1000)

})
test('arary test', () => {
    let users = [{
        name: 'Maxim',
        age: 27
    },
    {
        name: 'Maxim',
        age: 27
    }]

    let admins = users
    admins.push({name: 'Vitalik', age: 14})

    expect(users[2]).toEqual({name: 'Vitalik', age: 14})
})
test('reference type test', () => {
    let user = {
        name: 'Maxim',
        age: 27,
        address: {
            title: 'Minsk'
        }
    }

    let user2: UserType = {
        name: 'Lika',
        age: 23,
        address: user.address
    }

    expect(user2.address.title).toBe('Minsk')
    expect(user.address.title).toBe('Minsk')

})

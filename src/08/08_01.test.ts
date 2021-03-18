
type UsersTypy = {
    [key: string]: {id: number, name: string}
}

let users: UsersTypy
beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Maxim'},
        '1212': {id: 1212, name: 'Lika'},
        '123322': {id: 123322, name: 'Sofa'},
        '1': {id: 1, name: 'Vlad'},
    }
})

test('should update corresponding user',() => {
    users['1'].name = 'Vlados'

    expect(users['1']).toEqual({id: 1, name:'Vlados'})

})
export const usersObj = {
    '0': 'Maxim',
    '1': 'Lika',
    '2': 'Sofa',
    '3': 'Vlad'
}

export type UsersPropsType = {
    [key: string]: {id: number, name: string}
}

export const users: UsersPropsType = {
    '101': {id: 101, name: 'Maxim'},
    '1212': {id: 1212, name: 'Lika'},
    '123322': {id: 123322, name: 'Sofa'},
    '1': {id: 1, name: 'Vlad'},
}
//users[1].id = 33
let user = {id: 100500, name: 'yura'} // найти пользователя
users[user.id] = user                 // добавить пользователя
delete users[user.id]                 // удалить пользователя

users[user.id.toString()] = user

export const usersArray = [
    {id: 101, name: 'Maxim'},
    {id: 1212, name: 'Lika'},
    {id: 123322, name: 'Sofa'},
    {id: 1, name: 'Vlad'}
    ]
//usersArray.find(u => u.id === 1)
//let usersCopy = [...usersArray.filter(),user]
//let usersArray = usersArray.filter(u => u.id !== user.id)
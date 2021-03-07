type TechnologiesPropsType = {
    id: number
    title: string
}

type CityPropsType = {
    country: string
    cityTitle: string
}

type AddressPropsType = {
    streetTitle: string
    city: CityPropsType
}

export type StudentPropsType = {
    name: string
    age: number
    isActive: boolean
    address: AddressPropsType
    technologies: Array<TechnologiesPropsType>
}

const student:StudentPropsType = {
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
console.log(student.age)
console.log(student.name)
console.log(student.address.city.cityTitle)
console.log(student.technologies[2].title)
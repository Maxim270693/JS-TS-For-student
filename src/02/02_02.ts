
export type StreetPropsType = {
    title: string
}

export type AddressPropsType = {
    number: number
    street: StreetPropsType
}

export type HousesPropsType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressPropsType
}

export type AddressType = {
    street: StreetPropsType
}

export type GovernmentBuildingsPropsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HousesPropsType>
    governmentBuildings: Array<GovernmentBuildingsPropsType>
    citizensNumber: number
}
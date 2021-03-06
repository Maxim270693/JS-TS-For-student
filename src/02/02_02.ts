
type StreetPropsType = {
    title: string
}

type AddressPropsType = {
    number: number
    street: StreetPropsType
}

type HousesPropsType = {
    buildedAt: number
    repaired: boolean
    address: AddressPropsType
}

type AddressType = {
    street: StreetPropsType
}

type GovernmentBuildingsPropsType = {
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
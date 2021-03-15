import {CityType, GovernmentBuildingsPropsType} from "../02/02_02";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter( h => h.address.street.title !== 'Happy street')
}

export function getBuildingsWithStaffCountGreaterThen(buildings: Array<GovernmentBuildingsPropsType>, number: number) {
    return buildings.filter( b => b.staffCount > number )
}
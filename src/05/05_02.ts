import {GovernmentBuildingsPropsType, HousesPropsType} from "../02/02_02";

export function getStreetsTitlesOfGovermentsBuildings(buildings: Array<GovernmentBuildingsPropsType>) {
    return buildings.map( b => b.address.street.title )
}

export function getStreetsTitlesOfHouses(houses: Array<HousesPropsType>) {
    return houses.map( h => h.address.street.title )
}

export function createMessages(houses: Array<HousesPropsType>) {
    return houses.map( h => `Hello guys from ${h.address.street.title}` )
}
import { Carpark } from "@/types/carparks";
import data from "../../data/selectLots.json"; 

export function fetchCarparkData(): Carpark[] {
    console.log("hello");
    return data.carparks.map(carPark => {
        return {
            id: carPark.id,
            address: carPark.address,
            lat: parseFloat(carPark.lat),
            lng: parseFloat(carPark.lng)
        }
    })
}
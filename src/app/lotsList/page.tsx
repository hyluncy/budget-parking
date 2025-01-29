"use client" 
import { fetchCarparkData } from "@/utils/fetchData";
import CarparksList from "../../components/CarparksList/CarparksList"; 
import Map from "../../components/Map/Map"; 

export default function LotsList() {

    const carParkData = fetchCarparkData();
    console.log(carParkData);
    return (
        <>
            <div>
                <h1>All lots</h1>
                <CarparksList carparks={carParkData}/>
            </div>

            <Map /> 
        </>
    ); 


}
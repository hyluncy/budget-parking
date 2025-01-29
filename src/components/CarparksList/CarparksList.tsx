import CarparkCard from "../CarparkCard/CarparkCard";
import { CarparksListProps } from "./CarparksList.types";

export default function CarparksList(props: CarparksListProps) {
    const { carparks } = props; 
    return (
        <>
            {
                carparks.map(carpark => {
                    return <CarparkCard carpark={carpark} key={carpark.id} />                
                }) 
            }
        </>
    )
}
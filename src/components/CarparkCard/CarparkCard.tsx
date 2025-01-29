
import { Carpark } from "@/types/carparks";

type CarparkCardProps = {
    carpark: Carpark
}

export default function CarparkCard(carparkCardProps: CarparkCardProps) {
    const { carpark } = carparkCardProps;

    return <div className='container'>
                <p>Id: {carpark.id}</p>
                <p>address: {carpark.address}</p>
                <p>lat: {carpark.lat}</p>
                <p>lng: {carpark.lng}</p>
                <br/>
            </div>
}
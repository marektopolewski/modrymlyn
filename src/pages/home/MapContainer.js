import React from "react"
import { Map, Marker } from "pigeon-maps"

const PigeonMap = ({ height }) => {
    const lat = 54.57370106361447;
    const lng = 18.394757456212833;

    const onClick = () => {
        window.open("https://goo.gl/maps/Te9WZqxWGadQH34N7", "_blank").focus();
    };

    return (
        <Map
            height={height}
            defaultCenter={[lat, lng]}
            defaultZoom={15} maxZoom={6}
            onClick={onClick}
        >
            <Marker width={50} anchor={[lat, lng]} onClick={onClick}/>
        </Map>
    );
}

export default PigeonMap;

import React from "react"
import { Map, Marker } from "pigeon-maps"

export default class PigeonMap extends React.Component {
    render() {
        const lat = 54.57370106361447;
        const lng = 18.394757456212833;
        return (
            <Map height={300} defaultCenter={[lat, lng]} defaultZoom={15}>
                <Marker width={50} anchor={[lat, lng]} />
            </Map>
        );
    }
}

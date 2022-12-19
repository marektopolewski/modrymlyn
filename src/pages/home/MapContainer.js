import React from "react"
import { Map, Marker } from "pigeon-maps"

export default class PigeonMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = { height: props.height };
    }

    render() {
        const lat = 54.57370106361447;
        const lng = 18.394757456212833;
        return (
            <Map height={this.state.height} defaultCenter={[lat, lng]} defaultZoom={15}>
                <Marker width={50} anchor={[lat, lng]} />
            </Map>
        );
    }
}

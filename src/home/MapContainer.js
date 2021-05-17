import React, { Component } from 'react';
import { useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

function Map() {
    const [viewport, setViewport] = useState({
        width: 400,
        height: 400,
        latitude: 54.573743,
        longitude: 18.394773,
        zoom: 15
    });

    return (
        <ReactMapGL
            mapboxApiAccessToken='pk.eyJ1IjoibWFyZWt0b3BvbGV3c2tpIiwiYSI6ImNrb3Nwa3FybTAzczcydmxnMnh1czNvdjYifQ.zgW37uFjZcgm1JbH_7rR4w'
            {...viewport}
            style={{ margin:'auto' }}
        >
            <Marker latitude={54.574224823290294} longitude={18.39448087356744}>
                <h1>📍</h1>
                <p style={{ marginTop: -10, marginLeft: -15 }}>Modry Młyn</p>
            </Marker>
        </ReactMapGL>
    );
}

export default Map;

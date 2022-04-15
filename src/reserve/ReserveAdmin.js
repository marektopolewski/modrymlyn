import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

export default class ReserveAdmin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reservations: []
        };
    }

    getReservations() {
        const reservations = [
            {
                id: 123,
                fname: "Marek",
                lname: "Topolewski",
                tel: "+48500009029",
                datetime: "date",
                ppl: 4,
                note: "N/A"
            }
        ];
        this.setState({ reservations: reservations });
    }

    render() {
        return (
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Home">
                    <p>123</p>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <p>123</p>
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    <p>123</p>
                </Tab>
            </Tabs>
        );
    }
}
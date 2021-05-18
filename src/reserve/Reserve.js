import React from 'react';
import { Container, Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import TimePicker from 'react-bootstrap-time-picker';
import RangeSlider from 'react-bootstrap-range-slider';
import { PersonFill, PeopleFill } from 'react-bootstrap-icons';

import './Reserve.css';

function matchExact(r, str) {
    let match = str.match(r);
    return match && str === match[0];
}

Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
}

function intToTime(val) {
    const hrs = Math.floor(val / (60 * 60));
    const min = (val - hrs * 60 * 60) / 60;
    return hrs + ":" + (min < 10 ? "0" + min : min)
}

export default class Reserve extends React.Component {

    constructor(props) {
        super(props);
        this.maxDays = 14;
        let temp = new Date();
        temp.setDate(temp.getDate() + this.maxDays)
        this.startDate = new Date().toISOString().split("T")[0];
        this.endDate = temp.toISOString().split("T")[0];
        this.startTime = "12:00";
        this.endTime = "20:00";
        this.maxPeople = 6;
        this.state = {
            validated: false,
            errors: {},
            fname: '', lname: '',
            tel: '',
            date: '', time: this.startTime,
            ppl: '2',
            note: ''
        }
    }

    update = (key, value) => {
        this.setState({ [key]: value });
        this.setState({ 
            errors: {
                ...this.state.errors,
                [key]: undefined
            }
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const errors = this.validate();
        if ( Object.keys(errors).length === 0 )
            alert('Sent')
        else {
            this.setState({ errors: errors });
        }
    }

    validate = () => {
        let errors = {}

        if (!this.state.fname || this.state.fname.length === 0)
            errors.fname = "Pole wymagane";
        else if (this.state.fname.length > 50)
            errors.fname = "Max dlugość to 50 znaków";
        else if (!matchExact(/^[A-Za-z]*$/, this.state.fname))
            errors.fname = "Dozowolone tylko litery A-Z";

        if (!this.state.lname || this.state.lname.length === 0)
            errors.lname = "Pole wymagane";
        else if (this.state.lname.length > 50)
            errors.lname = "Max dlugość to 50 znaków";
        else if (!matchExact(/^[A-Za-z]*$/, this.state.lname))
            errors.lname = "Dozowolone tylko litery A-Z";

        const tel = this.state.tel
            ? this.state.tel.replace(/\s+/g, '').replace(/-+/g, '')
            : undefined
        if (!tel || tel.length === 0)
            errors.tel = "Pole wymagane";
        else if (!matchExact(/^[0-9]{9}$/, tel))
            errors.tel = "Poprawny format: 123 456 789";
        
        if (!this.state.date || this.state.date.length === 0)
            errors.date = "Pole wymagane";
        else if (!this.state.time || this.state.time.length === 0)
            errors.time = "Pole wymagane";
        else {
            let selDate = new Date(this.state.date + 'T' + this.state.time + ':00')
            let curDate = new Date(this.startDate + 'T' + this.startTime + ':00')
            if (selDate < new Date())
                errors.time = "Wybrany termin minął";
            else if (selDate < curDate)
                errors.time = "Rezerwacja musi być złożona przed " + this.startTime + " bieżącego dnia";
        }

        if (this.state.note && this.state.note.length > 300)
            errors.note = "Maksymalnie 300 znaków";

        return errors;
    }

    render() {
        return (
            <Container className="wrapper">
                <Form className="form" onSubmit={this.handleSubmit} noValidate>
                    <Form.Group className="group">
                        <h4>Twoje dane:</h4>
                        <Row>
                            <Col sm>
                                <Form.Control type="text" placeholder="Imię" id="fname" isInvalid={!!this.state.errors.fname}
                                    value={this.state.fname} onChange={e => this.update('fname', e.target.value)}/>
                                <Form.Control.Feedback type="invalid">{this.state.errors.fname}</Form.Control.Feedback>
                            </Col>
                            <Col sm>
                                <Form.Control type="text" placeholder="Nazwisko" id="lname" isInvalid={!!this.state.errors.lname}
                                    value={this.state.lname} onChange={e => this.update('lname', e.target.value)}/>
                                <Form.Control.Feedback type="invalid">{this.state.errors.lname}</Form.Control.Feedback>
                            </Col>
                            <Col sm>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>+48</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control type="tel" placeholder="Telefon" id="tel" isInvalid={!!this.state.errors.tel}
                                        value={this.state.tel} onChange={e => this.update('tel', e.target.value)}/>
                                    <Form.Control.Feedback type="invalid">{this.state.errors.tel}</Form.Control.Feedback>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Form.Text className="text-muted">
                            Twoje dane nie zostaną udostępnione, potrzebne
                            są nam wyłącznie do potwierdzenia rezerwacji.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="group">
                        <h4>Szczegóły rezerwacji:</h4>
                        <Row>
                            <Col md>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text className="prep">Data</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control type="date" min={this.startDate} max={this.endDate}
                                        isInvalid={!!this.state.errors.date} value={this.state.date}
                                        onChange={e => this.update('date', e.target.value)} />
                                    <Form.Control.Feedback type="invalid">{this.state.errors.date}</Form.Control.Feedback>
                                </InputGroup>
                            </Col>
                            <Col md>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text className="prep">Godzina</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <TimePicker format={24} start={this.startTime} end={this.endTime}
                                        isInvalid={!!this.state.errors.time} value={this.state.time}
                                        onChange={e => this.update('time', intToTime(e))} />
                                    <Form.Control.Feedback type="invalid">{this.state.errors.time}</Form.Control.Feedback>
                                </InputGroup>
                            </Col>
                            <Col md>
                                <Row>
                                    <Col>
                                        <RangeSlider min={1} max={this.maxPeople} value={this.state.ppl}
                                            onChange={e => this.update('ppl', e.target.value)} />
                                    </Col>
                                    <Col>
                                        <span className="pplCnt">{ this.state.ppl }</span>
                                        { this.state.ppl === "1" ? <PersonFill size={25}/> : <PeopleFill size={25}/> }
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Form.Text className="text-muted">
                            Rezerwacje na termin późniejszy niż {this.maxDays} dni, poza godzinami pracy
                            lub powyżej {this.maxPeople} osób muszą być dokonane telefonicznie.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="group">
                        <Form.Control type="text" placeholder="Wiadomość do restauracji (opcjonalne)"
                            isInvalid={!!this.state.errors.note}
                            value={this.state.note} onChange={e => this.udpate('note', e.target.value)} />
                        <Form.Control.Feedback type="invalid">{this.state.errors.note}</Form.Control.Feedback>
                    </Form.Group>

                    <Button className="submit" variant="primary" type="submit">Rezerwuję</Button>
                </Form>
            </Container>
        );
    }
}
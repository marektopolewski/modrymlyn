import React from 'react';
import { Container, Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
import { PersonFill, PeopleFill } from 'react-bootstrap-icons';

import './Reserve.css';

function matchExact(r, str) {
    let match = str.match(r);
    return match && str === match[0];
}

export default class Reserve extends React.Component {

    constructor(props) {
        super(props);
        this.maxDays = 14;
        let temp = new Date();
        temp.setDate(temp.getDate() + this.maxDays)
        this.maxPeople = 6;
        this.state = {
            validated: false, errors: {}, hourOptions: [],
            startDate: '', endDate: '',

            fname: '', lname: '', tel: '',
            date: '', time: '', ppl: '2', note: ''
        }
        this.getDays();
    }

    update = (key, value) => {
        this.setState({ [key]: value });
        this.error(key, undefined);
    }

    error = (key, msg) => {
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
        if ( Object.keys(errors).length === 0 ) {
            const opts = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fname: this.state.fname,
                    lname: this.state.lname,
                    tel: this.state.tel,
                    datetime: this.state.date,
                    ppl: this.state.ppl,
                    note: this.state.note
                })
            };
            fetch('http://localhost:3000/reserve/confirm', opts)
                .then(async response => {
                    alert('OK, TODO');
                    this.clear();
                })
                .catch(err => {
                    alert(`
                        Ups! Coś poszło nie tak:/\n
                        Błąd: "${err}"\n\n
                        Skontaktuj się z restauracją żeby potwierdzić rezerwację
                    `)
                })
        }
        else {
            this.setState({ errors: errors });
        }
    }

    validate = () => {
        let errors = {}

        if (!this.state.fname || this.state.fname.length === 0)
            errors.fname = "Pole wymagane";
        else if (this.state.fname.length > 100)
            errors.fname = "Max dlugość to 100 znaków";
        else if (!matchExact(/^[A-Za-z]*$/, this.state.fname))
            errors.fname = "Dozowolone tylko litery A-Z";

        if (!this.state.lname || this.state.lname.length === 0)
            errors.lname = "Pole wymagane";
        else if (this.state.lname.length > 100)
            errors.lname = "Max dlugość to 100 znaków";
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
            if (selDate < new Date())
                errors.time = "Wybrany termin minął";
        }

        if (this.state.note && this.state.note.length > 500)
            errors.note = "Maksymalnie 500 znaków";

        return errors;
    }

    clear() {
        this.setState({ validated: false, errors: {}, hourOptions: [],
                        fname: '', lname: '', tel: '',
                        datetime: '', ppl: '2', note: '' });
    }

    getHours(dateInput, pplInput) {
        this.setState({ hourOptions: [] });
        let dateStr = dateInput ? dateInput : this.state.date;
        let pplStr = pplInput ? pplInput : this.state.ppl;
        if (!dateStr || dateStr.length === 0)
            return;
        let date = new Date(dateStr).toISOString();
        const opts = { method: 'GET' };
        fetch(`http://localhost:3000/reserve/hours?date=${date}&ppl=${pplStr}`, opts)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                if (!response.ok) {
                    const error = await response.text();
                    return Promise.reject(error);
                }
                if (!data || data.length === 0) {
                    this.error('date', 'Brak wystarczającej ilości miejsc w podanym terminie');
                    return;
                }
                this.setState({ hourOptions: data.map(i => {
                    return {
                        val: new Date(i.time),
                        str: new Date(i.time).toLocaleString(
                            navigator.language,
                            { hour: '2-digit', minute:'2-digit' }
                        )
                    }
                })});
            })
            .catch(err => {
                alert("Ups! Coś poszło nie tak:/\nBłąd: " + err + "\n\n" +
                    "Skontaktuj się z restauracją żeby potwierdzić rezerwację")
            })
    }

    getDays() {
        const opts = { method: 'GET' };
        fetch(`http://localhost:3000/reserve/days`, opts)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                if (!response.ok) {
                    const error = await response.text();
                    return Promise.reject(error);
                }
                if (!data || data.length === 0) {
                    return Promise.reject("Brak wolnych terminów w najbliższym czasie.");
                }
                this.setState({
                    startDate: new Date(data[0]).toISOString().split("T")[0],
                    endDate: new Date(data[data.length - 1]).toISOString().split("T")[0]
                })

            })
            .catch(err => {
                alert("Ups! Coś poszło nie tak:/\nBłąd: " + err + "\n\n" +
                    "Skontaktuj się z restauracją aby dokonać rezerwacji")
            })
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
                                    <Form.Control type="date" min={this.state.startDate} max={this.state.endDate}
                                        isInvalid={!!this.state.errors.date} value={this.state.date}
                                        onChange={e => {
                                            let d = e.target.value;
                                            this.update('date', d);
                                            this.getHours(d, undefined);
                                        }}/>
                                    <Form.Control.Feedback type="invalid">{this.state.errors.date}</Form.Control.Feedback>
                                </InputGroup>
                            </Col>
                            <Col md>
                                <Row>
                                    <Col>
                                        <RangeSlider min={1} max={this.maxPeople} value={this.state.ppl}
                                            onChange={e => {
                                                let p = e.target.value;
                                                this.update('ppl', p);
                                                this.getHours(undefined, p);
                                        }}/>
                                    </Col>
                                    <Col>
                                        <span className="pplCnt">{ this.state.ppl }</span>
                                        { this.state.ppl === "1" ? <PersonFill size={25}/> : <PeopleFill size={25}/> }
                                    </Col>
                                </Row>
                            </Col>
                            <Col md>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text className="prep">Godzina</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control as="select" custom disabled={this.state.hourOptions.length === 0}
                                        value={this.state.time} onChange={e => this.update('time', e)}
                                    >
                                        {this.state.hourOptions.map((h, idx) => {
                                            return (
                                                <option key={idx} value={h.val}>
                                                    {h.str}
                                                </option>
                                            );
                                        })}
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">{this.state.errors.time}</Form.Control.Feedback>
                                </InputGroup>
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
import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { ArrowRightCircle, ArrowLeftCircleFill } from 'react-bootstrap-icons';

import photo1 from '../assets/photo-1.jpeg'
import photo2 from '../assets/photo-2.jpeg'
import photo3 from '../assets/photo-3.jpeg'

import './Photos.css'

export default class Photos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headers: [
                "Kaszubskie a <i style=\"color:green\" }}>Wege</i>",
                "Sledze z pùlkama",
                "W przeddzień otwarcia...",
            ],
            descriptions: [
                [
                    "Czy w kuchni kaszubskiej znajdzie się coś dla wegetarian? U nas - tak! 🥗",
                    "Chrupiące kuleczki z kaszy gryczanej i boczniaka wypełnione kozim serem prosto z gospodarstwa \"Kaszubska Koza\" 🐐🐐🐐"
                ],
                [
                    "Nasza narodowa specjalność - śledzie 🐟🐟🐟",
                    "Mówi się, że kaszubskie kucharki potrafią przygotować je na 1000 sposobów!"
                ],
                [
                    "Czy macie ochotę skosztować dań kuchni kaszubskiej w nowoczesnej odsłonie? 🌼",
                    "Nasi kucharze przez wiele miesięcy poszukiwali receptur, składników i dostawców, aby stworzyć kartę dań, która przeniesie Was do magicznej krainy kaszubskich smaków 🍓"
                ]
            ],
            images: [
                photo3,
                photo2,
                photo1
            ]
        }
    }

    render() {
        return (
            <Container className="wrapper">
            <Carousel className="carousel"
                nextIcon={<ArrowRightCircle color="black" size={50} className="svgShadow" />}
                prevIcon={<ArrowLeftCircleFill color="black" size={50} className="svgShadow" />}
            >
                { this.state.headers.map((_, i) => {
                    return (
                        <Carousel.Item>
                            <Image className="d-block image" src={this.state.images[i]} alt={`Zdjęcie ${i}`} fluid />
                            <Carousel.Caption style={{ color:'black' }}>
                                <h3 dangerouslySetInnerHTML={{__html: this.state.headers[i]}}></h3>
                                { this.state.descriptions[i].map(desc => { return <p>{desc}</p> }) }
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }) }
            </Carousel>
            </Container>
        );
    }
}

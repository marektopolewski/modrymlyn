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
    render() {
        return (
            <Container className="wrapper">
            <Carousel className="carousel"
                nextIcon={<ArrowRightCircle color="black" size={50} className="svgShadow" />}
                prevIcon={<ArrowLeftCircleFill color="black" size={50} className="svgShadow" />}
            >
                <Carousel.Item>
                    <Image className="d-block image" src={photo3} alt="Zdjęcie 1" fluid />
                    <Carousel.Caption style={{ color:'black' }}>
                        <h3>Kaszubskie a <i style={{ color:'green' }}>Wege</i></h3>
                        <p>Czy w kuchni kaszubskiej znajdzie się coś dla wegetarian? U nas - tak! 🥗</p>
                        <p>Chrupiące kuleczki z kaszy gryczanej i boczniaka wypełnione
                           kozim serem prosto z gospodarstwa "Kaszubska Koza" 🐐🐐🐐</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Image className="d-block image" src={photo2} alt="Zdjęcie 2" fluid />
                    <Carousel.Caption style={{ color:'black' }}>
                        <h3>Sledze z pùlkama</h3>
                        <p>Nasza narodowa specjalność - śledzie 🐟🐟🐟</p>
                        <p>Mówi się, że kaszubskie kucharki potrafią przygotować je na 1000 sposobów!</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Image className="d-block image" src={photo1} alt="Zdjęcie 1" fluid />
                    <Carousel.Caption style={{ color:'black' }}>
                        <h3>W przeddzień otwarcia...</h3>
                        <p>Czy macie ochotę skosztować dań kuchni kaszubskiej w nowoczesnej odsłonie? 🌼</p>
                        <p>Nasi kucharze przez wiele miesięcy poszukiwali receptur, składników i dostawców,
                           aby stworzyć kartę dań, która przeniesie Was do magicznej krainy kaszubskich smaków 🍓</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Container>
        );
    }
}

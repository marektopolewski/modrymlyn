import React, { Component } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { ArrowRightCircle, ArrowLeftCircleFill } from 'react-bootstrap-icons';

import photo1 from '../assets/photo-1.jpeg'
import photo2 from '../assets/photo-2.jpeg'

import './Photos.css'

export default class Photos extends React.Component {
    render() {
        return (
            <Container style={{ marginTop:'2rem', height:'100%' }}>
            <Carousel
                nextIcon={<ArrowRightCircle color="black" size={50} className="svgShadow" />}
                prevIcon={<ArrowLeftCircleFill color="black" size={50} className="svgShadow" />}
                style={{ height:'100%' }}
            >
                <Carousel.Item>
                    <Image
                        className="d-block"
                        style={{ height:'60vh', margin:'auto' }}
                        src={photo2}
                        alt="First slide"
                        fluid
                    />
                    <Carousel.Caption style={{ color:'black' }}>
                        <h3>Sledze z pùlkama</h3>
                        <p>Nasza narodowa specjalność - śledzie 🐟🐟🐟</p>
                        <p>Mówi się, że kaszubskie kucharki potrafią przygotować je na 1000 sposobów!</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Image
                        className="d-block"
                        style={{ height:'60vh', margin:'auto' }}
                        src={photo1}
                        alt="First slide"
                        fluid
                    />
                    
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

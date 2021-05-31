import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { ArrowRightCircle, ArrowLeftCircleFill } from 'react-bootstrap-icons';

import photo1 from '../assets/photo-1.jpeg'
import photo2 from '../assets/photo-2.jpeg'
import photo3 from '../assets/photo-3.jpeg'
import photo4 from '../assets/photo-4.jpeg'
import photo5 from '../assets/photo-5.jpeg'
import photo6 from '../assets/photo-6.jpeg'
import photo7 from '../assets/photo-7.jpeg'

import './Photos.css'

export default class Photos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headers: [
                "Tym czasem nad stawem... 🌤",
                "Witómë! 😍",
                "Bąbelwòda 🥤",
                "Szmórowóné krowié miãso",
                "Kaszubskie a <i style=\"color:green\" }}>Wege</i>",
                "Sledze z pùlkama",
                "W przeddzień otwarcia...",
            ],
            descriptions: [
                [
                    "Kiedy pogoda dopisuje, to nawet najbardziej pracowici Kaszëbi chetnię odpoczną nad stawem w parku Starowiejskim.",
                    "🌳 📵 🏝"
                ],
                [
                    "I nadszedł nareszcie ten dzień, kiedy możemy Was zaprosić do środka!",
                    "I pochwalić się wnętrzem, które powstało dzięki wspaniałej Oli Gago Home i niezastąpionej Uli Ulubione studio "
                    + "oraz całej ekipie naszych cudownych pomocników, którzy włożyli mnóstwo pracy i serca, "
                    + "aby pomóc nam zrealizować nasze marzenie o rodzinnej, klimatycznej restauracji.",
                    "Dziękujemy ❤️❤️❤️"
                ],
                [
                    "Czytaj: bombel łeda = 🍋 + 🧊  + 🍓",
                    "Cudownie orzeźwiająca. Naturalna. Pyszna",
                    "Nie tylko na kaszubskie podniebienie 😋"
                ],
                [
                    "Kaszubska pieczeń wołowa, która została wpisana na prestiżową listę produktów tradycyjnych 🏆",
                    "Jej przygotowanie wymaga: tuzin składników najwyższej jakości, kopę czasu, dużą garść miłości kucharza 👨‍🍳",
                    "Czy warto? Gwarantujemy, że warto! ❤️‍🔥"
                ],
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
                photo7,
                photo6,
                photo5,
                photo4,
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
                        <Carousel.Item key={i}>
                            <Image className="d-block image" src={this.state.images[i]} alt={`Zdjęcie ${i}`} fluid />
                            <Carousel.Caption style={{ color:'black' }}>
                                <h3 dangerouslySetInnerHTML={{__html: this.state.headers[i]}}></h3>
                                { this.state.descriptions[i].map((desc,j) => {
                                    return <p key={j}>{desc}</p>
                                }) }
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }) }
            </Carousel>
            </Container>
        );
    }
}

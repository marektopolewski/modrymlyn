import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import { ArrowRightCircle, ArrowLeftCircleFill } from 'react-bootstrap-icons';

import data from './photo-data.json';
import './Photos.css'

export default class Photos extends React.Component {
    render() {
        return (
            <Container className="wrapper">
            <Carousel className="carousel"
                nextIcon={<ArrowRightCircle color="black" size={50} className="svgShadow" />}
                prevIcon={<ArrowLeftCircleFill color="black" size={50} className="svgShadow" />}
            >
                { data.map((item, itemIdx) => {
                    return (
                        <Carousel.Item key={itemIdx}>
                            <Image className="d-block image" alt={`Zdjęcie ${itemIdx}`} fluid
                                   src={require(`../assets/photo-${data.length - itemIdx}.jpeg`)?.default} />
                            <Carousel.Caption style={{ color:'black' }}>
                                <h3 dangerouslySetInnerHTML={{__html: item.header}}></h3>
                                {
                                    item.paragraphs.map((para, paraIdx) => {
                                        return <p key={paraIdx}>{para}</p>
                                    })
                                }
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }) }
            </Carousel>
            </Container>
        );
    }
}

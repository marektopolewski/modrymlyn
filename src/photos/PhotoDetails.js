import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import { Container, Image } from "react-bootstrap";

import './PhotoDetails.css'

const PhotoDetails = () => {
    let { id } = useParams();

    const [details, setDetails] = useState(undefined);
    useEffect(() => {
        const photoData = require('./photo-data.json');
        if (!photoData || id >= photoData.length)
            return;
        setDetails({
            id: photoData.length - id,
            ...photoData[id]
        });
    }, [id]);

    if (!details)
        return <p>Loading...</p>;

    return (
        <Container className="details-wrapper">
        <Card border="light">
            <div className="details-image">
                <Image className="details-image" src={require(`../assets/photos/photo-${details.id}.jpeg`)?.default} fluid />
            </div>
            <Card.Body>
                <Card.Title dangerouslySetInnerHTML={{__html: details.header}}></Card.Title>
                <br/>
                {
                    details.paragraphs.map((para, paraIdx) => (
                        <Card.Text key={paraIdx}>{para}</Card.Text>
                    ))
                }
            </Card.Body>
        </Card>
        </Container>
    );
};

export default PhotoDetails;

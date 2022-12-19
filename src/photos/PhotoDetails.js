import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import { Container, Image } from "react-bootstrap";

import styles from './PhotoDetails.module.css'
import TextWithBackground from "../components/TextWithBackground";

const formatDate = (str) => {
    if (!str || str.length === 0)
        return "";
    const opts = { day: 'numeric', month: 'long', year: 'numeric' };
    return (new Date(str)).toLocaleDateString('pl-PL', opts);
};

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
        <Container className={styles["details-wrapper"]}>
        <Card className={styles["details-card"]}>
            <div className={styles["details-image"]}>
                <Image src={require(`../assets/photos/photo-${details.id}.jpeg`)?.default} fluid />
            </div>
            <TextWithBackground>
                <Card.Title className={styles.title} dangerouslySetInnerHTML={{__html: details.header}}></Card.Title>
                <Card.Subtitle className={styles.subtitle}>{formatDate(details.date)}</Card.Subtitle>
                <br/>
                {
                    details.paragraphs.map((para, paraIdx) => (
                        <Card.Text key={paraIdx}>{para}</Card.Text>
                    ))
                }
            </TextWithBackground>
        </Card>
        </Container>
    );
};

export default PhotoDetails;

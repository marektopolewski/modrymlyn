import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import './Photos.css'

const Photo = ({ idx, text }) => (
    <Image
        className="d-block image" fluid
        alt={`Zdjęcie ${idx} - ${text}`}
        src={require(`../assets/photo-${idx}.jpeg`)?.default}
    />
);

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        setPhotos(require('./photo-data.json'));
    }, []);
    return (
        <Container className="wrapper">
        { photos.map((photo, idx) => (
                <a key={idx} href={`./photo/${idx}`} className="photo-wrapper">
                    <Photo idx={photos.length - idx} text={photo.header} />
                </a>
            ))
        }
        </Container>
    );
}

export default Photos;

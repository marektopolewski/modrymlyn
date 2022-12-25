import { useCallback, useState } from 'react';

import Button from 'react-bootstrap/Button';

import LazyImage from 'components/LazyImage'
import Container from 'components/Container'

import styles from './Photos.module.css'

import PHOTO_DATA from './photo-data.json'
const PHOTO_BATCH_SIZE = 8;

const Photo = ({ idx, text }) => (
    <LazyImage
        className={styles["photo-image"]}
        text={`Zdjęcie ${idx} - ${text}`}
        src={require(`assets/photos/photo-${idx}.jpeg`)?.default}
    />
);

const Photos = () => {
    const [photos, setPhotos] = useState(PHOTO_DATA.slice(0, PHOTO_BATCH_SIZE));
    const hasMore = photos.length < PHOTO_DATA.length;

    const loadMore = useCallback(() => {
        setPhotos(photos => PHOTO_DATA.slice(0, photos.length + PHOTO_BATCH_SIZE));
    }, []);

    return (<>
        <Container className={styles.wrapper}>
        { photos.map((photo, idx) => (
                <a key={idx} href={`./photo/${idx}`} className={styles["photo-wrapper"]}>
                    <Photo idx={PHOTO_DATA.length - idx} text={photo.header} />
                </a>
            ))
        }
        </Container>
        {hasMore && <Container className={styles.wrapper}>
            <Button onClick={loadMore}>Pokaż więcej</Button>
        </Container>}
    </>);
}

export default Photos;

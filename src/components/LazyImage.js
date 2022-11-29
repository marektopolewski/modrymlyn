import { LazyLoadImage } from "react-lazy-load-image-component";

import placeholder from '../assets/icons/placeholder.jpg'

const LazyImage = ({ text, src }) => (
    <LazyLoadImage
        className="d-block image"
        placeholderSrc={placeholder}
        alt={text}
        src={src}
    />
);

export default LazyImage;

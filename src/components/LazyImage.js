import { LazyLoadImage } from "react-lazy-load-image-component";

import placeholder from '../assets/icons/placeholder.svg'

const LazyImage = (props) => {
    const { text, src, className, ...rest } = props
    return (
        <LazyLoadImage
            className={`d-block ${className}`}
            placeholderSrc={placeholder}
            alt={text}
            src={src}
            {...rest}
        />
    );
};

export default LazyImage;

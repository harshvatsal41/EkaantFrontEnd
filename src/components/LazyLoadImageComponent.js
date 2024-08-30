import React, { useState, useEffect } from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";

const LazyLoadImageComponent = ({ src, alt }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        let timer;
        if (isHovered) {
            timer = setTimeout(() => {
                setShouldLoad(true);
            }, 1000); // 2 seconds delay
        }
        return () => clearTimeout(timer); // Cleanup on unmount or hover change
    }, [isHovered]);

    return (
        <div style={{height:100,width:100}}
            className="image-container"
            onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(true)}
        >
            {/*<LazyLoadImage*/}
            {/*    src={src}*/}
            {/*    effect="blur"*/}
            {/*/>*/}
            {/*<img*/}
            {/*    src={src}*/}
            {/*    alt={alt}*/}
            {/*    loading="lazy"*/}
            {/*/>*/}
            {shouldLoad ? (
                <img src={src} alt={alt} />
            ) : (
                <div className="placeholder">
                    {isHovered ? 'Loading image...' : 'Hover to load image'}
                </div>
            )}
        </div>
    );
};

export default LazyLoadImageComponent;

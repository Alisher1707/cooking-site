import React, { useState, useEffect, useRef } from 'react';
import './LazyImage.css';

const LazyImage = ({
  src,
  alt = '',
  className = '',
  placeholderSrc = null,
  threshold = 0.1,
  rootMargin = '50px',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    // Check if Intersection Observer is supported
    if (!('IntersectionObserver' in window)) {
      // If not supported, load image immediately
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Once the image is in view, we can disconnect the observer
            observer.disconnect();
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: rootMargin,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (observer && imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [threshold, rootMargin]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = (e) => {
    console.error(`Failed to load image: ${src}`);
    // Optionally set a fallback image
    e.target.src = placeholderSrc || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImage not found%3C/text%3E%3C/svg%3E';
  };

  return (
    <div
      ref={imgRef}
      className={`lazy-image-container ${className}`}
      {...props}
    >
      {!isInView && (
        <div className="lazy-image-placeholder">
          {placeholderSrc ? (
            <img src={placeholderSrc} alt={alt} className="lazy-image-placeholder-img" />
          ) : (
            <div className="lazy-image-skeleton">
              <div className="lazy-image-skeleton-shimmer"></div>
            </div>
          )}
        </div>
      )}

      {isInView && (
        <>
          {!isLoaded && (
            <div className="lazy-image-placeholder">
              {placeholderSrc ? (
                <img src={placeholderSrc} alt={alt} className="lazy-image-placeholder-img" />
              ) : (
                <div className="lazy-image-skeleton">
                  <div className="lazy-image-skeleton-shimmer"></div>
                </div>
              )}
            </div>
          )}
          <img
            src={src}
            alt={alt}
            className={`lazy-image ${isLoaded ? 'lazy-image-loaded' : 'lazy-image-loading'}`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
        </>
      )}
    </div>
  );
};

export default LazyImage;

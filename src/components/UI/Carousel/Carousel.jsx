import React, {useState, useEffect, useRef} from 'react';
import styles from './Carousel.module.css';

const Carousel = ({children, visibleItems = 1, gap = 0}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const [accumulatedScroll, setAccumulatedScroll] = useState(0);

    const scrollThreshold = 300;
    const totalItems = React.Children.count(children);

    useEffect(() => {
        const handleScroll = (event) => {
            event.preventDefault();

            setAccumulatedScroll(prevAccumulatedScroll => {
                const newAccumulatedScroll = prevAccumulatedScroll + event.deltaY;

                if (Math.abs(newAccumulatedScroll) >= scrollThreshold) {
                    if (newAccumulatedScroll > 0) {
                        handleNext();
                    } else {
                        handlePrev();
                    }
                    return 0;
                }

                return newAccumulatedScroll;
            });
        };

        carouselRef.current.addEventListener('wheel', handleScroll);

        return () => {
            carouselRef.current.removeEventListener('wheel', handleScroll);
        }
    }, [])

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex !== 0 ? prevIndex - 1 : prevIndex
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex !== totalItems - 1 ? prevIndex + 1 : prevIndex
        );
    };

    const trackWidth = `calc(${100 * totalItems / visibleItems}% + ${gap * (totalItems / visibleItems - 1)}px)`;
    const itemWidth = `calc(${100 / totalItems}% - ${gap - (gap / visibleItems)}px)`;
    const translateX = `calc(-${currentIndex * (100 / totalItems)}% - ${currentIndex * (gap / totalItems)}px + ${100 / totalItems}% + ${gap / totalItems}px)`;

    return (
        <div className={styles.carousel} ref={carouselRef}>
            <button onClick={handlePrev} className={`${styles.carouselButton} ${styles.prevButton}`}>
                Prev
            </button>
            <div className={styles.carouselContent}>
                <div className={styles.carouselTrack}
                     style={{
                         width: trackWidth,
                         transform: `translateX(${translateX})`,
                         gap: `${gap}px`,
                         transition: 'transform 0.5s ease',
                     }}>
                    {React.Children.map(children, (child, index) => {
                        const isActive = currentIndex === index;

                        return React.cloneElement(child, {
                            className: `${styles.carouselItem} ${isActive ? styles.current: ''} ${child.props.className || ''} ${isActive ? `current`: ''}`,
                            style: { width: itemWidth, ...child.props.style }
                        });
                    })}
                </div>
            </div>
            <button onClick={handleNext} className={`${styles.carouselButton} ${styles.nextButton}`}>
                Next
            </button>
        </div>
    );
};

export default Carousel;

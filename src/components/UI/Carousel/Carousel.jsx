import React, {useState, useEffect, useRef} from 'react';
import styles from './Carousel.module.css';

const Carousel = ({children, visibleItems = 1, gap = 0}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const [accumulatedScroll, setAccumulatedScroll] = useState(0);

    const touchStartX = useRef(0);
    const scrollThreshold = 300;
    const totalItems = React.Children.count(children);
    visibleItems = window.innerWidth < 901 ? 1 : visibleItems;

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

        const handleTouchStart = (event) => {
            touchStartX.current = event.touches[0].clientX;
        };

        const handleTouchEnd = (event) => {
            const touchEndX = event.changedTouches[0].clientX;
            const touchDelta = touchStartX.current - touchEndX;

            if (Math.abs(touchDelta) > 30) {
                if (touchDelta > 0) {
                    handleNext();
                } else {
                    handlePrev();
                }
            }
        };

        const carousel = carouselRef.current;
        carousel.addEventListener('wheel', handleScroll);
        carousel.addEventListener('touchstart', handleTouchStart);
        carousel.addEventListener('touchend', handleTouchEnd);

        return () => {
            if (carousel) {
                carousel.removeEventListener('wheel', handleScroll);
                carousel.removeEventListener('touchstart', handleTouchStart);
                carousel.removeEventListener('touchend', handleTouchEnd);
            }
        };
    }, []);


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
    const itemWidth = `calc(${trackWidth / totalItems}%)`;
    const translateX = window.innerWidth < 901 ? `calc(-${currentIndex * (100 / totalItems)}% - ${currentIndex * (gap / totalItems)}px)` : `calc(-${currentIndex * (100 / totalItems)}% - ${currentIndex * (gap / totalItems)}px + ${100 / totalItems}% + ${gap / totalItems}px)`;

    return (
        <div className={styles.carousel} ref={carouselRef}>
            <button onClick={handlePrev} className={`${styles.carouselButton} ${styles.prevButton} cursorPointer`}>
                <img src="/images/circle-arrows.png" alt="arrow"/>
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
                            className: `${styles.carouselItem} ${isActive ? styles.current: ''} ${child.props.className || ''} ${isActive ? `current cursorPointer`: ''}`,
                            style: { width: itemWidth, ...child.props.style },
                            onClick: (event) => {
                                if (!isActive) {
                                    event.preventDefault();
                                }
                                setCurrentIndex(index);
                            },
                        });
                    })}
                </div>
            </div>
            <button onClick={handleNext} className={`${styles.carouselButton} ${styles.nextButton} cursorPointer`}>
                <img src="/images/circle-arrows.png" alt="arrow"/>
            </button>
        </div>
    );
};

export default Carousel;

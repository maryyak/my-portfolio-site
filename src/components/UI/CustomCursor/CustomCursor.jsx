import React, {useState, useEffect} from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
    const [positionCursor, setPositionCursor] = useState({x: 0, y: 0});
    const [positionOutline, setPositionOutline] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPositionCursor({x: event.clientX, y: event.clientY});
            setTimeout(() => {setPositionOutline({x: event.clientX, y: event.clientY})}, 100);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div
                className={styles.customCursor}
                style={{left: `${positionCursor.x}px`, top: `${positionCursor.y}px`}}
            />
            <div
                className={styles.customCursorOutline}
                style={{left: `${positionOutline.x}px`, top: `${positionOutline.y}px`}}
            />
        </>
    )
};

export default CustomCursor;

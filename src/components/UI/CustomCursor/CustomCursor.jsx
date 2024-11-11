import React, { useState, useEffect } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor = () => {
    const [positionCursor, setPositionCursor] = useState({ x: 0, y: 0 });
    const [positionOutline, setPositionOutline] = useState({ x: 0, y: 0 });
    const [mousePressed, setMousePressed] = useState(false);
    const [cursorHidden, setCursorHidden] = useState(true);
    const [cursorPointer, setCursorPointer] = useState(false);
    const [cursorMagnified, setCursorMagnified] = useState(false);

    useEffect(() => {
        if (window.innerWidth < 901) {
            return;
        }

        const handleMouseMove = (event) => {
            setCursorHidden(false);
        };

        window.addEventListener('mousemove', handleMouseMove, { once: true });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth < 901) {
            return;
        }

        const handleMouseMove = (event) => {
            setPositionCursor({ x: event.clientX, y: event.clientY });
            setTimeout(() => {
                setPositionOutline({ x: event.clientX, y: event.clientY });
            }, 100);
        };

        const handleMouseDown = () => setMousePressed(true);
        const handleMouseUp = () => setMousePressed(false);
        const handleMouseOver = (event) => {
            const element = event.target;
            setCursorPointer(!!element.closest('.cursorPointer'));
            setCursorMagnified(!!element.closest('.magnified'));
        };

        const handleMouseOut = () => setCursorPointer(false);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.body.addEventListener('mouseover', handleMouseOver);
        document.body.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.body.removeEventListener('mouseover', handleMouseOver);
            document.body.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    if (window.innerWidth < 901) {
        return null;
    }

    return (
        <>
            <div
                className={`${styles.customCursor} ${cursorHidden ? styles.hidden : ''} ${mousePressed ? styles.pressed : ''} ${cursorPointer ? styles.pointer : ''}`}
                style={{ left: `${positionCursor.x}px`, top: `${positionCursor.y}px` }}
            />
            <div
                className={`${styles.customCursorOutline} ${cursorHidden ? styles.hidden : ''} ${mousePressed ? styles.pressed : ''} ${cursorPointer ? styles.pointer : ''} ${cursorMagnified ? styles.magnified : ''}`}
                style={{ left: `${positionOutline.x}px`, top: `${positionOutline.y}px` }}
            />
        </>
    );
};

export default CustomCursor;
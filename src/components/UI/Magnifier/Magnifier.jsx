import React, {useState} from 'react';
import styles from './Magnifier.module.css'; // Импорт стилей

const Magnifier = ({src, zoomLevel = 2}) => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [hideMagnifier, setHideMagnifier] = useState(true);
    const [backgroundSize, setBackgroundSize] = useState(0);

    const handleMouseMove = (e) => {
        const {left, top, width, height} = e.target.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        setTimeout(() => {
            setPosition({x: x / width * 100, y: y / height * 100})
        }, 100);

        setBackgroundSize(e.target.height / 120)
    };

    return (
        <div
            className={`${styles.imgContainer} magnified`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setTimeout(() => {setHideMagnifier(false)}, 100)}
            onMouseLeave={() => setTimeout(() => {setHideMagnifier(true)}, 100)}
        >
            <img src={src} alt="Magnified" className={`${styles.image} magnified`} draggable={false}/>
            <div
                className={`${styles.magnifier} ${hideMagnifier ? styles.hide : styles.show}`}
                style={{
                    backgroundImage: `url(${src})`,
                    backgroundSize: `${100 * zoomLevel * backgroundSize}%`,
                    backgroundPosition: `${position.x}% ${position.y}%`,
                    top: `${position.y}%`,
                    left: `${position.x}%`,
                }}
            />
        </div>
    );
};

export default Magnifier;

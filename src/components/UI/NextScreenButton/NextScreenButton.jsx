import React from 'react';
import { ReactComponent as BtnImage } from '../../../assets/images/DownButton.svg';
import styles from './NextScreenButton.module.css'

const NextScreenButton = ({to}) => {
    const handleClick = () => {
        const element = typeof to === 'string' ? document.querySelector(to) : to.current;
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`${styles.nextScreenButton} cursorPointer`}
             onClick={handleClick}
        >
            <BtnImage viewBox="0 0 512 512" className={styles.nextScreenButtonImg} />
        </div>
    );
};

export default NextScreenButton;
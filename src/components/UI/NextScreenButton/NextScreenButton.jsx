import React from 'react';
import {ReactComponent as BtnImage} from '../../../assets/svg/DownButton.svg';
import styles from './NextScreenButton.module.css'
import AnchorScroll from "../../AnchorScroll";

const NextScreenButton = ({to}) => {
    return (
        <AnchorScroll to={to}>
            <div className={`${styles.nextScreenButton} cursorPointer`}>
                <BtnImage viewBox="0 0 512 512" className={styles.nextScreenButtonImg}/>
            </div>
        </AnchorScroll>
    );
};

export default NextScreenButton;
import React, { useEffect } from 'react';
import styles from './DroppingText.module.css';

const DEFAULT_OPTIONS = {
    textSelector: ".puddle",
    letterClassName: "puddle__letter",
    dropsClassName: "combined-puddles",
    delayBetweenDrops: 95,
    dropTypes: 10,
    wordAngleRange: [-3, 3]
};

const DroppingText = ({ options = DEFAULT_OPTIONS, text }) => {

    const injectSVGFilter = () => {
        const filter = `
      <svg style="display:none;">
        <filter id="drops-filter" x="-50%" width="200%" y="-50%" height="200%" color-interpolation-filters="sRGB">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
        </filter>
      </svg>
    `;
        document.querySelector('.canvas').insertAdjacentHTML("beforeend", filter);
    };

    const wrapLetters = (word) => {
        return Array.from(word).map((letter) => {
            const className = `${styles[options.letterClassName]} ${styles[`${options.letterClassName}`]}`;
            return <div className={className} key={Math.random()}>{letter}</div>;
        });
    };

    const addDelayToEachLetter = () => {
        const letters = document.querySelectorAll(`.${styles[options.letterClassName]}`);
        Array.from(letters, ($letter, index) => {
            const delay = index * options.delayBetweenDrops;
            $letter.style.cssText += `--delay:${delay}ms`;
        });
    };

    useEffect(() => {
        injectSVGFilter();
        addDelayToEachLetter();
        document.querySelector('.canvas').classList.add(styles["canvas--animated"]);
    }, []);

    return (
        <div className="canvas">
            <div className={styles.puddle}>
                {wrapLetters(text)}
            </div>
        </div>
    );
};

export default DroppingText;
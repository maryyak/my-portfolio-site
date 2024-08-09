import React, {useEffect, useRef} from 'react';
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
    const containerRef = useRef(null);

    const injectSVGFilter = () => {
        const filter = `
      <svg style="display:none;">
        <filter id="drops-filter" x="-50%" width="200%" y="-50%" height="200%" color-interpolation-filters="sRGB">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
        </filter>
      </svg>
    `;
        containerRef.current.insertAdjacentHTML("beforeend", filter);
    };

    const wrapLetters = (word) => {
        return Array.from(word).map((letter) => {
            const className = `${styles[options.letterClassName]} ${styles[`${options.letterClassName}`]}`;
            return <div className={className} key={Math.random()}>{letter}</div>;
        });
    };

    const addDelayToEachLetter = () => {
        const letters = containerRef.current.querySelectorAll(`.${styles[options.letterClassName]}`);
        console.log(text, letters)
        Array.from(letters, ($letter, index) => {
            const delay = index * options.delayBetweenDrops;
            $letter.style.cssText += `--delay:${delay}ms`;
        });
    };

    useEffect(() => {
        injectSVGFilter();
        addDelayToEachLetter();

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    containerRef.current.classList.add(styles["canvas--animated"]);
                }
            });
        }, { threshold: 0.1 });

        const currentRef = containerRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div className={styles.canvas} ref={containerRef}>
            <div className={styles.puddle}>
                {wrapLetters(text)}
            </div>
        </div>
    );
};

export default DroppingText;
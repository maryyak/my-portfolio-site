import {useEffect, useRef} from 'react';
import styles from './Loader.module.css';
import styled from 'styled-components';

const Div = styled.div.withConfig({
    shouldForwardProp: (prop) => !['delay'].includes(prop),
})`
    &::before {
        content: '';
        animation-delay: ${({delay}) => `calc(var(--loader-delay) * -${delay})`};
    }
`;

const Loader = ({completeAnimation}) => {
    const loaderRef = useRef(null);

    useEffect(() => {
        if (completeAnimation) {
            loaderRef.current.classList.add(styles.animate);
        }
    }, [completeAnimation]);

    return (
        <div ref={loaderRef} className={styles.loader}>
            <div className={styles.dots}>
                {Array.from({length: 12}).map((_, i) => (
                    <Div delay={i} key={i} className={styles.dot}
                         style={{animationDelay: 'calc(var(--loader-delay) * -' + i + '), calc(var(--loader-delay) * -' + i * 4 + ')'}}></Div>
                ))}
            </div>
            <div className={styles.ring}></div>
        </div>
    );
};

export default Loader;
import React from 'react';
import styles from './SplinesBackground.module.css';
import {motion} from 'framer-motion';

const DEFAULT_OPTIONS = {
    transition: { duration: 2 }
};

const SplinesBackground = ({ options = DEFAULT_OPTIONS}) => {
    return (
        <div className={styles.backDecorations}>
            <motion.div className={styles.splinesSmallImage}
                        initial={{
                            opacity: 0,
                            rotate: 150
                        }}
                        animate={{
                            opacity: 1,
                            rotate: 0
                        }}
                        transition={options.transition}>
                <img src="/images/Splines-2.png" alt="Splines" draggable="false"/>
            </motion.div>
            <motion.div className={styles.splinesLargeImage}
                        initial={{
                            opacity: 0,
                            rotate: 150
                        }}
                        animate={{
                            opacity: 1,
                            rotate: 0
                        }}
                        transition={options.transition}>
                <img src="/images/Splines-2.png" alt="Splines" draggable="false"/>
            </motion.div>
            <motion.div className={styles.circleSmallImage}
                        initial={{
                            opacity: 0,
                            rotate: 150,
                            left: '2%',
                            top: '7%'
                        }}
                        animate={{
                            opacity: 1,
                            rotate: 0,
                            left: '19%',
                            top: '30%'
                        }}
                        transition={options.transition}>
                <img src="/images/Circle-2.png" alt="Splines" draggable="false"/>
            </motion.div>
            <motion.div className={styles.circleLargeImage}
                        initial={{
                            opacity: 0,
                            rotate: 150,
                            right: '-11%',
                            bottom: '-10%'
                        }}
                        animate={{
                            opacity: 1,
                            rotate: 0,
                            right: '4%',
                            bottom: '5%'
                        }}
                        transition={options.transition}>
                <img src="/images/Circle-1.png" alt="Splines" draggable="false"/>
            </motion.div>
        </div>
    );
};

export default SplinesBackground;
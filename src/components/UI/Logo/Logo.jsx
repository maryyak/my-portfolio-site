import React from 'react';
import styles from './Logo.module.css';
import {motion} from 'framer-motion';

const Logo = ({additionalStyles}) => {
    return (
        <motion.div className={`${styles.logo} ${styles[additionalStyles]}`}
                    initial={{
                        opacity: 0,
                        transform: 'scale(0.6)'
                    }}
                    animate={{
                        opacity: 1,
                        transform: 'scale(1)'
                    }}
                    transition={{ duration: 0.5 }}>
            maryyak
        </motion.div>
    );
};

export default Logo;
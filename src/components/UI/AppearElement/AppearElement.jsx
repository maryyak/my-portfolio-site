import React, {useEffect, useRef} from 'react';
import styles from './AppearElement.module.css'
import useObserver from "../../../hooks/useObserver";

const AppearElement = ({from, children}) => {
    const containerRef = useRef(null);
    useObserver({containerRef: containerRef, classToAdd: "animate", stylesheet: styles});

    const existingClasses = children.props.className || '';

    const clonedChild = React.cloneElement(children, {
        ref: containerRef,
        className: `${existingClasses} ${styles[`${from}Appear`]}`,
    });

    return clonedChild;
};

export default AppearElement;
import React from 'react';

const AnchorScroll = ({ to, children }) => {
    const handleClick = () => {
        const element = typeof to === 'string' ? document.querySelector(to) : to.current;
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const clonedChild = React.cloneElement(children, {
        onClick: handleClick,
    });

    return clonedChild;
};

export default AnchorScroll;

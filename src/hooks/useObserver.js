import React, {useEffect} from 'react';

const UseObserver = ({containerRef, classToAdd, stylesheet}) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    containerRef.current.classList.add(stylesheet[classToAdd]);
                }
            });
        }, { threshold: 0.2 });

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
};

export default UseObserver;
import React, {useEffect} from 'react';

const UseObserver = ({containerRef, classToAdd, stylesheet, id}) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    containerRef.current.classList.add(stylesheet[classToAdd]);
                    localStorage.setItem(`animated-${id}`, 'true')
                }
            });
        }, { threshold: 0.2 });

        const currentRef = containerRef.current;
        const isAnimated = localStorage.getItem(`animated-${id}`);
        if (currentRef && !isAnimated) {
            observer.observe(currentRef);
        } else {
            containerRef.current.classList.add(stylesheet[classToAdd]);
            return;
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
};

export default UseObserver;
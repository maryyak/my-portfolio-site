import React, { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const AnchorScroll = ({ to, children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = (event) => {
        event.preventDefault();

        if (to.startsWith('#')) {
            const targetElement = document.querySelector(to);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(to);
        }
    };

    useEffect(() => {
        if (location.hash) {
            const targetElement = document.querySelector(location.hash);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <Link to={to} onClick={handleClick}>
            {children}
        </Link>
    );
};

export default AnchorScroll;

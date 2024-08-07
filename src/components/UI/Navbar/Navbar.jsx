import React from 'react';
import {Link, Element, animateScroll as scroll} from 'react-scroll';
import cl from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={cl.navbar}>
            <Link className={cl.navbarLink} to="#" smooth={true} duration={500}>
                About
            </Link>
            <Link className={cl.navbarLink} to="#" smooth={true} duration={500}>
                Works
            </Link>
        </div>
    );
};

export default Navbar;
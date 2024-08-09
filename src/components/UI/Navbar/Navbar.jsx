import React, {useEffect, useRef, useState} from 'react';
import styles from './Navbar.module.css';
import AnchorScroll from "../../AnchorScroll";

const NavbarContent = () => {
    return (
        <>
            <AnchorScroll to="#main">
                <div className="logo logo__navbar cursorPointer">maryyak</div>
            </AnchorScroll>
            <AnchorScroll to="#about">
                <div className={`${styles.navbarLink} cursorPointer`}>About</div>
            </AnchorScroll>
            <div className={styles.separator}></div>
            <AnchorScroll to="#">
                <div className={`${styles.navbarLink} cursorPointer`}>Works</div>
            </AnchorScroll>
            <div className={styles.separator}></div>
            <AnchorScroll to="#">
                <div className={`${styles.navbarLink} cursorPointer`}>Price</div>
            </AnchorScroll>
            <div className={styles.separator}></div>
            <AnchorScroll to="#">
                <div className={`${styles.navbarLink} cursorPointer`}>Links</div>
            </AnchorScroll>
        </>
    )
}

const Navbar = () => {
    const [scrolledHeight, setScrolledHeight] = useState(0);
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = (event) => {
            const paintedHeight = navbarRef.current.offsetHeight * (window.scrollY / window.innerHeight);
            setScrolledHeight(paintedHeight)
        }

        window.addEventListener('scroll', handleScroll)
    }, []);

    return (
        <div className={styles.navbarWrapper}
             ref={navbarRef}>
            <div className={`${styles.navbar} ${styles.navbarUnscrolled}`}>
                <NavbarContent/>
            </div>
            <div className={styles.navbarBackground}
                 style={{height: `${scrolledHeight}px`}}></div>
            <div className={styles.navbarScrolledWrapper}
                 style={{height: `${scrolledHeight}px`}}
            >
                <div className={`${styles.navbar} ${styles.navbarScrolled}`}>
                    <NavbarContent/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import React, {useEffect, useRef, useState} from 'react';
import styles from './Navbar.module.css';
import AnchorScroll from "../../AnchorScroll";
import {useTranslation} from "react-i18next";
import {useLocation} from "react-router-dom";

const NavbarContent = ({isHomePage, changeLanguage}) => {
    const {t} = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const links = [
        {to: "#about", label: t('about')},
        {to: "#stack", label: t('stack')},
        {to: "#works", label: t('works')},
        {to: "#price", label: t('price')},
        {to: "#links", label: t('links')},
    ];

    return (
        <>
            <div className={`${styles.langButtons} cursorPointer`}>
                <button className={styles.langButton} onClick={() => changeLanguage('en')}>EN</button>
                <button className={styles.langButton} onClick={() => changeLanguage('ru')}>RU</button>
            </div>
            <AnchorScroll to={isHomePage ? `#root` : `/`}>
                <div className="logo logo__navbar cursorPointer">maryyak</div>
            </AnchorScroll>
            <button
                className={styles.burgerButton}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
            >
                <span className={styles.burgerSpan}></span>
                <span className={styles.burgerSpan}></span>
                <span className={styles.burgerSpan}></span>
            </button>
            <div className={`${styles.navbarLinks} ${menuOpen ? styles.active : ""}`}>
                {links.map(({to, label}) => (
                    <React.Fragment key={to}>
                        <AnchorScroll to={isHomePage ? to : `/#${to.slice(1)}`}>
                            <div onClick={() => setMenuOpen(false)} className={`${styles.navbarLink} cursorPointer`}>{label}</div>
                        </AnchorScroll>
                        {to !== "#links" && <div className={styles.separator}></div>}
                    </React.Fragment>
                ))}
            </div>
        </>
    );
};

const getPageHeight = () => {
    const body = document.body;
    const html = document.documentElement;

    const pageHeight = Math.max(
        body.scrollHeight, html.scrollHeight,
        body.offsetHeight, html.offsetHeight,
        body.clientHeight, html.clientHeight
    );

    return pageHeight;
};

const Navbar = ({changeLanguage}) => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [scrolledHeight, setScrolledHeight] = useState(0);
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = (event) => {
            const paintedHeight = navbarRef.current.offsetHeight * (window.scrollY / (getPageHeight() - window.innerHeight));
            setScrolledHeight(paintedHeight)
        }

        window.addEventListener('scroll', handleScroll)
    }, []);

    return (
        <div className={styles.navbarWrapper}
             ref={navbarRef}>
            <div className={`${styles.navbar} ${styles.navbarUnscrolled}`}>
                <NavbarContent isHomePage={isHomePage} changeLanguage={changeLanguage}/>
            </div>
            <div className={styles.navbarBackground}
                 style={{height: `${scrolledHeight}px`}}></div>
            <div className={styles.navbarScrolledWrapper}
                 style={{height: `${scrolledHeight}px`}}
            >
                <div className={`${styles.navbar} ${styles.navbarScrolled}`}>
                    <NavbarContent isHomePage={isHomePage} changeLanguage={changeLanguage}/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
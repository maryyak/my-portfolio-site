import React, {useEffect, useRef, useState} from 'react';
import styles from './Navbar.module.css';
import AnchorScroll from "../../AnchorScroll";
import {useTranslation} from "react-i18next";
import {useLocation} from "react-router-dom";

const NavbarContent = ({ isHomePage }) => {
    const { t } = useTranslation();
    const links = [
        { to: "#about", label: t('about') },
        { to: "#stack", label: t('stack') },
        { to: "#works", label: t('works') },
        { to: "#price", label: t('price') },
        { to: "#links", label: t('links') },
    ];

    return (
        <>
            <AnchorScroll to={isHomePage ? `#root` : `/`}>
                <div className="logo logo__navbar cursorPointer">maryyak</div>
            </AnchorScroll>
            {links.map(({ to, label }) => (
                <React.Fragment key={to}>
                    <AnchorScroll to={isHomePage ? to : `/#${to.slice(1)}`}>
                        <div className={`${styles.navbarLink} cursorPointer`}>{label}</div>
                    </AnchorScroll>
                    <div className={(to !== "#links") ? styles.separator : ""}></div>
                </React.Fragment>
            ))}
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

const Navbar = ({ changeLanguage }) => {
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
                <div className={`${styles.langButtons} cursorPointer`}>
                    <button className={styles.langButton} onClick={() => changeLanguage('en')}>EN</button>
                    <button className={styles.langButton} onClick={() => changeLanguage('ru')}>RU</button>
                </div>
                <NavbarContent isHomePage={isHomePage}/>
            </div>
            <div className={styles.navbarBackground}
                 style={{height: `${scrolledHeight}px`}}></div>
            <div className={styles.navbarScrolledWrapper}
                 style={{height: `${scrolledHeight}px`}}
            >
                <div className={`${styles.navbar} ${styles.navbarScrolled}`}>
                    <div className={`${styles.langButtons} cursorPointer`}>
                        <button className={styles.langButton} onClick={() => changeLanguage('en')}>EN</button>
                        <button className={styles.langButton} onClick={() => changeLanguage('ru')}>RU</button>
                    </div>
                    <NavbarContent isHomePage={isHomePage}/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
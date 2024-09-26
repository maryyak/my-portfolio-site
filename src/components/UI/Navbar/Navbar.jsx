import React, {useEffect, useRef, useState} from 'react';
import styles from './Navbar.module.css';
import AnchorScroll from "../../AnchorScroll";
import {useTranslation} from "react-i18next";

const NavbarContent = () => {
    const {t} = useTranslation();

    return (
        <>
            <AnchorScroll to="#main">
                <div className="logo logo__navbar cursorPointer">maryyak</div>
            </AnchorScroll>
            <AnchorScroll to="#about">
                <div className={`${styles.navbarLink} cursorPointer`}>{t('about')}</div>
            </AnchorScroll>
            <div className={styles.separator}></div>
            <AnchorScroll to="#stack">
                <div className={`${styles.navbarLink} cursorPointer`}>{t('stack')}</div>
            </AnchorScroll>
            <div className={styles.separator}></div>
            <AnchorScroll to="#works">
                <div className={`${styles.navbarLink} cursorPointer`}>{t('works')}</div>
            </AnchorScroll>
            <div className={styles.separator}></div>
            <AnchorScroll to="#price">
                <div className={`${styles.navbarLink} cursorPointer`}>{t('price')}</div>
            </AnchorScroll>
            <div className={styles.separator}></div>
            <AnchorScroll to="#links">
                <div className={`${styles.navbarLink} cursorPointer`}>{t('links')}</div>
            </AnchorScroll>
        </>
    )
}

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
                <NavbarContent/>
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
                    <NavbarContent/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import {motion} from "framer-motion";
import DroppingText from "../components/UI/DroppingText/DroppingText";
import NextScreenButton from "../components/UI/NextScreenButton/NextScreenButton";
import SplinesBackground from "../components/UI/SplinesBackground/SplinesBackground";
import AppearElement from "../components/UI/AppearElement/AppearElement";
import Magnifier from "../components/UI/Magnifier/Magnifier";
import TagsCloud from "../components/UI/TagsCloud/TagsCloud";
import SpinningSphere from "../components/UI/SpinningSphere/SpinningSphere";
import Carousel from "../components/UI/Carousel/Carousel";
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next';
import AnchorScroll from "../components/AnchorScroll";
import tags from '../data/tags';


const HomePage = () => {
    const {t} = useTranslation();

    return (
        <div className="App">
            <div id="main" className="mainBanner">
                <div className="container container_mainBanner">
                    <motion.div
                        initial={{
                            opacity: 0,
                            transform: 'scale(0.6)'
                        }}
                        animate={{
                            opacity: 1,
                            transform: 'scale(1)'
                        }}
                        transition={{duration: 0.5}}>
                        <div className="logo logo__large">maryyak</div>
                    </motion.div>
                    <h1>
                        <DroppingText text={t('main__banner-text')} id="main__banner-text"/>
                    </h1>
                    <NextScreenButton to="#about"/>
                </div>
                <SplinesBackground/>
            </div>
            <div id="about" className="container">
                <AppearElement from={"rotate"} id="about_background">
                    <div className="about_background">
                        <img src="/images/Splines-2.png" alt="splines"/>
                    </div>
                </AppearElement>
                <div className="about">
                    <div className="textBlock">
                        <h1>
                            <DroppingText text={t('about')} id="about"/>
                        </h1>
                        <AppearElement from={"bottom"} id="about-text">
                            <div className="text">{t('about-text')}</div>
                        </AppearElement>
                    </div>
                    <AppearElement from={"right"} id="imgBlock">
                        <div className="imgBlock">
                            <Magnifier
                                src="/images/IMG_7521.PNG"
                                zoomLevel={1.5}
                            />
                        </div>
                    </AppearElement>
                </div>
            </div>
            <div id="stack" className="container">
                <div className="stack">
                    <div className="backgroundHeading">
                        <DroppingText text={t('my-stack')} id="my-stack"/>
                    </div>
                    <AppearElement from={"left"} id="stack_list">
                        <div className="stack_list">
                            <div className="stack_row">
                                <div className="stack_element">
                                    <div className="stack_heading">{t('languages')}</div>
                                    <div className="stack_ul">
                                        <div className="stack_li">HTML</div>
                                        <div className="stack_li">CSS</div>
                                        <div className="stack_li">JavaScript</div>
                                        <div className="stack_li">PHP</div>
                                        <div className="stack_li">Python</div>
                                        <div className="stack_li">C++</div>
                                    </div>
                                </div>
                                <div className="stack_element">
                                    <div className="stack_heading">{t('website-builders')}</div>
                                    <div className="stack_ul">
                                        <div className="stack_li">Wordpress</div>
                                        <div className="stack_li">Tilda</div>
                                    </div>
                                </div>
                            </div>
                            <div className="stack_row">
                                <div className="stack_element">
                                    <div className="stack_heading">{t('libraries-tools')}</div>
                                    <div className="stack_ul">
                                        <div className="stack_li">React</div>
                                        <div className="stack_li">Three.js</div>
                                        <div className="stack_li">jQuery</div>
                                        <div className="stack_li">Bootstrap</div>
                                    </div>
                                </div>
                                <div className="stack_element">
                                    <div className="stack_heading">{t('miscellaneous')}</div>
                                    <div className="stack_row">
                                        <div className="stack_ul">
                                            <div className="stack_li">SQLite</div>
                                            <div className="stack_li">FTP</div>
                                            <div className="stack_li">Figma</div>
                                            <div className="stack_li">Git</div>
                                        </div>
                                        <div className="stack_ul">
                                            <div className="stack_li">API</div>
                                            <div className="stack_li">Photoshop</div>
                                            <div className="stack_li">JSON</div>
                                            <div className="stack_li">BEM</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AppearElement>
                    <TagsCloud tags={tags}/>
                </div>
            </div>
            <div id="works" className="works">
                <div className="works_background works_background__left">
                    <img src="/images/Parallax.png" alt={'parallax'}/>
                </div>
                <div className="works_background works_background__right">
                    <img src="/images/Parallax-2.png" alt={'parallax'}/>
                </div>
                <div className="container container_works">
                    <div className="combined-heading">
                        <h1>
                            <DroppingText text={t('works')} id="works"/>
                        </h1>
                        <AppearElement from={"right"} id="works-text">
                            <div className="text">{t('works-text')}</div>
                        </AppearElement>
                    </div>
                    <AppearElement from={"bottom"} id="works_content">
                        <div className="works_content">
                            <SpinningSphere/>
                            <Carousel visibleItems={3} gap={30}>
                                <Link to="/works/onsint" className="works_item">
                                    <div className="works_image">
                                        <img src="/images/Portfolio_onsint.png"/>
                                    </div>
                                    <div className="works_description">
                                        <div className="works_name">Onsint</div>
                                        <div className="works_tags">
                                            <div className="works_tag">jQuery</div>
                                            <div className="works_tag">{t('cms-layout')}</div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/works/klatzhaus" className="works_item">
                                    <div className="works_image">
                                        <img src="/images/Portfolio_klatzhaus.png"/>
                                    </div>
                                    <div className="works_description">
                                        <div className="works_name">Klatzhaus</div>
                                        <div className="works_tags">
                                            <div className="works_tag">BEM</div>
                                            <div className="works_tag">{t('animated')}</div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/works/standart-moving" className="works_item">
                                    <div className="works_image">
                                        <img src="/images/Portfolio_standart-moving.png"/>
                                    </div>
                                    <div className="works_description">
                                        <div className="works_name">Standart moving</div>
                                        <div className="works_tags">
                                            <div className="works_tag">{t('landing')}</div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/works/artel-project" className="works_item">
                                    <div className="works_image">
                                        <img src="/images/Portfolio_artel-project.png"/>
                                    </div>
                                    <div className="works_description">
                                        <div className="works_name">Artel project</div>
                                        <div className="works_tags">
                                            <div className="works_tag">BEM</div>
                                            <div className="works_tag">{t('animated')}</div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/works/car-trunks" className="works_item">
                                    <div className="works_image">
                                        <img src="/images/Portfolio_car-trunks.png"/>
                                    </div>
                                    <div className="works_description">
                                        <div className="works_name">Car trunks</div>
                                        <div className="works_tags">
                                            <div className="works_tag">Wordpress</div>
                                            <div className="works_tag">WooCommerce</div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/works/artmir" className="works_item">
                                    <div className="works_image">
                                        <img src="/images/Portfolio_artmir.png" alt="Artmir"/>
                                    </div>
                                    <div className="works_description">
                                        <div className="works_name">Artmir</div>
                                        <div className="works_tags">
                                            <div className="works_tag">BEM</div>
                                            <div className="works_tag">jQuery</div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/works/fastening-solutions" className="works_item">
                                    <div className="works_image">
                                        <img src="/images/Portfolio_fastening-solutions.png"/>
                                    </div>
                                    <div className="works_description">
                                        <div className="works_name">Fastening solutions</div>
                                        <div className="works_tags">
                                            <div className="works_tag">BEM</div>
                                            <div className="works_tag">{t('cms-layout')}</div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/works/stav-group" className="works_item">
                                    <div className="works_image">
                                        <img src="/images/Portfolio_stav-group.png"/>
                                    </div>
                                    <div className="works_description">
                                        <div className="works_name">Stav group</div>
                                        <div className="works_tags">
                                            <div className="works_tag">Wordpress</div>
                                            <div className="works_tag">Woocommerce</div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/works/cards-vest" className="works_item">
                                    <div className="works_image">
                                        <img src="/images/Portfolio_cards-vest.png"/>
                                    </div>
                                    <div className="works_description">
                                        <div className="works_name">Cards vest</div>
                                        <div className="works_tags">
                                            <div className="works_tag">Bootstrap</div>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/works/bionica-alania" className="works_item">
                                    <div className="works_image">
                                        <img src="/images/Portfolio_bionica-alania.png"/>
                                    </div>
                                    <div className="works_description">
                                        <div className="works_name">Bionica Alania</div>
                                        <div className="works_tags">
                                            <div className="works_tag">Wordpress</div>
                                            <div className="works_tag">Woocommerce</div>
                                        </div>
                                    </div>
                                </Link>
                            </Carousel>
                        </div>
                    </AppearElement>
                </div>
            </div>
            <div id="price" className="container">
                <div className="price">
                    <h1 className="dark">
                        <DroppingText text={t('price')} id="price"/>
                    </h1>
                    <AppearElement from={"bottom"} id="pricing-cards">
                        <div className="pricing-cards">
                            <div className="pricing-card">
                                <div className="pricing-card__info">
                                    <div className="pricing-card__bg"></div>
                                    <h3 className="pricing-card__title">{t('landing')}</h3>
                                    <p className="pricing-card__price">{t('from')} 2000 {t('rub')}</p>
                                </div>
                                <div className="pricing-card__bottom">
                                    <ul className="pricing-card__features">
                                        <li>{t('responsive-design')}</li>
                                        <li>{t('custom-animations')}</li>
                                        <li>{t('high-performance')}</li>
                                    </ul>
                                    <AnchorScroll to="#links">
                                        <div className="pricing-card__button">{t('get-started')}</div>
                                    </AnchorScroll>
                                </div>
                            </div>
                            <div className="pricing-card">
                                <div className="pricing-card__info">
                                    <div className="pricing-card__bg"></div>
                                    <h3 className="pricing-card__title">{t('multi-page')}</h3>
                                    <p className="pricing-card__price">{t('from')} 3000 {t('rub')}</p>
                                </div>
                                <div className="pricing-card__bottom">
                                    <ul className="pricing-card__features">
                                        <li>{t('structured-project')}</li>
                                        <li>{t('cms-integration')}</li>
                                        <li>{t('fast-processing')}</li>
                                    </ul>
                                    <AnchorScroll to="#links">
                                        <div className="pricing-card__button">{t('get-started')}</div>
                                    </AnchorScroll>
                                </div>
                            </div>
                            <div className="pricing-card">
                                <div className="pricing-card__info">
                                    <div className="pricing-card__bg"></div>
                                    <h3 className="pricing-card__title">{t('web-application')}</h3>
                                    <p className="pricing-card__price">{t('from')} 5000 {t('rub')}</p>
                                </div>
                                <div className="pricing-card__bottom">
                                    <ul className="pricing-card__features">
                                        <li>{t('cross-platform')}</li>
                                        <li>{t('customizable')}</li>
                                        <li>{t('scalable')}</li>
                                    </ul>
                                    <AnchorScroll to="#links">
                                        <div className="pricing-card__button">{t('get-started')}</div>
                                    </AnchorScroll>
                                </div>
                            </div>
                        </div>
                    </AppearElement>
                    <AppearElement from={"bottom"} id="price-additions">
                        <div className="price-additions">
                            <div className="price__subheading">{t('additions')}</div>
                            <table className="price-table">
                                <tbody>
                                <tr className="price-table__tr">
                                    <th className="price-table__th">{t('uploading-hosting')}</th>
                                    <td className="price-table__td">{t('from')} 500 {t('rub')}</td>
                                </tr>
                                <tr className="price-table__tr">
                                    <th className="price-table__th">{t('cms-implementation')}</th>
                                    <td className="price-table__td">{t('from')} 2000 {t('rub')}</td>
                                </tr>
                                <tr className="price-table__tr">
                                    <th className="price-table__th">{t('additional-libraries')}</th>
                                    <td className="price-table__td">{t('from')} 1000 {t('rub')}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </AppearElement>

                    <div className="price-table__bg">
                        <img src="/images/Price_background.png" alt="background"/>
                    </div>
                </div>
            </div>
            <div id="links" className="links">
                <div className="links__background">
                    <img src="/images/Parallax-3.png" alt="parallax-3"/>
                </div>
                <div className="container container_links">
                    <h1>
                        <DroppingText text={t('links')} id="links"/>
                    </h1>
                    <div className="links-row">
                        <div className="links__cards">
                            <a href="https://github.com/maryyak/my-portfolio-site" target="_blank"
                               rel="noopener noreferrer" className="links__card cursorPointer links__card_github">
                                <svg className="links__card-img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                     width="100" height="100" viewBox="0 0 30 30">
                                    <defs>
                                        <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{stopColor: '#AA89F0', stopOpacity: 1}}/>
                                            <stop offset="100%" style={{stopColor: '#7131FD', stopOpacity: 1}}/>
                                        </linearGradient>
                                    </defs>
                                    <path fill="url(#myGradient)"
                                          d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                                </svg>
                                <AppearElement from="rotate" id="links__card-bg">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%"
                                         height="100%"
                                         preserveAspectRatio="none" className="links__card-bg">
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="44"
                                            fill="none"
                                            stroke="url(#gradient)"
                                            strokeWidth="12"
                                            strokeDasharray="220 45"
                                            strokeLinecap="round"
                                        />
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#AA89F0" stopOpacity="0.5"/>
                                                <stop offset="100%" stopColor="#7131FD" stopOpacity="0.5"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </AppearElement>
                            </a>
                            <a href="https://t.me/maryyak_dev" target="_blank" rel="noopener noreferrer"
                               className="links__card cursorPointer links__card_tg">
                                <svg className="links__card-img" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                     width="100" height="100"
                                     viewBox="0 0 50 50">
                                    <defs>
                                        <linearGradient id="myGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{stopColor: '#80FAFA', stopOpacity: 1}}/>
                                            <stop offset="100%" style={{stopColor: '#49B8BA', stopOpacity: 1}}/>
                                        </linearGradient>
                                    </defs>
                                    <path fill="url(#myGradient2)"
                                          d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
                                </svg>
                                <AppearElement from="rotate" id="links__card-bg2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%"
                                         height="100%"
                                         preserveAspectRatio="none" className="links__card-bg">
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="44"
                                            fill="none"
                                            stroke="url(#gradient2)"
                                            strokeWidth="12"
                                            strokeDasharray="200 35"
                                            strokeLinecap="round"
                                        />
                                        <defs>
                                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#80FAFA" stopOpacity="0.5"/>
                                                <stop offset="100%" stopColor="#49B8BA" stopOpacity="0.5"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </AppearElement>
                            </a>
                            <a href="mailto:akovenkomaria557@gmail.com" rel="noopener noreferrer"
                               className="links__card cursorPointer links__card_email">
                                <svg className="links__card-img" xmlns="http://www.w3.org/2000/svg"
                                     enableBackground="new 0 0 64 64" version="1.1" viewBox="0 0 64 64" x="0px" y="0px"
                                     width="100" height="100">
                                    <defs>
                                        <linearGradient id="myGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{stopColor: '#E08BAE', stopOpacity: 1}}/>
                                            <stop offset="100%" style={{stopColor: '#FC71A1', stopOpacity: 1}}/>
                                        </linearGradient>
                                    </defs>
                                    <g fill="url(#myGradient3)" id="_x31_4-Email">
                                        <g>
                                            <polygon
                                                points="55.5849609,49.3529663 55.5864868,49.3546143 56,49.6526489 56,26.5866089 38.4038086,36.9716187   "/>
                                            <path
                                                d="M12.5499878,17.4702148h-0.4299927C9.8499756,17.4702148,8,19.3201904,8,21.59021v2.6699829l4.5499878,2.6799927    V17.4702148z"/>
                                            <path
                                                d="M51.8800049,17.4702148h-0.4299927v9.4699707L56,24.2601929V21.59021    C56,19.3201904,54.1500244,17.4702148,51.8800049,17.4702148z"/>
                                            <path
                                                d="M54.4150391,50.9760132L33.7539063,36.086853c-1.0488281-0.7558594-2.4589844-0.7558594-3.5078125,0L9.5844727,50.9760132    l-0.0002441,0.0001221L8,52.1177979v1.4719849c0,0.5522461,0.4477539,1,1,1h46c0.5527344,0,1-0.4477539,1-1v-1.4719238    l-1.5834351-1.1411743C54.4160767,50.9763184,54.4155273,50.9763794,54.4150391,50.9760132z"/>
                                            <polygon
                                                points="14.5393677,44.9400024 25.5965576,36.9719849 8,26.586853 8,49.6523438 14.5385742,44.9403687   "/>
                                            <path
                                                d="M27.7600098,18.6002197c-0.0800171-0.0400391-0.1900024-0.0599976-0.3300171-0.0599976    c-0.2799683,0-0.6699829,0.0799561-1.0800171,0.2799683c-0.8299561,0.4100342-1.4400024,1.2200317-1.539978,2.0700073    c-0.0900269,0.6900024,0.2700195,1.7999878,0.9899902,1.9000244c0.1699829,0.0199585,0.4400024,0.0199585,0.7900391-0.3099976    c0.8599854-0.8000488,1.3599854-2.6800537,1.3399658-3.6600342    C27.8699951,18.6502075,27.7999878,18.6101685,27.7600098,18.6002197z"/>
                                            <path
                                                d="M29.0800171,34.4602051c1.75-1.2600098,4.0899658-1.2600098,5.8399658,0l1.710022,1.2299805l12.8200073-7.5599976    V13.4102173c0-0.5599976-0.4400024-1-1-1h-8.0700073v-2c0-0.5500488-0.4500122-1-1-1H15.5499878c-0.5499878,0-1,0.4499512-1,1    V28.130188l12.8200073,7.5599976L29.0800171,34.4602051z M40.5599976,17.5101929h4.2700195c0.5599976,0,1,0.4500122,1,1    c0,0.5599976-0.4400024,1-1,1h-4.2700195c-0.5499878,0-1-0.4400024-1-1    C39.5599976,17.9602051,40.0100098,17.5101929,40.5599976,17.5101929z M40.5599976,21.7702026h4.2700195    c0.5599976,0,1,0.4500122,1,1s-0.4400024,1-1,1h-4.2700195c-0.5499878,0-1-0.4500122-1-1    S40.0100098,21.7702026,40.5599976,21.7702026z M23.0700073,27.130188    c-1.7299805-0.9799805-2.9799805-2.5800171-3.5100098-4.4899902c-0.5200195-1.9199829-0.2799683-3.9199829,0.7000122-5.6500244    c0.9799805-1.7299805,2.5700073-2.9699707,4.4899902-3.5c3.9099731-1.0899658,7.9699707,1.1800537,9.1099854,5.0500488    c0.0200195,0.039978,0.0300293,0.0799561,0.0400391,0.1300049c0.0099487,0.0199585,0.0199585,0.039978,0.0199585,0.0599976    c0.0100098,0.0299683,0.0100098,0.0499878,0.0100098,0.0799561c0.3599854,1.8200073-0.2000122,3.6300049-1.4899902,4.710022    c-0.6300049,0.5200195-1.4099731,0.7299805-2.1300049,0.5700073c-0.6500244-0.1400146-1.1900024-0.5599976-1.5299683-1.1799927    c-0.2400513,0.3899536-0.5100098,0.7399902-0.8300171,1.0299683c-0.6000366,0.5700073-1.2999878,0.8599854-2.0300293,0.8599854    c-0.1300049,0-0.2600098-0.0099487-0.3899536-0.0299683c-1.8900146-0.2600098-2.9200439-2.3400269-2.710022-4.1199951    c0.1900024-1.5300293,1.210022-2.9199829,2.6599731-3.6300049c0.4200439-0.2000122,1.8800049-0.8200073,3.1199951-0.2399902    c0.460022,0.2099609,1.0400391,0.6599731,1.2900391,1.6099854c0.0100098,0.039978,0.0199585,0.0700073,0.0199585,0.1099854    c0.0100098,0.0400391,0.0100098,0.0800171,0.0100098,0.1099854c0.0499878,0.7600098,0.1100464,1.1600342,0.2600098,1.9700317    l0.0300293,0.1699829c0.0799561,0.4299927,0.1499634,0.8300171,0.289978,1.1400146    c0.0499878,0.0999756,0.1300049,0.2199707,0.2399902,0.25c0.1199951,0.0200195,0.2700195-0.0300293,0.4199829-0.1599731    c0.8600464-0.7200317,0.9800415-1.9000244,0.8099976-2.7700195c-0.7999878-2.8900146-3.789978-4.6000366-6.6899414-3.7999878    C23.8800049,15.8001709,22.7199707,16.7102051,22,17.9702148c-0.710022,1.2699585-0.9000244,2.7299805-0.5100098,4.1300049    c0.3900146,1.3999634,1.2999878,2.5700073,2.5599976,3.2799683c1.2700195,0.7200317,2.7300415,0.9000244,4.1300049,0.5200195    c0.3800049-0.1099854,0.75-0.2600098,1.1000366-0.4400024c0.4799805-0.25,1.0899658-0.0700073,1.3499756,0.4199829    c0.25,0.4899902,0.0700073,1.0900269-0.4199829,1.3500366c-0.4800415,0.25-0.9800415,0.4499512-1.4900513,0.5899658    c-0.6599731,0.1900024-1.3299561,0.2800293-2,0.2800293C25.4500122,28.1002197,24.2000122,27.7702026,23.0700073,27.130188z"/>
                                        </g>
                                    </g>
                                </svg>
                                <AppearElement from="rotate" id="links__card-bg3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%"
                                         height="100%"
                                         preserveAspectRatio="none" className="links__card-bg">
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="44"
                                            fill="none"
                                            stroke="url(#gradient3)"
                                            strokeWidth="12"
                                            strokeDasharray="140 45"
                                            strokeLinecap="round"
                                        />
                                        <defs>
                                            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#E08BAE" stopOpacity="0.5"/>
                                                <stop offset="100%" stopColor="#FC71A1" stopOpacity="0.5"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </AppearElement>
                            </a>
                        </div>
                        <form className="links-form">
                            <div className="links-form__heading">{t('links__heading')}</div>
                            <div className="links-form__field">
                                <label htmlFor="name" className="links-form__label">{t('links__name-head')}</label>
                                <input id="name" type="text" required className="links-form__input"
                                       placeholder={t('links__name')}/>
                            </div>
                            <div className="links-form__field">
                                <label htmlFor="contact" className="links-form__label">{t('links__contact-head')}</label>
                                <input id="contact" type="text" required className="links-form__input"
                                       placeholder={t('links__contact')}/>
                            </div>
                            <div className="links-form__field">
                                <label htmlFor="describe" className="links-form__label">{t('links__describe-head')}</label>
                                <textarea id="describe" className="links-form__input links-form__input_comment"
                                          placeholder={t('links__describe')}/>
                            </div>
                            <div className="links-form__submit cursorPointer">
                                <input type="submit" className="links-form__submit-input" value={t('submit')}/>
                            </div>
                        </form>
                    </div>
                    <div className="rights">©2024 MARYYAK</div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
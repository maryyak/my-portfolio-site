import './styles/App.css';
import Navbar from "./components/UI/Navbar/Navbar";
import Loader from "./components/UI/Loader/Loader";
import Magnifier from "./components/UI/Magnifier/Magnifier";
import SplinesBackground from "./components/UI/SplinesBackground/SplinesBackground";
import DroppingText from "./components/UI/DroppingText/DroppingText";
import usePageLoading from "./hooks/usePageLoading";
import meImage from './assets/images/IMG_7521.PNG';
import parallax from './assets/images/Parallax.png';
import parallax2 from './assets/images/Parallax-2.png';
import splinesLargeImage from './assets/images/Splines-2.png';
import portfolio1 from './assets/images/Portfolio_car-trunks.png';
import portfolio2 from './assets/images/Portfolio_standart-moving.png';
import portfolio3 from './assets/images/Portfolio_artel-project.png';
import portfolio4 from './assets/images/Portfolio_artmir.png';
import portfolio5 from './assets/images/Portfolio_fastening-solutions.png';
import portfolio6 from './assets/images/Portfolio_klatzhaus.png';
import portfolio7 from './assets/images/Portfolio_onsint.png';
import portfolio8 from './assets/images/Portfolio_cards-vest.png';
import portfolio9 from './assets/images/Portfolio_bionica-alania.png';
import portfolio10 from './assets/images/Portfolio_stav-group.png';
import CustomCursor from "./components/UI/CustomCursor/CustomCursor";
import NextScreenButton from "./components/UI/NextScreenButton/NextScreenButton";
import {motion} from "framer-motion";
import React from "react";
import AppearElement from "./components/UI/AppearElement/AppearElement";
import TagsCloud from "./components/UI/TagsCloud/TagsCloud";
import SpinningSphere from "./components/UI/SpinningSphere/SpinningSphere";
import Carousel from "./components/UI/Carousel/Carousel";

const tags = [
    "HTML", "CSS", "JavaScript", "PHP", "Python", "C++", "Wordpress",
    "Tilda", "React", "jQuery", "Bootstrap", "Figma",
    "Photoshop", "SQLite", "Git", "JSON", "FTP", "API", "BEM", "Three.js"
];

function App() {

    const {loading, completeAnimation} = usePageLoading();

    return (
        <>
            {loading ? (
                <Loader completeAnimation={completeAnimation}/>
            ) : (
                <div className="App">
                    <Navbar/>
                    <CustomCursor/>
                    <div id="main" className="mainBanner">
                        <div className="container container__mainBanner">
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
                                <DroppingText text={'FULL STACK DEVELOPMENT'}/>
                            </h1>
                            <NextScreenButton to="#about"/>
                        </div>
                        <SplinesBackground/>
                    </div>
                    <div id="about" className="container">
                        <AppearElement from={"rotate"}>
                            <div className="about_background">
                                <img src={splinesLargeImage} alt="splines"/>
                            </div>
                        </AppearElement>
                        <div className="about">
                            <div className="textBlock">
                                <h1>
                                    <DroppingText text={'ABOUT'}/>
                                </h1>
                                <AppearElement from={"bottom"}>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Nulla
                                        maximus
                                        maximus massa, et rutrum leo vestibulum ac. Ut et malesuada neque. Nam ornare
                                        purus
                                        id
                                        magna ultricies efficitur. Fusce lobortis est sed augue sodales lobortis.
                                        Integer ut
                                        ligula lectus. Etiam gravida ante a nulla ultrices vehicula. Fusce tempus varius
                                        odio,
                                        vitae posuere ipsum maximus vel. In eget tincidunt eros, quis rhoncus risus.
                                    </div>
                                </AppearElement>
                            </div>
                            <AppearElement from={"right"}>
                                <div className="imgBlock">
                                    <Magnifier
                                        src={meImage}
                                        zoomLevel={1.5}
                                    />
                                </div>
                            </AppearElement>
                        </div>
                    </div>
                    <div id="stack" className="container">
                        <div className="stack">
                            <div className="backgroundHeading">
                                <DroppingText text={'MY STACK'}/>
                            </div>
                            <AppearElement from={"left"}>
                                <div className="stack_list">
                                    <div className="stack_row">
                                        <div className="stack_element">
                                            <div className="stack_heading">Languages</div>
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
                                            <div className="stack_heading">Website Builders</div>
                                            <div className="stack_ul">
                                                <div className="stack_li">Wordpress</div>
                                                <div className="stack_li">Tilda</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="stack_row">
                                        <div className="stack_element">
                                            <div className="stack_heading">Libraries and Tools</div>
                                            <div className="stack_ul">
                                                <div className="stack_li">React</div>
                                                <div className="stack_li">Three.js</div>
                                                <div className="stack_li">jQuery</div>
                                                <div className="stack_li">Bootstrap</div>
                                            </div>
                                        </div>
                                        <div className="stack_element">
                                            <div className="stack_heading">Miscellaneous</div>
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
                            <img src={parallax} alt={'parallax'}/>
                        </div>
                        <div className="works_background works_background__right">
                            <img src={parallax2} alt={'parallax'}/>
                        </div>
                        <div className="container container__works">
                            <div className="combined-heading">
                                <h1>
                                    <DroppingText text={'WORKS'}/>
                                </h1>
                                <AppearElement from={"right"}>
                                    <div className="text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </div>
                                </AppearElement>
                            </div>
                            <AppearElement from={"bottom"}>
                                <div className="works_content">
                                    <SpinningSphere/>
                                    <Carousel visibleItems={3} gap={30}>
                                        <div className="works_item">
                                            <div className="works_image">
                                                <img src={portfolio1}/>
                                            </div>
                                            <div className="works_description">
                                                <div className="works_name">Car trunks</div>
                                                <div className="works_tags">
                                                    <div className="works_tag">Wordpress</div>
                                                    <div className="works_tag">Wordpress</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="works_item">
                                            <div className="works_image">
                                                <img src={portfolio2}/>
                                            </div>
                                            <div className="works_description">
                                                <div className="works_name">Standart moving</div>
                                                <div className="works_tags">
                                                    <div className="works_tag">Wordpress</div>
                                                    <div className="works_tag">Wordpress</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="works_item">
                                            <div className="works_image">
                                                <img src={portfolio3}/>
                                            </div>
                                            <div className="works_description">
                                                <div className="works_name">Artel project</div>
                                                <div className="works_tags">
                                                    <div className="works_tag">Wordpress</div>
                                                    <div className="works_tag">Wordpress</div>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="https://kuhni-artmir.ru/" className="works_item">
                                            <div className="works_image">
                                                <img src={portfolio4} alt="Artmir"/>
                                            </div>
                                            <div className="works_description">
                                                <div className="works_name">Artmir</div>
                                                <div className="works_tags">
                                                    <div className="works_tag">Wordpress</div>
                                                    <div className="works_tag">Wordpress</div>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="works_item">
                                            <div className="works_image">
                                                <img src={portfolio5}/>
                                            </div>
                                            <div className="works_description">
                                                <div className="works_name">Fastening solutions</div>
                                                <div className="works_tags">
                                                    <div className="works_tag">Wordpress</div>
                                                    <div className="works_tag">Wordpress</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="works_item">
                                            <div className="works_image">
                                                <img src={portfolio6}/>
                                            </div>
                                            <div className="works_description">
                                                <div className="works_name">Klatzhaus</div>
                                                <div className="works_tags">
                                                    <div className="works_tag">Wordpress</div>
                                                    <div className="works_tag">Wordpress</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="works_item">
                                            <div className="works_image">
                                                <img src={portfolio7}/>
                                            </div>
                                            <div className="works_description">
                                                <div className="works_name">Onsint</div>
                                                <div className="works_tags">
                                                    <div className="works_tag">Wordpress</div>
                                                    <div className="works_tag">Wordpress</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="works_item">
                                            <div className="works_image">
                                                <img src={portfolio8}/>
                                            </div>
                                            <div className="works_description">
                                                <div className="works_name">Cards vest</div>
                                                <div className="works_tags">
                                                    <div className="works_tag">Wordpress</div>
                                                    <div className="works_tag">Wordpress</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="works_item">
                                            <div className="works_image">
                                                <img src={portfolio9}/>
                                            </div>
                                            <div className="works_description">
                                                <div className="works_name">Bionica Alania</div>
                                                <div className="works_tags">
                                                    <div className="works_tag">Wordpress</div>
                                                    <div className="works_tag">Wordpress</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="works_item">
                                            <div className="works_image">
                                                <img src={portfolio10}/>
                                            </div>
                                            <div className="works_description">
                                                <div className="works_name">Stav group</div>
                                                <div className="works_tags">
                                                    <div className="works_tag">Wordpress</div>
                                                    <div className="works_tag">Wordpress</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Carousel>
                                </div>
                            </AppearElement>
                        </div>
                    </div>
                    <div className="container"></div>
                </div>
            )}
        </>
    );
}


export default App;

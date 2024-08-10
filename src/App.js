import './styles/App.css';
import Navbar from "./components/UI/Navbar/Navbar";
import Loader from "./components/UI/Loader/Loader";
import Magnifier from "./components/UI/Magnifier/Magnifier";
import SplinesBackground from "./components/UI/SplinesBackground/SplinesBackground";
import DroppingText from "./components/UI/DroppingText/DroppingText";
import usePageLoading from "./hooks/usePageLoading";
import meImage from './assets/images/IMG_7521.PNG';
import CustomCursor from "./components/UI/CustomCursor/CustomCursor";
import NextScreenButton from "./components/UI/NextScreenButton/NextScreenButton";
import {motion} from "framer-motion";
import React from "react";
import AppearElement from "./components/UI/AppearElement/AppearElement";
import TagsCloud from "./components/UI/TagsCloud/TagsCloud";

const tags = [
    "HTML", "CSS", "JavaScript", "PHP", "Python", "C++", "Wordpress",
    "Tilda", "React", "jQuery", "Bootstrap", "Figma",
    "Photoshop", "SQLite", "Git", "JSON", "FTP", "API"
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
                    <div className="mainBanner" id="main">
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
                    <div className="container">
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
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AppearElement>
                            <TagsCloud tags={tags}/>
                        </div>
                    </div>
                    <div className="container"></div>
                </div>
            )}
        </>
    );
}


export default App;

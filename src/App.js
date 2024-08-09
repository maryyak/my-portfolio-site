import './styles/App.css';
import Navbar from "./components/UI/Navbar/Navbar";
import Loader from "./components/UI/Loader/Loader";
import SplinesBackground from "./components/UI/SplinesBackground/SplinesBackground";
import DroppingText from "./components/UI/DroppingText/DroppingText";
import usePageLoading from "./hooks/usePageLoading";
import meImage from './assets/images/IMG_7521.PNG';
import CustomCursor from "./components/UI/CustomCursor/CustomCursor";
import NextScreenButton from "./components/UI/NextScreenButton/NextScreenButton";
import {motion} from "framer-motion";
import React from "react";

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
                    <div className="container">
                        <div id="about" className="about">
                            <div className="textBlock">
                                <h1>
                                    <DroppingText text={'ABOUT'}/>
                                </h1>
                                <div className="text colorChangeOnHover">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                                    maximus
                                    maximus massa, et rutrum leo vestibulum ac. Ut et malesuada neque. Nam ornare purus
                                    id
                                    magna ultricies efficitur. Fusce lobortis est sed augue sodales lobortis. Integer ut
                                    ligula lectus. Etiam gravida ante a nulla ultrices vehicula. Fusce tempus varius
                                    odio,
                                    vitae posuere ipsum maximus vel. In eget tincidunt eros, quis rhoncus risus.
                                </div>
                            </div>
                            <div className="imgBlock">
                                <img src={meImage} alt="my photo" draggable="false"/>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}


export default App;

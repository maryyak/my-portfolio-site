import './styles/App.css';
import Navbar from "./components/UI/Navbar/Navbar";
import Logo from "./components/UI/Logo/Logo";
import Loader from "./components/UI/Loader/Loader";
import SplinesBackground from "./components/UI/SplinesBackground/SplinesBackground";
import DroppingText from "./components/UI/DroppingText/DroppingText";
import usePageLoading from "./hooks/usePageLoading";
import meImage from './assets/images/IMG_7521.PNG';
import CustomCursor from "./components/UI/CustomCursor/CustomCursor";

function App() {

    const { loading, completeAnimation } = usePageLoading();

    return (
        <>
            {loading ? (
                <Loader completeAnimation={completeAnimation}/>
            ) : (
                <div className="App">
                    {/*<Navbar/>*/}
                    <CustomCursor/>
                    <div className="mainBanner">
                        <Logo additionalStyles="logo__large"/>
                        <h1>
                            <DroppingText text={'FULL STACK DEVELOPMENT'}/>
                        </h1>
                        <SplinesBackground/>
                    </div>
                    <div className="about">
                        <div className="textBlock">
                            <h1>ABOUT</h1>
                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus maximus massa, et rutrum leo vestibulum ac. Ut et malesuada neque. Nam ornare purus id magna ultricies efficitur. Fusce lobortis est sed augue sodales lobortis. Integer ut ligula lectus. Etiam gravida ante a nulla ultrices vehicula. Fusce tempus varius odio, vitae posuere ipsum maximus vel. In eget tincidunt eros, quis rhoncus risus.</div>
                        </div>
                        <div className="imgBlock">
                            <img src={meImage} alt="my photo"/>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}


export default App;

import './styles/App.css';
import Navbar from "./components/UI/Navbar/Navbar";
import Logo from "./components/UI/Logo/Logo";
import Loader from "./components/UI/Loader/Loader";
import SplinesBackground from "./components/UI/SplinesBackground/SplinesBackground";
import DroppingText from "./components/UI/DroppingText/DroppingText";
import usePageLoading from "./hooks/usePageLoading";

function App() {

    const { loading, completeAnimation } = usePageLoading();

    return (
        <>
            {loading ? (
                <Loader completeAnimation={completeAnimation}/>
            ) : (
                <div className="App">
                    {/*<Navbar/>*/}
                    <div className="mainBanner">
                        <Logo additionalStyles="logo__large"/>
                        <h1 className="h1__white">
                            <DroppingText text={'FULL STACK DEVELOPMENT'}/>
                        </h1>
                        <SplinesBackground/>
                    </div>
                </div>
            )}
        </>
    );
}


export default App;

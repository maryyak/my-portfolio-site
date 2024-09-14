import React from "react";
import {BrowserRouter} from "react-router-dom";
import ScrollRestoration from "./components/ScrollRestoration";
import './styles/App.css';
import usePageLoading from "./hooks/usePageLoading";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import CustomCursor from "./components/UI/CustomCursor/CustomCursor";
import Loader from "./components/UI/Loader/Loader";

function App() {
    const {loading, completeAnimation} = usePageLoading();

    return (
        <BrowserRouter>
            {loading ? (
                <Loader completeAnimation={completeAnimation}/>
            ) : (
                <>
                    <Navbar/>
                    <CustomCursor/>
                    <ScrollRestoration />
                    <AppRouter/>
                </>
            )}
        </BrowserRouter>
    );
}


export default App;
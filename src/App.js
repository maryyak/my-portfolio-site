import React from "react";
import {BrowserRouter} from "react-router-dom";
import ScrollRestoration from "./components/ScrollRestoration";
import './styles/App.css';
import './styles/adaptive.css';
import usePageLoading from "./hooks/usePageLoading";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import CustomCursor from "./components/UI/CustomCursor/CustomCursor";
import Loader from "./components/UI/Loader/Loader";
import { useTranslation } from 'react-i18next';

function App() {
    const {loading, completeAnimation} = usePageLoading();
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <BrowserRouter>
            {loading ? (
                <Loader completeAnimation={completeAnimation}/>
            ) : (
                <>
                    <Navbar changeLanguage={changeLanguage}/>
                    <CustomCursor/>
                    <ScrollRestoration />
                    <AppRouter/>
                </>
            )}
        </BrowserRouter>
    );
}


export default App;
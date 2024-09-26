import React from 'react';
import {useParams, useNavigate, Link} from 'react-router-dom';
import DroppingText from "../components/UI/DroppingText/DroppingText";
import Magnifier from "../components/UI/Magnifier/Magnifier";
import worksData from '../data/worksData';
import {useTranslation} from "react-i18next";

const WorksItemPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {t} = useTranslation();
    const item = worksData[id];

    if (!item) {
        return (
            <div className="App">
                <div className="container works-page">
                    <div className="error-text">The page doesn't exist :(</div>
                    <Link to="/" className="works-button works-button_back cursorPointer">
                        <svg
                            className="works-button__svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="100"
                            height="50"
                            viewBox="0 0 80 50"
                        >
                            <g>
                                <path
                                    d="M45 25 L0 25 L13 15 M0 25 L13 35"
                                    strokeWidth="3"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="arrow"
                                />

                                <circle
                                    cx="55"
                                    cy="25"
                                    r="2"
                                    className="dot dot1"
                                />
                                <circle
                                    cx="65"
                                    cy="25"
                                    r="2"
                                    className="dot dot2"
                                />
                                <circle
                                    cx="75"
                                    cy="25"
                                    r="2"
                                    className="dot dot3"
                                />
                            </g>
                        </svg>
                        <div className="works-button__text">
                            Go to main page
                        </div>
                    </Link>
                </div>
            </div>
        );
    }

    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 1; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const rows = chunkArray(item.images, 2);

    return (
        <div className="App">
            <div className="container works-page">
                <div className="works-button works-button_back cursorPointer" onClick={() => navigate(-1)}>
                    <svg
                        className="works-button__svg"
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="50"
                        viewBox="0 0 80 50"
                    >
                        <g>
                            <path
                                d="M45 25 L0 25 L13 15 M0 25 L13 35"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="arrow"
                            />

                            <circle
                                cx="55"
                                cy="25"
                                r="2"
                                className="dot dot1"
                            />
                            <circle
                                cx="65"
                                cy="25"
                                r="2"
                                className="dot dot2"
                            />
                            <circle
                                cx="75"
                                cy="25"
                                r="2"
                                className="dot dot3"
                            />
                        </g>
                    </svg>
                    <div className="works-button__text">
                        {t('go-back')}
                    </div>
                </div>
                <h1>
                    <DroppingText text={item.title}/>
                </h1>
                <div className="gallery">
                    <div className="gallery__item" key={0}>
                        <Magnifier
                            src={item.images[0]}
                            zoomLevel={2}
                        />
                    </div>
                    <div className="gallery__col">
                        {rows.map((row, rowIndex) => (
                            <div className="gallery__row" key={rowIndex}>
                                {row.map((image, index) => (
                                    <div className="gallery__item" key={index}>
                                        <Magnifier
                                            src={image}
                                            zoomLevel={2}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`works-button works-button_center cursorPointer ${item.link === 'none' ? 'hidden' : ''}`}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="works-button__text">{t('view-more')}</a>
                </div>
            </div>
        </div>
    );
};

export default WorksItemPage;

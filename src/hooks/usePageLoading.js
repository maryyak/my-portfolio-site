import {useState, useEffect} from 'react';
import igletsFont from './../assets/fonts/Iglets.ttf'
import angstFont from './../assets/fonts/Angst-Bold.otf'
import comfortaaFont from './../assets/fonts/Comfortaa.ttf'
import monserratFont from './../assets/fonts/Montserrat-VariableFont_wght.ttf'

const usePageLoading = () => {
    const [loading, setLoading] = useState(true);
    const [completeAnimation, setCompleteAnimation] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            const fontIglets = new FontFace('Iglets', `url(${igletsFont})`);
            const fontAngstBold = new FontFace('Angst', `url(${angstFont})`, { weight: '700' });
            const fontComfortaa = new FontFace('Comfortaa', `url(${comfortaaFont})`);
            const fontMontserrat = new FontFace('Montserrat', `url(${monserratFont})`);

            Promise.all([fontIglets.load(), fontAngstBold.load(), fontComfortaa.load(), fontMontserrat.load()])
                .then((loadedFonts) => {
                    loadedFonts.forEach((font) => {
                        document.fonts.add(font);
                    });
                })
                .catch((error) => {
                    console.error('Font loading failed:', error);
                    setLoading(false);
                });
            setCompleteAnimation(true);
            setTimeout(() => {setLoading(false)}, 3000);
        };

        window.addEventListener('load', handleLoad);

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    return { loading, completeAnimation };
};

export default usePageLoading;

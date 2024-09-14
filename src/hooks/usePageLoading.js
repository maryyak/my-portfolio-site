import { useState, useEffect } from 'react';
import igletsFont from './../assets/fonts/Iglets.ttf';
import angstFont from './../assets/fonts/Angst-Bold.otf';
import comfortaaFont from './../assets/fonts/Comfortaa.ttf';
import monserratFont from './../assets/fonts/Montserrat-VariableFont_wght.ttf';

const usePageLoading = () => {
    const [loading, setLoading] = useState(true);
    const [completeAnimation, setCompleteAnimation] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            try {
                const fontIglets = new FontFace('Iglets', `url(${igletsFont})`);
                const fontAngstBold = new FontFace('Angst', `url(${angstFont})`, { weight: '700' });
                const fontComfortaa = new FontFace('Comfortaa', `url(${comfortaaFont})`);
                const fontMontserrat = new FontFace('Montserrat', `url(${monserratFont})`);

                const loadedFonts = await Promise.all([
                    fontIglets.load(),
                    fontAngstBold.load(),
                    fontComfortaa.load(),
                    fontMontserrat.load(),
                ]);

                loadedFonts.forEach((font) => {
                    document.fonts.add(font);
                });

                setCompleteAnimation(true);
            } catch (error) {
                console.error('Font loading failed:', error);
            } finally {
                setTimeout(() => setLoading(false), 3000); // Анимация завершена
            }
        };

        const handleLoad = () => {
            loadFonts();
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
        }

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return { loading, completeAnimation };
};

export default usePageLoading;
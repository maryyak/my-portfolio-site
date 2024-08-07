import {useState, useEffect} from 'react';

const usePageLoading = () => {
    const [loading, setLoading] = useState(true);
    const [completeAnimation, setCompleteAnimation] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            const fontIglets = new FontFace('Iglets', 'url(/fonts/Iglets.ttf)');
            const fontAngstBold = new FontFace('Angst', 'url(/fonts/Angst-Bold.otf)', { weight: '700' });
            const fontComfortaa = new FontFace('Comfortaa', 'url(/fonts/Comfortaa.ttf)');

            Promise.all([fontIglets.load(), fontAngstBold.load(), fontComfortaa.load()])
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
            setTimeout(() => {setLoading(false)}, 3000); // Длительность анимации в мс
        };

        // Слушаем событие полной загрузки страницы
        window.addEventListener('load', handleLoad);

        // Убираем слушателя при размонтировании компонента
        return () => window.removeEventListener('load', handleLoad);
    }, []);

    return { loading, completeAnimation };
};

export default usePageLoading;

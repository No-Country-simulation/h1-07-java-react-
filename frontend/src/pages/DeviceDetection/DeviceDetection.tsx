import React, { useEffect, useState } from 'react';
import AppRouter from '../../routers/AppRouter';

const DeviceDetection: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 568); 
        };

        handleResize(); 
        window.addEventListener('resize', handleResize); 

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isMobile ? (
                <AppRouter />
            ) : (
                <div className="flex flex-col justify-center items-center h-screen bg-black text-white font-inter">
                    <h1>Esta aplicación solo está disponible para dispositivos móviles.</h1>
                    <p>Por favor, accede desde un dispositivo móvil.</p>
                </div>
            )}
        </>
    );
};

export default DeviceDetection;

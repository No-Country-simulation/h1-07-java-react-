import React, { useEffect, useState } from 'react';

interface PropsDeviceDectection{
    children: JSX.Element | JSX.Element[]
}

const DeviceDetection: React.FC<PropsDeviceDectection> = ({children}) => {
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
                {children}
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

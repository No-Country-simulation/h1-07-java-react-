import React, { useEffect, useState } from 'react';
import AppRouter from '../../routers/AppRouter';

interface PropsDeviceDetection {
  children: JSX.Element | JSX.Element[];
}

const DeviceDetection: React.FC<PropsDeviceDetection> = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isAndroidOrIOS, setIsAndroidOrIOS] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    const checkDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent)) {
        setIsAndroidOrIOS(true);
      } else {
        setIsAndroidOrIOS(false);
      }
    };

    handleResize();
    checkDevice();
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile && isAndroidOrIOS ? (
        <AppRouter />
      ) : (
        <div className="flex flex-col justify-center items-center h-screen bg-black text-white font-inter">
          <h1>Esta aplicación solo está disponible para dispositivos móviles con Android o iOS.</h1>
          <p>Por favor, accede desde un dispositivo móvil con Android o iOS.</p>
        </div>
      )}
    </>
  );
};

export default DeviceDetection;

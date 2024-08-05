import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const DeviceDetection: React.FC = () => {
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
        <Outlet />
      ) : (
        <div className="flex flex-col justify-center items-center h-screen  font-inter">
          <h1 className='text-center'>Esta aplicación solo está disponible para dispositivos móviles con Android o iOS.</h1>
          <p>Por favor, Scanner el código QR</p>
          <img src="QR/qrcode-generado.png" alt="" />
        </div>
      )}
    </>
  );
};

export default DeviceDetection;

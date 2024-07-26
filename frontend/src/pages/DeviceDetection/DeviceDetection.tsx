import React, { useEffect, useState } from 'react';

interface PropsDeviceDetection {
  children?: React.ReactNode;
}

const DeviceDetection: React.FC<PropsDeviceDetection> = ({ children }) => {
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
  const isAndroidOrIOS = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  return (
    <>
      {isMobile && isAndroidOrIOS ? (
        children
      ) : (
        <div className="flex flex-col justify-center items-center h-screen bg-black text-white font-inter">
          <h1>Esta aplicación solo está disponible para dispositivos móviles con Android o iOS.</h1>
          <p>Por favor, escanee el código QR</p>
          <img src="QR/qrcode-generado.png" alt="QR Code" />
        </div>
      )}
    </>
  );
};

export default DeviceDetection;

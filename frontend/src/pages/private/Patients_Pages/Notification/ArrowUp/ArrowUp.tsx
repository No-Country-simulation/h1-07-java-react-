import { useEffect, useState } from 'react';
import { FlechaIconTwo } from '../../../../../../public/icons/Icons'

export const ArrowUp = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  useEffect(() => {

    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);
  return (
    <>
      {visible && (
        <a
          href="#inicio-notificacion"
          className=" rotate-180  bg-white z-30 bg-grays-400 border-2 items-center justify-center flex animate-bounce w-10 rounded-full h-10 fixed right-5 bottom-5"
        >
          <span className=" rotate-90">
            <FlechaIconTwo
              width={40}
              height={40}
              stroke={"#111"}
              classname={""}
            />
          </span>
        </a>
      )}
    </>
  )
}

import { useState, useEffect } from 'react';

import Logo from './Logo';
import InputSearch from './inputs/InputSearch';
import Container from './Container';
import ModalSearch from './modals/ModalSearch';

export default function Hero() {
  const [heroImage, setHeroImage] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        return setHeroImage('/assets/images/HeroImagelg.png');
      }

      if (window.innerWidth > 768) {
        return setHeroImage('/assets/images/HeroImagemd.png');
      }

      return setHeroImage('/assets/images/HeroImagesm.png');
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const openInputSearch = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="relative h-48 sm:h-auto">
      <img
        src={heroImage}
        alt="HeroCatWiki"
        className="object-cover w-full h-full"
      />
      <Container
        className="
        text-white
        absolute 
        top-0
        left-0
        right-0
        bottom-0
        flex
        items-center
        "
      >
        <div
          className="
          flex
          flex-col
          justify-center
          gap-5
          max-w-[12em]
          md:max-w-xs
          lg:max-w-sm
          "
        >
          <div>
            <div className="w-24 md:w-40 lg:w-80">
              <Logo
                className="
                invert 
                w-full h-full 
                custom-clip-path 
                sm:custom-clip-path-none
              "
              />
            </div>
            <p className="mt-2 text-md md:text-xl lg:text-3xl">Get to know more about your cat breed</p>
          </div>
          <div className="relative">
            <InputSearch
              value={inputValue}
              setValue={setInputValue}
              onClick={openInputSearch}
            />
            <ModalSearch
              value={inputValue}
              setValue={setInputValue}
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

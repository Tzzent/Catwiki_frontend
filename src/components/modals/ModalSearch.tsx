import { Scrollbars } from 'react-custom-scrollbars';
import { useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { LRUCache } from 'lru-cache';

import InputSearch from '../inputs/InputSearch';
import { useNavigate } from 'react-router-dom';

interface ModalSearchProps {
  value: string,
  setValue: (value: string) => void,
  isOpen: boolean,
  onClose: () => void,
}

interface IBreedItem {
  id: number,
  name: string,
  reference_image_id: string,
}

const cache = new LRUCache({ max: 100 });

export default function ModalSearch({
  value,
  setValue,
  isOpen,
  onClose,
}: ModalSearchProps) {
  const navigate = useNavigate();
  const [breeds, setBreeds] = useState<IBreedItem[]>([]);
  const [persistData, setPersistData] = useState<IBreedItem[]>([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      const cacheKey = 'breeds';
      const cachedData: IBreedItem[] = cache.get(cacheKey) as IBreedItem[];

      if (cachedData) {
        setBreeds(cachedData);
        setPersistData(cachedData);
      } else {
        const response = await fetch(`${import.meta.env.VITE_CAT_API}/breeds/search?limit=200`);
        const data = await response.json();

        setBreeds(data);
        setPersistData(data);

        cache.set(cacheKey, data);
      }
    }

    fetchBreeds();
  }, []);

  useEffect(() => {
    if (!value) {
      return setBreeds(persistData);
    }

    if (persistData.length > 0) {
      setBreeds(persistData.filter((breed) => breed.name.toLowerCase().includes(value.toLowerCase())));
    }
  }, [value, persistData]);

  return (
    <div
      className={`
      ${isOpen ? 'visible' : 'hidden'}
      `}
    >
      <div
        className="
        fixed
        z-20
        left-0
        right-0
        top-0
        shadow-xl
        rounded-b-3xl
        bg-white
        text-black
        sm:absolute
        sm:top-16
        sm:rounded-t-3xl
        px-5
        lg:px-0
        "
      >
        <div
          className="
          h-full
          flex
          flex-col
          gap-3
          sm:px-0
          py-2
          "
        >
          <IoMdClose
            onClick={onClose}
            className="self-end sm:hidden"
          />
          <div className="lg:hidden">
            <InputSearch
              value={value}
              setValue={setValue}
            />
          </div>
          <div>
            <Scrollbars
              style={{ width: '100%', height: '15rem' }}
              id="scroll-container"
            // onScrollFrame={handleScroll}
            >
              {breeds?.map((item, index) => (
                <div
                  onClick={() => {
                    setValue(item.name);
                    navigate(`/breed/${item.reference_image_id}`);
                    onClose();
                  }}
                  key={index}
                  className="px-3 py-2 hover:bg-gray-300 rounded-2xl truncate cursor-pointer"
                >
                  {item.name}
                </div>
              ))}
            </Scrollbars>
          </div>
        </div>
      </div>
      <div
        onClick={onClose}
        className="
        fixed 
        top-0
        left-0
        bottom-0
        right-0
        w-full 
        h-full
        bg-black 
        opacity-70
        z-10
        sm:opacity-0
        "
      ><span className="sr-only">Overlay</span>
      </div>
    </div>
  )
}

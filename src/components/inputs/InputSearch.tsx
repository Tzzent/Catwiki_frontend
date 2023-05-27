import { ChangeEvent } from 'react';
import { FaSearch } from 'react-icons/fa';

interface InputSearchProps {
  onClick?: () => void,
  value: string,
  setValue: (value: string) => void,
}

export default function InputSearch({
  onClick,
  value,
  setValue,
}: InputSearchProps) {
  const onInputChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  }

  return (
    <label
      onClick={onClick}
      htmlFor="input-search"
      className="
      text-black
      rounded-3xl
      relative
      "
    >
      <input
        value={value}
        onChange={onInputChange}
        id="input-search"
        type="text"
        placeholder="Search"
        autoComplete="off"
        className="
        w-full
        h-full
        placeholder:text-black
        placeholder:font-semibold
        rounded-3xl
        pl-3
        pr-8
        py-2
        sm:py-4
        border-2
        border-gray-900
        truncate
        "
      />
      <FaSearch
        className="
        absolute 
        right-3
        top-0 
        bottom-0 
        h-full 
        "
      />
    </label>
  )
}

import { useState } from "react";
import rowDown from "../assets/icons/rowDown.svg";
import rowUp from "../assets/icons/rowUp.svg";
import clearFilter from '../assets/icons/deleteIcon.svg';

const options = [
    { value: 'all', label: 'Все типы' },
    { value: 'incoming', label: 'Входящие' },
    { value: 'outgoing', label: 'Исходящие' },
];

const TypeCallFilter: React.FC<{ onFilterChange: (value: string) => void }> = ({ onFilterChange }) => {

    const [selectedOption, setSelectedOption] = useState<string>('all');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        onFilterChange(option);
        setIsOpen(false);
    };

    const handleClearOptionClick = () => {
        setSelectedOption('all');
        onFilterChange('all');
        setIsOpen(false);
    }

    return (
        <div className="relative inline-block text-left">
            <div className="flex gap-4">
                <div className="inline-flex gap-1 items-center">
                    <button
                        type="button"
                        className="inline-flex justify-between w-full text-sm font-normal text-[#5e7793]"
                        onClick={() => setIsOpen(!isOpen)}>
                        {options.find((option) => option.value === selectedOption)?.label}
                    </button>
                    <img className="w-2 h-2" src={isOpen ? rowUp : rowDown} alt="стрелка"/>
                </div>
                {selectedOption !=='all' && <div className="inline-flex gap-1 items-center">
                    <p className="inline-flex justify-between w-full text-sm font-normal text-[#5e7793]">
                        Сбросить фильтры
                    </p>
                    <img onClick={() => handleClearOptionClick()} className="w-2 h-2 cursor-pointer" src={clearFilter} alt="стрелка"/>
                </div>}
            </div>
           
            {isOpen && (
            <div className="absolute left-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {options.map((option) => (
                    <button
                        key={option.value}
                        className={`block px-4 py-2 text-sm w-full text-left text-gray-700 hover:bg-[#dee4ff] focus:outline-none ${selectedOption === option.value ? 'text-[#002cfb]' : ''}`}
                        role="menuitem"
                        onClick={() => handleOptionClick(option.value)}
                    >
                        {option.label}
                    </button>
                ))}
                </div>
            </div>
            )}
      </div>
    );
}
export default TypeCallFilter;
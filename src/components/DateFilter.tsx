import { useContext, useState } from "react";
import { ParamsContext } from "../context/ParamsContext";
import rowLeft from '../assets/icons/rowLeft.svg';
import rowRight from '../assets/icons/rowRigth.svg';
import { DatePicker, Space } from "antd";
import { formatDate, getSelectedPeriodDates } from "../utils/utils";

const options = [
    { value: '3day', label: '3 дня' },
    { value: 'week', label: 'Неделя' },
    { value: 'month', label: 'Месяц' },
    { value: 'year', label: 'Год' },
];

const DateFilter: React.FC = () => {

    const dataParamsContext = useContext(ParamsContext);
    const [selectedOption, setSelectedOption] = useState<string>('3day');
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [dateRange, setDateRange] = useState<moment.Moment[]>([]);

    const { RangePicker } = DatePicker;

    const handleOptionClick = (option: string) => {
        setDateRange([]);
        setSelectedOption(option);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const findedStartEndDays: any = getSelectedPeriodDates(option);
        dataParamsContext?.handleFilterDate(findedStartEndDays.start_date, findedStartEndDays.end_date);
        setIsOpen(false);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onDateRangeChange = (dates: any) => {
        setSelectedOption('');
        setDateRange(dates);
        const date_start = formatDate(dates[0].startOf('day').toISOString());
        const date_end = formatDate(dates[1].endOf('day').toISOString());
        dataParamsContext?.handleFilterDate(date_start, date_end);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left">
                <div className="inline-flex gap-5 items-center">
                    <img className="w-2 h-2 cursor-pointer" src={rowLeft} alt="стрелка"/>
                    <button
                        type="button"
                        className="inline-flex justify-between w-full text-sm font-normal text-[#5e7793]"
                        onClick={() => setIsOpen(!isOpen)}>
                            {options.find((option) => option.value === selectedOption)?.label}
                            {dateRange.length > 0 && formatDate(dateRange[0].startOf('day').toISOString()) + ' ' + formatDate(dateRange[1].endOf('day').toISOString())}
                    </button>
                    <img className="w-2 h-2 cursor-pointer" src={rowRight} alt="стрелка"/>
                </div>    

            {isOpen && (
            <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {options.map((option) => (
                    <button
                        key={option.value}
                        className={`block px-4 py-2 text-sm w-full text-left hover:bg-[#dee4ff] focus:outline-none ${selectedOption === option.value ? 'text-[#002cfb]' : ''}`}
                        role="menuitem"
                        onClick={() => handleOptionClick(option.value)}
                    >
                        {option.label}
                    </button>
                ))}
                <p className="block px-4 py-2 text-sm w-full text-left">Указать даты</p>
                <Space direction="vertical" className="mb-2">
                    <RangePicker format="YYYY-MM-DD" placeholder={['--.--', '--.--']} className='border-none' onChange={onDateRangeChange}/>
                </Space>
                </div>
            </div>
            )}
      </div>
    )
}
export default DateFilter;
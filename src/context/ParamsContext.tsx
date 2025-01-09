import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { ICallsParams } from '../types/calls.interface';
import { getSelectedPeriodDates } from '../utils/utils';

// Определяем типы для контекста
interface ParamsContextType {
  paramsRequest: ICallsParams;
  handleSort: (typeSort: string) => void;
  handleFilterChange: (value: string | number) => void;
  handleFilterDate: (date_start: string, date_end: string) => void;
  selectedOption: string | number;
}

// Создаем контекст с начальным значением
// eslint-disable-next-line react-refresh/only-export-components
export const ParamsContext = createContext<ParamsContextType | undefined>(undefined);

// Провайдер контекста
export const ParamsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [paramsRequest, setParamsRequest] = useState<ICallsParams>({});
  const [selectedOption, setSelectedOption] = useState<string | number>('all');

  useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const findedStartEndDays: any = getSelectedPeriodDates('3day');
      setParamsRequest({
        date_start: findedStartEndDays.start_date,
        date_end: findedStartEndDays.end_date
      })
  },[])

  const handleSort = (typeSort: string) => {
    switch(typeSort) {
      case 'Время': setParamsRequest({...paramsRequest, sort_by: 'date' });
        break;
      case 'Длительность': setParamsRequest({...paramsRequest, sort_by: 'duration' });
        break;
      default: return;  
    }
  };

  const handleFilterDate = (date_start: string, date_end: string) => {
    setParamsRequest ({
        date_start: date_start,
        date_end: date_end
      });
  };

  const handleFilterChange = (value: string | number) => {
    setSelectedOption(value);
  };

  return (
    <ParamsContext.Provider value={{ paramsRequest, handleSort, handleFilterChange, selectedOption, handleFilterDate }}>
      {children}
    </ParamsContext.Provider>
  );
};

import React, { createContext, useState, ReactNode } from 'react';
import { ICallsParams } from '../types/calls.interface';

// Определяем типы для контекста
interface ParamsContextType {
  paramsRequest: ICallsParams;
  handleSort: (typeSort: string) => void;
}

// Создаем контекст с начальным значением
// eslint-disable-next-line react-refresh/only-export-components
export const ParamsContext = createContext<ParamsContextType | undefined>(undefined);

// Провайдер контекста
export const ParamsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [paramsRequest, setParamsRequest] = useState<ICallsParams>({
    date_start: '2022-01-07',
    date_end: '2024-01-28'
  });

  const handleSort = (typeSort: string) => {
    switch(typeSort) {
      case 'Время': setParamsRequest({...paramsRequest, sort_by: 'date' });
        break;
      case 'Длительность': setParamsRequest({...paramsRequest, sort_by: 'duration' });
        break;
      default: return;  
    }
  };

  return (
    <ParamsContext.Provider value={{ paramsRequest, handleSort }}>
      {children}
    </ParamsContext.Provider>
  );
};

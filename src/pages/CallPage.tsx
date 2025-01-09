import { useContext, useEffect, useState } from "react";
import Sorting from "../components/ui/Sorting";
import { ICallsData } from "../types/calls.interface";
import { filteredDataCalls } from "../utils/utils";
import { ParamsContext } from "../context/ParamsContext";
import TableRow from "../components/TableRow";
import React from "react";

interface ICallPageProps {
    dataCalls: ICallsData[] | undefined;
}

const CallPage: React.FC<ICallPageProps> = (props) => {

    const {
        dataCalls
    } = props;

    const dataParamsContext = useContext(ParamsContext);
    const [dataForRender, setDataForRender] = useState<ICallsData[]>();
    
    useEffect(() => {
        let isMounted = true;
        if (dataCalls) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            isMounted && setDataForRender(dataCalls);
        }
        return () => {
            isMounted = false;
        }
    }, [dataCalls])

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg border-gray-200">
                <thead>
                    <tr className="w-full h-16 border-b border-gray-200 text-sm font-normal text-[#5E7793] opacity-85">
                        <td className="w-14 py-2 px-4 text-left">Тип</td>
                        <td className="w-20 py-2 px-4 text-left">
                            <Sorting
                                text='Время'
                            />
                        </td>
                        <td className="w-32 py-2 px-4 text-left">Сотрудник</td>
                        <td className="w-80 py-2 px-4 text-left">Звонок</td>
                        <td className="w-52 py-2 px-4 text-left">Источник</td>
                        <td className="w-96 py-2 px-4 text-left">Оценка</td>
                        <td className="w-24 py-2 px-4 text-right">
                            <Sorting
                                text='Длительность'
                            />
                        </td>
                    </tr>
                </thead>
                <tbody>
                {dataForRender && filteredDataCalls(dataForRender, dataParamsContext?.selectedOption).length > 0 ? (
                    <>
                        {filteredDataCalls(dataForRender, dataParamsContext?.selectedOption).map(item => (
                            <React.Fragment key={item.id}>
                                <TableRow
                                    {...item}
                                />
                        </React.Fragment>
                        ))}
                    </>
                ) : (
                    <tr>
                        <td className="mt-2 fixed left-2/4">
                            Данные не найдены!
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}

export default CallPage;

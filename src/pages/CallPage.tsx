import { useContext, useEffect, useState } from "react";
import { ICallsData } from "../types/calls.interface";
import { addGradeStatusProp, filteredDataCalls } from "../utils/utils";
import { ParamsContext } from "../context/ParamsContext";
import TableRow from "../components/TableRow";
import React from "react";
import TableHeader from "../components/TableHeader";
import Table from "../components/Table";

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
            const results = addGradeStatusProp(dataCalls);
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            isMounted && setDataForRender(results);
        }
        return () => {
            isMounted = false;
        }
    }, [dataCalls])

    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader/>
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
            </Table>
        </div>
    )
}

export default CallPage;

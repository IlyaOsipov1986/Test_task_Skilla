import { useState } from "react";
import { ICallsData } from "../types/calls.interface";
import { formatTime, formatTimeToDuration } from "../utils/utils";
import GradeStatus from "./ui/GradeStatus";
import NumberCall from "./ui/NumberCall";
import PersonAvatar from "./ui/PersonAvatar";
import StatusCall from "./ui/StatusCall";
import AudioPlayer from "./ui/AudioPlayer";

const TableRow: React.FC<ICallsData> = ({...item}) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <tr onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="hover:bg-[#d4dff3]/20 hover:cursor-pointer h-16"
            >
                <td className="w-14 py-2 px-4 border-b border-gray-200">
                    <StatusCall
                        status={item.in_out}
                    />
                </td>
                <td className="w-20 py-2 px-4 border-b border-gray-200 text-[#122945] font-light text-base">
                    {formatTime(item.date)}
                </td>
                <td className="w-32 py-2 px-4 border-b border-gray-200">
                    <PersonAvatar 
                        person_avatar={item.person_avatar}
                    />
                </td>
                <td className="w-80 py-2 px-4 border-b border-gray-200 text-[#122945] font-light text-base">
                    <NumberCall
                        dataForNumber={item}
                    />
                </td>
                <td className="w-52 max-w-16 py-2 px-4 border-b border-gray-200 text-[#5E7793] font-light text-base truncate">
                    {item.source}
                </td>
                <td className="w-96 py-2 px-4 border-b border-gray-200">
                    <GradeStatus
                        gradeIndex={item.gradeIndex}
                    /> 
                </td>
                <td className="w-24 py-2 px-4 border-b border-gray-200 text-[#122945] font-light text-base text-right">
                    <div className="inline-flex gap-2.5 items-center relative">
                        {formatTimeToDuration(item.time)}
                        {isHovered && item.record && 
                            <AudioPlayer
                                id={item.record}
                            />
                        }   
                    </div>                  
                </td>
            </tr>
        </>
    )
}
export default TableRow;

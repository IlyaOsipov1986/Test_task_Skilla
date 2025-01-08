import rowUp from '../../assets/icons/rowUp.svg';
import rowDown from '../../assets/icons/rowDown.svg';
import { useContext, useState } from 'react';
import { ParamsContext } from '../../context/ParamsContext';

interface ISortingProps {
    text: string;
}

const Sorting: React.FC<ISortingProps> = (props) => {

    const {
        text,
    } = props;

    const dataParamsContext = useContext(ParamsContext);
    
    const [isActiveSort, setIsActiveSort] = useState(false);

    function onHandleSort () {
        setIsActiveSort(!isActiveSort);
        dataParamsContext?.handleSort(text);
    }

    return(
        <div onClick={() => onHandleSort()} className='inline-flex gap-1 items-center cursor-pointer'>
            <p>{text}</p>
            <img className='w-2 h-2' src={isActiveSort ? rowUp : rowDown} alt="стрелка"/>
        </div>
    )
}
export default Sorting;
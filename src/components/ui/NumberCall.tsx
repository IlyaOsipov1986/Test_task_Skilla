import useSelectNumberCall from "../../utils/hooks/useSelectNumberCall";

interface INumberCallProps {
    dataForNumber: {
        in_out: number;
        from_number?: string;
        to_number?: string;
    };
}
 
const NumberCall: React.FC<INumberCallProps> = (props) => {

    const {
        dataForNumber
    } = props;

    const { number } = useSelectNumberCall(dataForNumber.in_out, dataForNumber.from_number, dataForNumber.to_number);

    return (
        <p>{number}</p>
    )
}
export default NumberCall;
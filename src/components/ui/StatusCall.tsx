import callIncoming from '../../assets/icons/callIncoming.svg';
import callOutgoing from '../../assets/icons/callOutgoing.svg';
import callMissed from '../../assets/icons/callMissed.svg';

const getTypeIconForStatus = (status: unknown) => {
    if (status === 1) {
      return callIncoming;
    } else if(status === 0) {
        return callOutgoing;
    } else {
        return callMissed;
    }
};

interface IStatusCallProps {
    status: number | string;
}
  
const StatusCall: React.FC<IStatusCallProps> = (props) => {

    const {
        status
    } = props;

    return (
      <img
        className='object-cover'
        src={getTypeIconForStatus(status)}
        alt='иконка типа звонка'
      />
    );
  };
  
  export default StatusCall;
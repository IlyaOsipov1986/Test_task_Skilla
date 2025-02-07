import statusGradeWell from '../../assets/icons/statusGradeWell.svg';
import statusGradeGood from '../../assets/icons/statusGradeGood.svg';
import statusGradeBad from '../../assets/icons/statusGradeBad.svg';

interface IGradeStatusProps {
    gradeIndex: number | undefined;
}
  
const GradeStatus: React.FC<IGradeStatusProps> = (props) => {

    const {
        gradeIndex
    } = props;

    const gradeArr = [statusGradeWell, statusGradeGood, statusGradeBad];

    return (
        <img className='object-cover' src={gradeArr[gradeIndex ?? 1]} alt="оценка"/>
    )
}
export default GradeStatus;
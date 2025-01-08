import statusGradeWell from '../../assets/icons/statusGradeWell.svg';
import statusGradeGood from '../../assets/icons/statusGradeGood.svg';
import statusGradeBad from '../../assets/icons/statusGradeBad.svg';

const getRandomValueGrage = (gradeArr: string[]) => {
    const randomIndex = Math.floor(Math.random() * gradeArr.length);
    return gradeArr[randomIndex];
};

const GradeStatus: React.FC = () => {

    const gradeArr = [statusGradeWell, statusGradeGood, statusGradeBad];

    return(
        <img className='object-cover' src={getRandomValueGrage(gradeArr)} alt="оценка"/>
    )
}
export default GradeStatus;
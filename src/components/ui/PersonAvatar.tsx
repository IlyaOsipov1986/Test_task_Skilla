import emptyAvatar from "../../assets/icons/emptyAvatar.svg";

interface IPersonAvatarProps {
    person_avatar: string;
}
 
const PersonAvatar: React.FC<IPersonAvatarProps> = (props) => {

    const {
        person_avatar
    } = props;

    return (
        <img className='w-8 h-8 rounded-full object-cover' src={person_avatar ? person_avatar : emptyAvatar} alt="аватар"/>
    )
}
export default PersonAvatar;
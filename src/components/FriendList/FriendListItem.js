import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendListItem({avatar, name, isOnline}) {
    return (
        <>
            <span className= {isOnline ? s.online : s.offline}>{isOnline}</span>
  <img className= {s.avatar} src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
</>
    )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

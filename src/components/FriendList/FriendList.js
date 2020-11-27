import PropTypes, { func } from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem';

export default function FriendList({friends}) {
    return (<ul className="friend-list">
        {friends.map(friend => (
<li className={s.item} key={friend.id}>
          <FriendListItem
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
            </li>
        ))}
    </ul>)
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
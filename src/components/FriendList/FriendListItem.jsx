import { Item, Avatar, Status, Name } from './FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status statusType={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

export default FriendListItem;

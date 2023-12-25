import { Avatar, ProfileWrap, Description, Name, Text, StatsList, StatsItem, SpanLabel, SpanQuantity } from "./Profile.styled"

const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
<ProfileWrap>
  <Description>
    <Avatar
      src={avatar}
      alt={username}
    />
    <Name>{username}</Name>
    <Text>@{tag}</Text>
    <Text>{location}</Text>
  </Description>

  <StatsList>
    <StatsItem>
      <SpanLabel>Followers</SpanLabel>
      <SpanQuantity>{stats.followers}</SpanQuantity>
    </StatsItem>
    <StatsItem>
      <SpanLabel>Views</SpanLabel>
      <SpanQuantity>{stats.views}</SpanQuantity>
    </StatsItem>
    <StatsItem>
      <SpanLabel>Likes</SpanLabel>
      <SpanQuantity>{stats.likes}</SpanQuantity>
    </StatsItem>
  </StatsList>
</ProfileWrap>
    )
}

export default Profile
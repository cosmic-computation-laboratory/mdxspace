/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Link } from "gatsby";

import { RightSideCard } from "../right-side-card";

const Friend = ({ name, avatar }) => (
  <Box>
    <p>{name}</p>
  </Box>
);

export const TopFriends = ({ name, friendCount, topFriends }) => (
  <RightSideCard title={`${name}’s Friend Space`}>
    {name} has {friendCount} Friends.
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
      }}
    >
      {topFriends.map((friend) => (
        <Friend key={friend.name} {...friend} />
      ))}
    </div>
    <Link to="/friends">View all of {name}’s Friends</Link>
  </RightSideCard>
);

/** @jsx jsx */
import { jsx, Box, Flex } from "theme-ui";
import { Link } from "gatsby";

import { RightSideCard } from "../right-side-card";

export const Wall = ({ name, count, total, data }) => (
  <RightSideCard title={`${name}’s Friends Comments`}>
    <p sx={{ variant: "styles.p" }}>
      Displaying {count} of {total} comments (
      <Link to="/comments">View/Edit All Comments</Link>)
    </p>
    <Wall.CommentList comments={data} />
  </RightSideCard>
);

Wall.CommentList = ({ comments }) => (
  <div>
    {comments.map((comment) => (
      <Wall.Comment key={comment.id} {...comment} />
    ))}
  </div>
);

Wall.Comment = ({ user: { name, avatar }, content, timestamp }) => (
  <Flex>
    <Box sx={{}}>
      {name} {avatar}
    </Box>
    <Box>
      <p>{timestamp}</p>
      <p>{content}</p>
    </Box>
  </Flex>
);

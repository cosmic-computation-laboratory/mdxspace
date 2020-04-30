/** @jsx jsx */
import { jsx, Box, Heading } from "theme-ui";
import { Link } from "gatsby";

export const Blog = ({ name, posts }) => (
  <Box>
    <Heading as="h4">
      {name}’s Latest Blog Entry [
      <Link to="/rss.xml">Subscribe to this Blog</Link>]
    </Heading>
    <ul sx={{ listStyle: "none", padding: 0 }}>
      {posts.map((post) => (
        <li key={post.slug}>
          <p sx={{ variant: "styles.p" }}>
            {post.title} (<Link to={`/posts/${post.slug}`}>view more</Link>)
          </p>
        </li>
      ))}
    </ul>
    <Link to="/posts">View All Blog Entries</Link>
  </Box>
);

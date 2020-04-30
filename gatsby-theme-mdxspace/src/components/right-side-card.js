/** @jsx jsx */
import { jsx, Box, Heading } from "theme-ui";

export const RightSideCard = ({ title, children, ...props }) => (
  <Box sx={{ variant: "rightSideCard.wrapper" }} {...props}>
    <Heading as="h4" sx={{ variant: "rightSideCard.title" }}>
      {title}
    </Heading>
    <Box>{children}</Box>
  </Box>
);

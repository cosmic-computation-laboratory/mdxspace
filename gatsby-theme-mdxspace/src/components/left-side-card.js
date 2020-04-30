/** @jsx jsx */
import { jsx, Box, Heading, Flex } from "theme-ui";

export const LeftSideCard = ({ title, children, ...props }) => (
  <Box sx={{ variant: "leftSideCard.wrapper" }} {...props}>
    <Heading as="h4" sx={{ variant: "leftSideCard.title" }}>
      {title}
    </Heading>
    <Box>{children}</Box>
  </Box>
);

LeftSideCard.Table = (props) => (
  <Box sx={{ variant: "leftSideCard.table" }} {...props} />
);

LeftSideCard.Row = ({ title, text }) =>
  !!text && (
    <Box sx={{ variant: "leftSideCard.row" }}>
      <Box sx={{ variant: "leftSideCard.rowTitle" }}>{title}:</Box>
      <Box sx={{ variant: "leftSideCard.rowText" }}>{text}</Box>
    </Box>
  );

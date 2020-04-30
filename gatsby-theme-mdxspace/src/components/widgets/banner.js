/** @jsx jsx */
import { jsx, Box, Heading } from "theme-ui";

export const Banner = ({ name }) => (
  <Box
    sx={{
      border: "2px solid",
      textAlign: "center",
      p: 3,
      mb: 3,
    }}
  >
    <Heading as="h4" sx={{ fontWeight: "bold" }}>
      {name} is in your extended network
    </Heading>
  </Box>
);

/** @jsx jsx */
import { jsx, Box, Heading } from "theme-ui";
import { Link } from "gatsby";
import Img from "gatsby-image";

export const Intro = ({
  name,
  profilePhoto,
  tagline,
  pronouns,
  age,
  location,
  country,
  lastUpdate,
}) => (
  <Box sx={{ mb: 3 }}>
    <Heading sx={{ fontSize: 3, mb: 2 }}>{name}</Heading>
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)" }}>
      <Box sx={{ mr: 2 }}>
        {/* <Img
          {...profilePhoto.childImageSharp}
          alt={`${name}’s profile photo`}
        /> */}
      </Box>
      <Box>
        <p sx={{ variant: "styles.p" }}>"{tagline}"</p>
        <p sx={{ variant: "styles.p" }}>{pronouns}</p>
        <p sx={{ variant: "styles.p" }}>{age} years old</p>
        <p sx={{ variant: "styles.p" }}>
          {location}
          <br />
          {country}
        </p>
        <p sx={{ variant: "styles.p" }}>Last Update: {lastUpdate}</p>
      </Box>
    </Box>
    <p sx={{ variant: "styles.p", textAlign: "center" }}>
      <Link to="/pics">View more pics</Link>
    </p>
  </Box>
);

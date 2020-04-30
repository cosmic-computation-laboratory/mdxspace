/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import * as Feather from "react-feather";

import { LeftSideCard } from "../left-side-card";

export const Contact = ({ name }) => (
  <LeftSideCard title={`Contacting ${name}`}>
    <ul
      sx={{
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      <Contact.Button text="Send Message" icon="Mail" />
      <Contact.Button text="Forward to Friend" icon="Send" />
      <Contact.Button text="Add to Friends" icon="UserPlus" />
      {/* <Contact.Button text="Add to Favorites" /> */}
      <Contact.Button text="Instant Message" icon="MessageSquare" />
      {/* <Contact.Button text="Block User" />
      <Contact.Button text="Add to Group" />
      <Contact.Button text="Rank User" /> */}
    </ul>
  </LeftSideCard>
);

Contact.Button = ({ text, icon }) => {
  const Icon = Feather[icon];
  return (
    <li>
      <Flex sx={{ px: 1, py: 1, alignItems: "center" }}>
        <Icon size={24} sx={{ mr: 1 }} />
        {/* <div sx={{ height: 24, width: 24, bg: "primary", mr: 1 }} /> */}
        <p sx={{ fontSize: 0 }}>{text}</p>
      </Flex>
    </li>
  );
};

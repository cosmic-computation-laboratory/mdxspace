/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";

import { LeftSideCard } from "../left-side-card";

export const Interests = ({
  name,
  general,
  music,
  movies,
  television,
  books,
}) => (
  <LeftSideCard title={`${name}’s Interests`}>
    <Fragment>
      <LeftSideCard.Row title="General" text={general} />
      <LeftSideCard.Row title="Music" text={music} />
      <LeftSideCard.Row title="Movies" text={movies} />
      <LeftSideCard.Row title="Television" text={television} />
      <LeftSideCard.Row title="Books" text={books} />
    </Fragment>
  </LeftSideCard>
);

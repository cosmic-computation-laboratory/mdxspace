/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";

import { LeftSideCard } from "../left-side-card";

const joinList = (xs) => xs.join(", ");
const formatBool = (b) => (!!b ? "Yes" : "No");

export const Details = ({
  name,
  status,
  hereFor,
  hometown,
  orientation,
  height,
  bodyType,
  ethnicity,
  religion,
  zodiacSign,
  children,
  smoke,
  drink,
  education,
  occuptation,
}) => (
  <LeftSideCard title={`${name}’s Details`}>
    <Fragment>
      <LeftSideCard.Row title="Status" text={status} />
      <LeftSideCard.Row title="Here for" text={joinList(hereFor)} />
      <LeftSideCard.Row title="Hometown" text={hometown} />
      <LeftSideCard.Row title="Orientation" text={orientation} />
      <LeftSideCard.Row
        title="Body type"
        text={[height, bodyType].join(", ")}
      />
      <LeftSideCard.Row title="Ethnicity" text={ethnicity} />
      <LeftSideCard.Row title="Religion" text={religion} />
      <LeftSideCard.Row title="Zodiac Sign" text={zodiacSign} />
      <LeftSideCard.Row title="Children" text={children} />
      <LeftSideCard.Row
        title="Smoke / Drink"
        text={[formatBool(smoke), formatBool(drink)].join(" / ")}
      />
      <LeftSideCard.Row title="Education" text={education} />
      <LeftSideCard.Row title="Occuptation" text={occuptation} />
    </Fragment>
  </LeftSideCard>
);

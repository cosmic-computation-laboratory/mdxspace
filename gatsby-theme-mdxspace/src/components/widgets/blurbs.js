/** @jsx jsx */
import { jsx, Heading } from "theme-ui";

import { RightSideCard } from "../right-side-card";

export const Blurbs = ({ name, aboutMe, likeToMeet }) => (
  <RightSideCard title={`${name}’s Blurbs`}>
    <Heading>About me:</Heading>
    <p>{aboutMe}</p>
    <Heading>Who I'd like to meet</Heading>
    <p>{likeToMeet}</p>
  </RightSideCard>
);

/** @jsx jsx */
import { jsx } from "theme-ui";

import { Blurbs } from "./widgets/blurbs";
import { Banner } from "./widgets/banner";
import { Blog } from "./widgets/blog";
import { Contact } from "./widgets/contact";
import { Details } from "./widgets/details";
import { Interests } from "./widgets/interests";
import { Intro } from "./widgets/intro";
import { MusicPlayer } from "./widgets/music-player";
import { TopFriends } from "./widgets/top-friends";
import { Wall } from "./widgets/wall";

export const Profile = ({
  profile: {
    info,
    interests,
    details,
    posts = [],
    friends = [],
    comments = [],
  },
}) => (
  <div
    sx={{
      display: "grid",
      gridTemplateColumns: ({ sizes }) => [
        "auto",
        `${sizes.leftCol}px ${sizes.rightCol}px`,
      ],
      gridColumnGap: 4,
    }}
  >
    <div>
      <Intro {...info} />
      <Contact name={info.name} />
      {/* <MusicPlayer /> */}
      <Interests name={info.name} {...interests} />
      <Details name={info.name} {...details} />
    </div>
    <div>
      <Banner name={info.name} />
      {/* <Blog name={info.name} posts={posts} /> */}
      <Blurbs name={info.name} />
      {/* <TopFriends name={info.name} {...friends} />
      <Wall name={info.name} {...comments} /> */}
    </div>
  </div>
);

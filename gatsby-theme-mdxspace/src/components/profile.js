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
  userInfo,
  interests,
  details,
  posts,
  friends,
  comments,
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
      <Intro {...userInfo} />
      <Contact name={userInfo.name} />
      {/* <MusicPlayer /> */}
      <Interests name={userInfo.name} {...interests} />
      <Details name={userInfo.name} {...details} />
    </div>
    <div>
      <Banner name={userInfo.name} />
      <Blog name={userInfo.name} posts={posts} />
      <Blurbs name={userInfo.name} />
      <TopFriends name={userInfo.name} {...friends} />
      <Wall name={userInfo.name} {...comments} />
    </div>
  </div>
);

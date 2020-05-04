/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Profile as DefaultProfile } from "../../components/profile";

export const Profile = ({ data }) => {
  return (
    <Styled.root>
      <div sx={{ p: [3, 4], display: "flex", justifyContent: "center" }}>
        <DefaultProfile profile={data.profile} />
      </div>
    </Styled.root>
  );
};

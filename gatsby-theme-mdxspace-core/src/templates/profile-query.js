import { graphql } from "gatsby";

import { Profile } from "../components/profile";

export const query = graphql`
  query($profileID: String!) {
    profile(id: { eq: $profileID }) {
      id
      slug
      lastUpdate
      info {
        name
        tagline
        pronouns
        age
        location
        country
      }
      interests {
        general
        music
        movies
        television
        books
        heroes
      }
      details {
        status
        hereFor
        orientation
        height
        bodyType
        ethnicity
        religion
        zodiacSign
        children
        smoke
        drink
        education
        occupation
      }
    }
  }
`;

// const ProfileTemplate = ({ data }) => {
//   // const { images } = useStaticQuery(graphql/* graphql */ `
//   //   query Profile {
//   //     images: allFile(filter: { extension: { regex: "/(jpg|png)/" } }) {
//   //       nodes {
//   //         id
//   //         name
//   //         childImageSharp {
//   //           fluid {
//   //             aspectRatio
//   //             base64
//   //             sizes
//   //             src
//   //             srcSet
//   //           }
//   //         }
//   //       }
//   //     }
//   //   }
//   // `);

//   // const profilePhoto = images.nodes.find(
//   //   (n) => n.name === "Third Eye - Brooke"
//   // );

//   const posts = [{ title: "Testing", slug: "/testing" }];

//   const blurbs = {
//     aboutMe: "Testing",
//     likeToMeet: "You.",
//   };

//   const friends = {
//     friendCount: 69,
//     topFriends: [
//       { name: "Kastania" },
//       { name: "Laust" },
//       { name: "Yoko" },
//       { name: "Jesse" },
//       { name: "Janet" },
//       { name: "Jenn" },
//       { name: "Roo" },
//       { name: "Aziza" },
//     ],
//   };

//   const comments = {
//     count: 2,
//     total: 2,
//     data: [
//       {
//         id: 2,
//         user: {
//           name: "Kastania",
//           avatar: "",
//         },
//         content: "Cooking dinner - want to join?",
//         timestamp: "Apr 13, 2020 04:20 PM",
//       },
//       {
//         id: 1,
//         user: {
//           name: "Mark Dalgleish",
//           avatar: "",
//         },
//         content: "Know any good React jokes?",
//         timestamp: "Apr 10, 2020 04:20 PM",
//       },
//     ],
//   };

//   return (
//     <Styled.root>
//       <div sx={{ p: [3, 4], display: "flex", justifyContent: "center" }}>
//         <Profile profile={profile} />
//       </div>
//     </Styled.root>
//   );
// };

export default Profile;

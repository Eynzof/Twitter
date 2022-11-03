import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import CreateProfile from "../components/CreateProfile";
import UpdateProfile from "../components/UpdateProfile";
import Modal from "react-modal";
export const ME_QUERY = gql`
  query me {
    me {
      id
      profile {
        id
        bio
        location
        website
        avatar
      }
    }
  }
`;

const ProfilePage = (profile: any) => {
  return (
    <div className="container">
      <h1>Profile</h1>
      {/* {data.me.Profile.id ? <UpdateProfile /> : <CreateProfile />} */}
      <p>{profile.bio}</p>
      <p>{profile.location}</p>
      <p>{profile.website}</p>
    </div>
  );
};

export default function Profile() {
  useEffect(() => {
    Modal.setAppElement("body");
  }, []);
  const { loading, error, data } = useQuery(ME_QUERY);
  if (loading) return <p>Loading</p>;

  console.log("data", data);

  if (error)
    return (
      <div>
        <p>{error.message}</p>
        <p>{error.stack}</p>
      </div>
    );
  return (
    <>
      {data.me.profile ? (
        <ProfilePage {...data.me.profile} />
      ) : (
        <div style={{ display: "flex", margin: "10px" }}>
          <p>You don't have profile currently</p>
          <CreateProfile />
        </div>
      )}
    </>
  );
}

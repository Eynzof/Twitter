import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import CreateProfile from "../components/CreateProfile";
import UpdateProfile from "../components/UpdateProfile";
import Modal from "react-modal";
export const ME_QUERY = gql`
  query MeProfile {
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

export default function Profile() {
  useEffect(() => {
    Modal.setAppElement("body");
  }, []);
  const { loading, error, data } = useQuery(ME_QUERY);
  if (loading) return <p>Loading</p>;

  // console.log("data", data);

  if (error)
    return (
      <div>
        <p>{error.message}</p>
        <p>{error.stack}</p>
      </div>
    );
  return (
    <>
      <div className="container">
        <h1>Profile</h1>
        {data.me.profile ? (
          <div>
            <UpdateProfile />
            <p>{data.me.profile.bio}</p>
            <p>{data.me.profile.location}</p>
            <p>{data.me.profile.website}</p>{" "}
          </div>
        ) : (
          <CreateProfile />
        )}
      </div>
    </>
  );
}

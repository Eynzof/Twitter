import { gql, useQuery } from "@apollo/client";
import React from "react";
import CreateProfile from "../components/CreateProfile";

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

export default function Profile() {
  const { loading, error, data } = useQuery(ME_QUERY);
  if (loading) return <p>Loading</p>;

  if (error)
    return (
      <div>
        <p>{error.message}</p>
        <p>{error.stack}</p>
      </div>
    );
  return (
    <div className="container">
      <h1>Profile</h1>
      <CreateProfile />
      {/* <p>{data.me.Profile.bio}</p>
      <p>{data.me.Profile.location}</p>
      <p>{data.me.Profile.website}</p> */}
    </div>
  );
}

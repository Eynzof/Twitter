import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import CreateProfile from "../components/CreateProfile";
import UpdateProfile from "../components/UpdateProfile";
import Modal from "react-modal";

import { Link, useNavigate } from "react-router-dom";

import "../styles/profile.css";
import "../styles/primary.css";
import LeftNav from "../components/LeftNav";
export const ME_QUERY = gql`
  query MeProfile {
    me {
      id
      name
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

  const navigate = useNavigate();

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
      <div className="primary">
        <div className="left">
          <LeftNav />
        </div>
        <div className="profile">
          <div className="profile-info">
            <div className="profile-head">
              <span className="back-arrow" onClick={() => navigate(-1)}>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </span>
              <span className="nickname">
                <h3>{data.me.name}</h3>
              </span>
            </div>
            <div className="avatar">
              {data.me.profile?.avatar ? (
                <img
                  src={data.me.profile.avatar}
                  style={{ width: "150px", borderRadius: "50%" }}
                  alt="avatar"
                />
              ) : (
                <i className="fa fa-user fa-5x" aria-hidden="true"></i>
              )}
            </div>
            <div className="make-profile">
              {data.me.profile ? <UpdateProfile /> : <CreateProfile />}
            </div>

            <h3 className="name">{data.me.name}</h3>

            {data.me.profile ? (
              <p>
                <i className="fas fa-link"> </i>{" "}
                <Link
                  to={{ pathname: `http://${data.me.profile.website}` }}
                  target="_blank">
                  {data.me.profile.website}
                </Link>
              </p>
            ) : null}
            <div className="followers">
              {/* <Following /> */}
              <p>384 followers</p>
            </div>
          </div>
          {/* <LikedTweets tweets={data.me} /> */}
        </div>
        <div className="right">{/* <PopularTweets /> */}</div>
      </div>
    </>
  );
}

import { gql, useMutation, useQuery } from "@apollo/client";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { ME_QUERY } from "../pages/Profile";

import { customStyles } from "../styles/CustomModalStyles";

const UPDATE_PROFILE_MUTATION = gql`
  mutation createProfile(
    $id: Int!
    $bio: String
    $location: String
    $website: String
    $avatar: String
  ) {
    createProfile(
      id: $id
      bio: $bio
      location: $location
      website: $website
      avatar: $avatar
    )
  }
`;

interface ProfileProps {
  bio: string;
  location: string;
  website: string;
  avatar: string;
}

export default function UpdateProfile() {
  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  const { loading, error, data } = useQuery(ME_QUERY);
  const [updateProfile] = useMutation(UPDATE_PROFILE_MUTATION, {
    refetchQueries: [{ query: ME_QUERY }],
  });

  const [modalIsOpen, setIsOpen] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const initialValues: ProfileProps = {
    bio: data.me.profile.bio,
    location: data.me.profile.location,
    website: data.me.profile.website,
    avatar: data.me.profile.avatar,
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Update Profile</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        style={customStyles}>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { setSubmitting }) => {
            console.log("Formik submitted");
            setSubmitting(true);
            await updateProfile({
              variables: values,
            });

            setSubmitting(false);
            setIsOpen(false);
          }}>
          <Form>
            <Field name="bio" type="textArea" placeholder="Bio" />
            <ErrorMessage name="bio" component={"div"} />
            <Field name="location" type="text" placeholder="location" />
            <ErrorMessage name="location" component={"div"} />
            <Field name="website" type="website" placeholder="website" />
            <ErrorMessage name="website" component={"div"} />
            <button
              type="submit"
              className="login-button"
              onClick={() => {
                console.log("clicked");
              }}>
              <span>Update Profile</span>
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}

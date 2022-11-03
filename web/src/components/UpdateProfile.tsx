import { gql, useMutation, useQuery } from "@apollo/client";
import { ErrorMessage, Field, Formik } from "formik";
import { useState } from "react";
import Modal from "react-modal";
import { Form } from "react-router-dom";
import { ME_QUERY } from "../pages/profile";

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
  id: string;
  bio: string;
  location: string;
  website: string;
  avatar: string;
}

export default function UpdateProfile() {
  const { loading, error, data } = useQuery(ME_QUERY);
  const [updateProfile] = useMutation(UPDATE_PROFILE_MUTATION, {
    refetchQueries: [{ query: ME_QUERY }],
  });

  const [modalIsOpen, setIsOpen] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const initialValues: ProfileProps = {
    id: data.me.Profile.id,
    bio: data.me.Profile.bio,
    location: data.me.Profile.location,
    website: data.me.Profile.website,
    avatar: data.me.Profile.avatar,
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
          // validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            await updateProfile({
              variables: values,
            });

            setSubmitting(false);
          }}>
          <Form>
            <Field name="bio" type="textArea" placeholder="Bio" />
            <ErrorMessage name="bio" component={"div"} />
            <Field name="location" type="password" placeholder="location" />
            <ErrorMessage name="location" component={"div"} />
            <Field name="website" type="website" placeholder="website" />
            <ErrorMessage name="website" component={"div"} />
            <button type="submit" className="login-button">
              <span>Update Profile</span>
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}

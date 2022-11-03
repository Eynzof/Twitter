import { gql, useMutation } from "@apollo/client";
import { Formik, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import { Form } from "react-router-dom";
import login from "../pages/login";
import { ME_QUERY } from "../pages/profile";
import Modal from "react-modal";

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

export default function CreateProfile() {
  const [updateProfile] = useMutation(UPDATE_PROFILE_MUTATION, {
    refetchQueries: [{ query: ME_QUERY }],
  });

  const [modalIsOpen, setIsOpen] = useState(false);

  const initialValues: ProfileProps = {
    bio: "",
    location: "",
    website: "",
    avatar: "",
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>UPDATE Profile</button>
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

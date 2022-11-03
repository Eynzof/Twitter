import { gql, useMutation } from "@apollo/client";
import { Formik, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import { Form } from "react-router-dom";
import login from "../pages/login";
import { ME_QUERY } from "../pages/profile";
import Modal from "react-modal";

import { customStyles } from "../styles/CustomModalStyles";

const CREATE_PROFILE_MUTATION = gql`
  mutation createProfile(
    $bio: String
    $location: String
    $website: String
    $avatar: String
  ) {
    id
  }
`;

interface ProfileProps {
  bio: string;
  location: string;
  website: string;
  avatar: string;
}

export default function CreateProfile() {
  const [createProfile] = useMutation(CREATE_PROFILE_MUTATION, {
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
      <button onClick={openModal}>Create Profile</button>
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
            await createProfile({
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
              <span>Create Profile</span>
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}

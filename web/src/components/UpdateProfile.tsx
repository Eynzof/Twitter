import { gql, useMutation, useQuery } from "@apollo/client";
import { Button } from "@chakra-ui/react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { ME_QUERY } from "../pages/Profile";

import { customStyles } from "../styles/CustomModalStyles";

const UPDATE_PROFILE_MUTATION = gql`
  mutation updateProfile(
    $id: Int!
    $bio: String
    $location: String
    $website: String
    $avatar: String
  ) {
    updateProfile(
      id: $id
      bio: $bio
      location: $location
      website: $website
      avatar: $avatar
    ) {
      id
      bio
      location
      website
      avatar
    }
  }
`;

interface ProfileProps {
  id: number;
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
    id: data.me.profile.id,
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
      <Button colorScheme={"twitter"} borderRadius={20} onClick={openModal}>
        Update Profile
      </Button>
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
            <Button
              type="submit"
              colorScheme={"twitter"}
              borderRadius={20}
              onClick={openModal}>
              Update Profile
            </Button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}

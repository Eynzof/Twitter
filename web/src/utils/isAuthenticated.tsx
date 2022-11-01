import { gql, useQuery } from "@apollo/client";
import { Navigate, Outlet } from "react-router-dom";

const IS_LOGGED_IN = gql`
  query ME {
    me {
      id
    }
  }
`;

export default function IsAuthenticated() {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) return <p>{error.message}</p>;
  console.log("data.me", data.me);
  return data.me ? <Outlet /> : <Navigate to="/landing" />;
}

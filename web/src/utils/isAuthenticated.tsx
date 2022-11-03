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
  if (error) {
    console.log("route failed, maybe server is not running? error message:", error.message);
    return <Navigate to="/landing" />;
  }
  console.log("data.me", data.me);
  console.log("isAuthed?", Boolean(data.me));

  // 未登录时导航到/landing
  return data.me ? <Outlet /> : <Navigate to="/landing" />;
}

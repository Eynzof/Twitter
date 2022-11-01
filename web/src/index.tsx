import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./components/landing";
import Users from "./components/user";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { setContext } from "@apollo/client/link/context";
import Signup from "./pages/signup";
import Login from "./pages/login";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const authLink = setContext((request, previousContext) => {
  const result = {
    headers: { authorization: localStorage.getItem("token") },
  };
  return result;
});

const httpLink = new HttpLink({
  uri: "http://localhost:4000",
  credentials: "same-origin",
});

const link = authLink.concat(httpLink as any);
const client = new ApolloClient({
  link: link as any,
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
  },
  {
    path: "landing",
    element: <Landing />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

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
import { setContext } from "apollo-link-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const httpLink = new HttpLink({ uri: "http://localhost:4000" });

const authLink = setContext(async (req, { headers }) => {
  const token = localStorage.getItem("token");
  console.log("http link", httpLink);
  return {
    ...headers,
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
    },
  };
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

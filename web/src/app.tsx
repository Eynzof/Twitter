import { ApolloClient, InMemoryCache } from "@apollo/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./components/user";
import Login from "./pages/login";
import Landing from "./components/landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/signup" element={<Users />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

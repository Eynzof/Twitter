import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import Users from "./components/user";
import Login from "./pages/login";
import Signup from "./pages/signup";
import IsAuthenticated from "./utils/isAuthenticated";
import "./app.css";
import Profile from "./pages/profile";
import CreateProfile from "./components/CreateProfile";
import NotFound from "./pages/notfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/" element={<IsAuthenticated />}>
          <Route path="/users" element={<Users />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-profile" element={<CreateProfile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

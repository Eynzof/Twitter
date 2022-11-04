import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Landing from "./pages/Landing";
import Users from "./components/User";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import IsAuthenticated from "./utils/isAuthenticated";
import "./app.css";
import Profile from "./pages/Profile";
import CreateProfile from "./components/CreateProfile";
import NotFound from "./pages/Notfound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<NotFound />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/" element={<IsAuthenticated />}>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-profile" element={<CreateProfile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

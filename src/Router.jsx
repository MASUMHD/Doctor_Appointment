import { createBrowserRouter } from "react-router-dom";
import Main from "./Component/Main";
import Error from "./Component/SharePage/Error";
import HomeAll from "./Component/Home/HomeAll";
import AllAbout from "./Component/About/AllAbout";
import DoctorProfile from "./Component/Pages/DoctorProfile/DoctorProfile";
import SingIn from "./Component/Pages/SingIn & Singup/SingIn";
import SingUp from "./Component/Pages/SingIn & Singup/SingUp";
import PrivateRoute from "./Component/Hooks/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomeAll />,
      },
      {
        path: "/doctor-profile/:id",
        element: (
          <PrivateRoute>
            <DoctorProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <AllAbout />,
      },
      {
        path: "/login",
        element: <SingIn />,
      },
      {
        path: "/singUp",
        element: <SingUp />,
      },
    ],
  },
]);

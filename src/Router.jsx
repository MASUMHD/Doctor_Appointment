import { createBrowserRouter } from "react-router-dom";
import Main from "./Component/Main";
import Error from "./Component/SharePage/Error";
import HomeAll from "./Component/Home/HomeAll";
import AllAbout from "./Component/Pages/About/AllAbout";
import DoctorProfile from "./Component/Pages/DoctorProfile/DoctorProfile";
import SingIn from "./Component/Pages/SingIn & Singup/SingIn";
import SingUp from "./Component/Pages/SingIn & Singup/SingUp";
import PrivateRoute from "./Component/Hooks/PrivateRoute";
import AllDashboard from "./Component/Pages/Dashboard/AllDashboard";
import AllServices from "./Component/Pages/Services/AllServices";
import AllAppointment from "./Component/Pages/Appointment/AllAppointment";
import AllUsers from "./Component/Pages/Dashboard/DasSideRouters/AllUsers";
import DasHome from "./Component/Pages/Dashboard/DasSideRouters/DasHome";
import AddServices from "./Component/Pages/Services/AddServices";
import DashboardShowAllServices from "./Component/Pages/Services/DashboardShowAllServices";
import ServicesBookConfirm from "./Component/Pages/Services/ServicesBookConfirm";
import AllPayment from "./Component/Pages/Services/Payment/AllPayment";

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
      {
        path: "/services",
        element: <AllServices />,
      },
      {
        path: "/appointment",
        element: <AllAppointment />,
      },
      {
        path: "/services-Confirm/:id",
        element: (
          <PrivateRoute>
            <ServicesBookConfirm />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <AllPayment/>
          </PrivateRoute>
        ),
      }
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <AllDashboard />,
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DasHome />,
      },
      {
        path: "/dashboard/allUsers",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/dasAllServices",
        element: <DashboardShowAllServices />,
      },
      {
        path: "/dashboard/services",
        element: <AddServices />,
      },
    ],
  },
]);

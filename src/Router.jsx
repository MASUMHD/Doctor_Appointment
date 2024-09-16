import { createBrowserRouter } from "react-router-dom";
import Main from "./Component/Main";
import Error from "./Component/SharePage/Error";
import HomeAll from "./Component/Home/HomeAll";
import AllAbout from "./Component/About/AllAbout";

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
        path: "/about",
        element: <AllAbout />,
      },
    ],
  },
]);

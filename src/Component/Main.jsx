import { Outlet } from "react-router-dom";
import NavBar from "./SharePage/NavBar";
import Footer from "./SharePage/Footer";

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./SharePage/NavBar";
import Footer from "./SharePage/Footer";

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/singUp')

    return (
        <div>
            {!noHeaderFooter && <NavBar/>}
            <Outlet />
            {!noHeaderFooter && <Footer/>}
        </div>
    );
};

export default Main;
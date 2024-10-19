import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const NavLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#F7A582] font-bold border border-[#F7A582] rounded-lg"
            : "lg:text-white text-black "
        }
      >
        <li>
          <p>Home</p>
        </li>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-[#F7A582] font-bold border border-[#F7A582] rounded-lg"
            : "lg:text-white text-black "
        }
      >
        <li>
          <p>About</p>
        </li>
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive
            ? "text-[#F7A582] font-bold border border-[#F7A582] rounded-lg"
            : "lg:text-white text-black "
        }
      >
        <li>
          <p>Appointment</p>
        </li>
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive
            ? "text-[#F7A582] font-bold border border-[#F7A582] rounded-lg"
            : "lg:text-white text-black "
        }
      >
        <li>
          <p>Login</p>
        </li>
      </NavLink>
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-[#07332F] pl-3 lg:pl-28 pr-3 lg:pr-28">
        <div className="navbar-start w-full flex justify-between items-center">
          <Link className="btn btn-ghost text-xl">
            <img
              className="w-40 h-10"
              src="../../../public/image/Group 2.png"
              alt="Doc House Logo"
            />
          </Link>
          <div className="dropdown lg:hidden">
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
              >
                {NavLinks}
              </ul>
            </div>
          </div>
        </div>

        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import React, {useContext, useState, useEffect } from "react";
import ApplicationLogo from "../../constants/ApplicationLogo";
import { Link, NavLink, useNavigate } from "react-router-dom"; 
import Dropdown, { Trigger, Content, DropdownLink } from "../../constants/Dropdown";
import ResponsiveNavLink from "../../constants/ResponsiveNavLink";
import defaultProfileImage from "../../../assets/avatar.jpeg";
import { BsPersonFillGear } from "react-icons/bs";
import { IoLogOutSharp } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { UserContext } from "../../../context/UserContext";
const Navbar: React.FC = () => {
  const navigate = useNavigate(); 
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
  const [user, setUser] = useState<{ name: string; profile_image: string } | null>(null);
  const userContext = useContext(UserContext);
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  
  const handleLogout = () => {
    if (userContext) {
      const { setUser, setToken } = userContext;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setUser(null);
      setToken(null);
      console.log("Données effacées");
      navigate("/login");
    }
  };

  return (
    <>
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="shrink-0 flex items-center">
                <Link to="/">
                  <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                </Link>
              </div>

              <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex items-center">
                <NavLink to="/" className="flex items-center">
                  Home
                </NavLink>
              </div>
            </div>

            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <div className="ml-3 relative">
                <Dropdown>
                  <Trigger>
                    <span className="inline-flex rounded-md">
                      <span className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                        {user ? user.name : "Loading..."}
                      </span>

                      <img
                        src={user ? `${import.meta.env.VITE_IMAGE_BASE_URL}/${user.profile_image}` : defaultProfileImage}
                        alt="profile_image"
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </span>
                  </Trigger>
                  <Content>
                    <DropdownLink to="/profile">
                      <div className="flex">
                        <BsPersonFillGear className="text-xl mx-4" />
                        Profile
                      </div>
                    </DropdownLink>
                    <DropdownLink to="#" onClick={handleLogout}>
                      <div className="flex">
                        <IoLogOutSharp className="text-xl mx-4" />
                        Se déconnecter
                      </div>
                    </DropdownLink>
                  </Content>
                </Dropdown>
              </div>
            </div>

            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={() =>
                  setShowingNavigationDropdown((previousState) => !previousState)
                }
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    className={
                      !showingNavigationDropdown ? "inline-flex" : "hidden"
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={
                      showingNavigationDropdown ? "inline-flex" : "hidden"
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={
            (showingNavigationDropdown ? "block" : "hidden") + " sm:hidden"
          }
        >
          <div className="pt-4 pb-1 border-t border-gray-200">
            <div className="mt-3 space-y-1">
              <ResponsiveNavLink to="/profile">Profile</ResponsiveNavLink>
              <ResponsiveNavLink to="/login" onClick={handleLogout}>
                <Link to='/login'>
                Se déconnecter
                </Link>
               
              </ResponsiveNavLink>
            </div>
          </div>
        </div>
      </nav>
      <header className="bg-white border-b border-gray-200 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <span className="font-semibold text-xl text-gray-800 flex">
            <MdOutlineDashboard />
            <h2 className="ml-4">Tableau de bord</h2>
          </span>
        </div>
      </header>
    </>
  );
};

export default Navbar;

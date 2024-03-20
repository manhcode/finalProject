import { useContext, useState } from "react";
import { FaBook, FaUserCircle } from "react-icons/fa";

import ListItem from "./ListItem";
import routes from "~/config/routes";
import { CiLogout } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "~/shared/AuthProvider";

function Menu() {
  const { logOut, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const MENU_STUDENT = [
    {
      title: "Profile",
      link: () => {
        navigate(routes.profile);
      },
      icon: <FaUserCircle size={18} className="mr-4" />,
    },
    {
      title: "My course",
      link: () => {
        navigate(routes.myCourses);
      },
      icon: <FaBook size={18} className="mr-4 text-sky-500" />,
    },
    {
      title: "Log out",
      link: () => {
        logOut();
      },
      icon: <CiLogout size={18} className="mr-4" />,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const { role } = useContext(AuthContext);

  return (
    <div className="relative">
      {role === 2 ? (
        <button onClick={() => setIsOpen(!isOpen)}>
          {currentUser.imageUrl ? (
            <img
              src={currentUser.imageUrl}
              alt="avatar"
              className="w-[50px] h-[50px] rounded-full object-cover object-top"
            />
          ) : (
            <FaUserCircle size={32} />
          )}
        </button>
      ) : (
        <div className="flex items-center">
          <Link
            to={routes.homeManager}
            className="bg-primary text-white font-medium px-4 py-2 rounded-lg "
          >
            Dashboard
          </Link>

          <CiLogout size={58} className="cursor-pointer p-4" onClick={logOut} />
        </div>
      )}
      {isOpen && (
        <div className="absolute min-w-[150px] right-0 border rounded-md bg-white z-10">
          {MENU_STUDENT.map((data) => (
            <ListItem key={data.title} data={data} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Menu;

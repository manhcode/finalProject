import { useState } from "react";
import { FaBook, FaHeart, FaUserCircle } from "react-icons/fa";

import ListItem from "./ListItem";
import { CiLogout } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const MENU_STUDENT = [
    {
      title: "Profile",
      link: () => {
        navigate("/");
      },
      icon: <FaUserCircle size={18} className="mr-4" />,
    },
    {
      title: "Favorites",
      link: () => {
        navigate("/");
      },
      icon: <FaHeart size={18} className="mr-4 text-rose-500" />,
    },
    {
      title: "My course",
      link: () => {
        navigate("/");
      },
      icon: <FaBook size={18} className="mr-4 text-sky-500" />,
    },
    {
      title: "Log out",
      link: () => {
        alert("logOut");
      },
      icon: <CiLogout size={18} className="mr-4" />,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const role = 2;

  return (
    <div className="relative">
      {role === 2 ? (
        <button onClick={() => setIsOpen(!isOpen)}>
          <FaUserCircle size={32} />
        </button>
      ) : (
        <Link
          to={"/"}
          className="bg-green-500 text-white font-medium px-4 py-2 rounded-lg "
        >
          Dashboard
        </Link>
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

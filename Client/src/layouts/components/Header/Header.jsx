import { Link, useNavigate } from "react-router-dom";
import routes from "~/config/routes";
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import Menu from "./Menu";
import { useContext, useState } from "react";
import { AuthContext } from "~/shared/AuthProvider";

function Header() {
  const { token } = useContext(AuthContext);

  const navigate = useNavigate();
  const [nameCourse, setNameCourse] = useState("");

  const onSearch = () => {
    navigate(`${routes.courses}?nameCourse=${nameCourse}`);
  };

  return (
    <div className="py-4 w-full bg-gradient-to-br from-red-400 to-red-100 flex justify-around items-center">
      <Link to={routes.home} className="p-2">
        <FaHome size={30} />
      </Link>

      <div className="w-1/3 flex items-center border border-gray-900 rounded-xl overflow-hidden">
        <input
          placeholder="Search ..."
          value={nameCourse}
          name={nameCourse}
          onChange={(e) => setNameCourse(e.target.value)}
          className="w-full pl-4 py-2 outline-none"
        />
        <CiSearch
          className="cursor-pointer bg-gray-900 w-10 h-10 p-2"
          color="#FFFF00"
          onClick={onSearch}
        />
      </div>

      {token ? (
        <Menu />
      ) : (
        <div>
          <Link
            to={routes.login}
            className="bg-primary text-white font-medium px-4 py-2 rounded-lg mr-2"
          >
            Login
          </Link>
          <Link
            to={routes.register}
            className="border font-medium px-4 py-2 rounded-lg "
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
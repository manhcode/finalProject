import { Link } from "react-router-dom";
import routes from "~/config/routes";
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import Menu from "./Menu";

function Header() {
  const currentUser = true;

  return (
    <div className="py-4 w-full flex justify-around items-center">
      <Link to={routes.home} className="p-2">
        <FaHome size={30} />
      </Link>

      <div className="w-1/3 flex items-center border border-green-200 rounded-xl overflow-hidden">
        <input
          placeholder="Search ..."
          className="w-full pl-4 py-2 outline-none"
        />
        <CiSearch className="cursor-pointer w-10 h-10 p-2" color="#ccc" />
      </div>

      {currentUser ? (
        <Menu />
      ) : (
        <div>
          <Link
            to={routes.login}
            className="bg-green-500 text-white font-medium px-4 py-2 rounded-lg mr-2"
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

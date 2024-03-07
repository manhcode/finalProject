import PropTypes from "prop-types";
import SideBar from "../components/SideBar";
import HeaderManager from "./HeaderManager";
import { useContext } from "react";
import { AuthContext } from "~/shared/AuthProvider";

function ManagerLayout({ children }) {
  const { role } = useContext(AuthContext);

  if (role > 1) {
    return null;
  }

  return (
    <div>
      <HeaderManager />
      <div className="flex">
        <SideBar />
        {children}
      </div>
    </div>
  );
}

ManagerLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ManagerLayout;

import PropTypes from "prop-types";
import SideBar from "../components/SideBar";
import HeaderManager from "./HeaderManager";
import { useContext } from "react";
import { AuthContext } from "~/shared/AuthProvider";
import Footer from "../components/Footer";

function ManagerLayout({ children }) {
  const { role } = useContext(AuthContext);

  if (role > 1) {
    return null;
  }

  return (
    <>
    <div>
      <HeaderManager />
      <div className="flex flex-col md:flex-row">
        <SideBar />
        {children}
      </div>
    </div>
    <Footer />
    </>
  );
}

ManagerLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ManagerLayout;

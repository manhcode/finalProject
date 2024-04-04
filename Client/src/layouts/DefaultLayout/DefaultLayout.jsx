import PropTypes from "prop-types";

import Header from "~/layouts/components/Header";
import Footer from "../components/Footer";

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className="mb-10">{children}</div>
      <Footer />
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;

import { useContext } from "react";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import routes from "~/config/routes";
import { AuthContext } from "~/shared/AuthProvider";

function HeaderManager() {
  const navigate = useNavigate();
  const { role } = useContext(AuthContext);

  const newSubmit = () => {
    navigate(role === 0 ? routes.newTeacher : routes.newCourse);
  };

  return (
    <div className="py-3 px-4 border-b flex justify-end items-center">
      <button
        className="bg-green-500 text-white px-4 py-2 mr-2 rounded-lg"
        onClick={newSubmit}
      >
        {role === 0 ? "New teacher" : "New course"}
      </button>
      <CiLogout size={30} className="cursor-pointer" />
    </div>
  );
}

export default HeaderManager;

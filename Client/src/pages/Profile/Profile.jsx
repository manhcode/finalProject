import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import routes from "~/config/routes";

function Profile() {
  return (
    <div className="flex justify-center w-full">
      <div className="px-10 flex flex-col items-center justify-center">
        <FaUserCircle size={100} />

        <Link
          to={routes.editProfile}
          className="flex items-center mt-2 bg-green-500 px-4 py-2 font-medium rounded-lg text-white"
        >
          Change
        </Link>
      </div>
      <div className="w-2/3">
        <div className="border border-blue-200 rounded-[5px] overflow-hidden mb-2">
          <div className="bg-blue-200 px-4 py-2">Full name</div>
          <div className="px-4 py-2">STUDENT</div>
        </div>

        <div className="border border-blue-200 rounded-[5px] overflow-hidden mb-2">
          <div className="bg-blue-200 px-4 py-2">Email</div>
          <div className="px-4 py-2">Example@gmail.com</div>
        </div>

        <div className="border border-blue-200 rounded-[5px] overflow-hidden mb-2">
          <div className="bg-blue-200 px-4 py-2">Gender</div>
          <div className="px-4 py-2">Male</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

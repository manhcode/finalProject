import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import routes from "~/config/routes";
import { AuthContext } from "~/shared/AuthProvider";

function Profile() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="flex justify-center w-full">
      <div className="px-10 flex flex-col items-center justify-center">
        {currentUser.imageUrl ? (
          <img
            src={currentUser.imageUrl}
            alt="avatar"
            className="w-[200px] h-[200px] object-cover object-top rounded-full"
          />
        ) : (
          <FaUserCircle size={100} />
        )}

        <Link
          to={routes.editProfile}
          className="flex items-center mt-2 bg-primary px-4 py-2 font-medium rounded-lg text-white"
        >
          Change
        </Link>
      </div>
      <div className="w-2/3">
        <div className="border border-blue-200 rounded-[5px] overflow-hidden mb-2">
          <div className="bg-blue-200 px-4 py-2">Full name</div>
          <div className="px-4 py-2">{currentUser.fullName}</div>
        </div>

        <div className="border border-blue-200 rounded-[5px] overflow-hidden mb-2">
          <div className="bg-blue-200 px-4 py-2">Email</div>
          <div className="px-4 py-2">{currentUser.email}</div>
        </div>

        <div className="border border-blue-200 rounded-[5px] overflow-hidden mb-2">
          <div className="bg-blue-200 px-4 py-2">Gender</div>
          <div className="px-4 py-2">
            {currentUser.gender === 0 ? "Male" : "Female"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

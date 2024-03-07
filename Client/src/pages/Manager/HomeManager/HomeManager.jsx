import CourseHome from "./CourseHome";
import UserHome from "./UserHome";

function HomeManager() {
  return (
    <div className="w-full">
      <CourseHome />
      <UserHome />
    </div>
  );
}

export default HomeManager;

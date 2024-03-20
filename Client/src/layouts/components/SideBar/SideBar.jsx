import { useContext } from "react";
import { NavLink } from "react-router-dom";
import routes from "~/config/routes";
import { AuthContext } from "~/shared/AuthProvider";

const SIDEBAR_TEACHER = [
  {
    title: "HOME",
    link: routes.homeManager,
  },
  {
    title: "Course",
    link: routes.coursesTeacher,
  },
];

const SIDEBAR_ADMIN = [
  {
    title: "HOME",
    link: routes.homeManager,
  },
  {
    title: "Student",
    link: routes.studentAdmin,
  },
  {
    title: "Teacher",
    link: routes.teacherAdmin,
  },
  {
    title: "Course",
    link: routes.courseAdmin,
  },
];

function SideBar() {
  const { role } = useContext(AuthContext);
  let sideBarItem = SIDEBAR_TEACHER;

  if (role === 0) {
    sideBarItem = SIDEBAR_ADMIN;
  }

  return (
    <div className="w-1/6 border-r flex flex-col">
      {sideBarItem.map((data) => (
        <NavLink
          to={data.link}
          className={({ isActive }) =>
            `${
              isActive ? "font-medium bg-green-400  text-white " : ""
            } px-4 py-3 cursor-pointer hover:bg-green-400 hover:text-white hover:font-medium`
          }
          key={data.title}
        >
          {data.title}
        </NavLink>
      ))}
    </div>
  );
}

export default SideBar;

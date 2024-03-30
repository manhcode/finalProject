// routeConfig
import config from "~/config";

// Router change Pages
import Home from "~/pages/Home";
import Profile from "~/pages/Profile";
import MyCourses from "~/pages/MyCourses";
import Courses from "~/pages/Courses";
import DetailCourse from "~/pages/DetailCourse";
import HomeManager from "~/pages/Manager/HomeManager";

import { Login, Register } from "~/pages/Auth";
import { ManagerLayout } from "~/layouts";
import { CourseTeacher } from "~/pages/Manager/Teacher";
import { CourseAdmin, StudentAdmin, TeacherAdmin } from "~/pages/Manager/Admin";
import NewTeacher from "~/pages/Manager/Admin/NewTeacher";
import NewCourse from "~/pages/Manager/Teacher/NewCourse";
import EditProfile from "~/pages/Profile/EditProfile";
import PaymentResult from "~/pages/PaymentResult";
import EditUser from "~/pages/Manager/Admin/EditUser";
import EditCourse from "~/pages/Manager/EditCourse";
import DetailTeacher from "~/pages/DetailTeacher";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.editProfile, component: EditProfile },
  { path: config.routes.courses, component: Courses },
  { path: config.routes.myCourses, component: MyCourses },
  { path: config.routes.detailCourse, component: DetailCourse },
  { path: config.routes.detailTeacher, component: DetailTeacher },
  { path: config.routes.paymentResult, component: PaymentResult },

  { path: config.routes.login, component: Login, Layout: null },
  { path: config.routes.register, component: Register, Layout: null },

  // Manager
  {
    path: config.routes.homeManager,
    component: HomeManager,
    Layout: ManagerLayout,
  },
  {
    path: config.routes.newTeacher,
    component: NewTeacher,
    Layout: ManagerLayout,
  },
  {
    path: config.routes.studentAdmin,
    component: StudentAdmin,
    Layout: ManagerLayout,
  },
  {
    path: config.routes.editUser,
    component: EditUser,
    Layout: ManagerLayout,
  },
  {
    path: config.routes.teacherAdmin,
    component: TeacherAdmin,
    Layout: ManagerLayout,
  },
  {
    path: config.routes.courseAdmin,
    component: CourseAdmin,
    Layout: ManagerLayout,
  },

  // Manager teacher
  {
    path: config.routes.coursesTeacher,
    component: CourseTeacher,
    Layout: ManagerLayout,
  },
  {
    path: config.routes.newCourse,
    component: NewCourse,
    Layout: ManagerLayout,
  },
  {
    path: config.routes.editCourse,
    component: EditCourse,
    Layout: ManagerLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

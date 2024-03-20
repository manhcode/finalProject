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
import { CourseAdmin, StudentAdmin, TeacherAdmin } from "~/pages/Manager/Admin";
import EditProfile from "~/pages/Profile/EditProfile";
import PaymentResult from "~/pages/PaymentResult";
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
    path: config.routes.studentAdmin,
    component: StudentAdmin,
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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

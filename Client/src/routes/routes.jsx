// routeConfig
import config from "~/config";
import Favorites from "~/pages/Favorites";

// Router change Pages
import Home from "~/pages/Home";
import Profile from "~/pages/Profile";
import MyCourses from "~/pages/MyCourses";
import Courses from "~/pages/Courses";
import DetailCourse from "~/pages/DetailCourse";
import HomeManager from "~/pages/Manager/HomeManager";

import { Login, Register } from "~/pages/Auth";
import { ManagerLayout } from "~/layouts";
import { CourseTeacher, PaymentTeacher } from "~/pages/Manager/Teacher";
import {
  CourseAdmin,
  PaymentAdmin,
  StudentAdmin,
  TeacherAdmin,
} from "~/pages/Manager/Admin";
import NewTeacher from "~/pages/Manager/Admin/NewTeacher";
import NewCourse from "~/pages/Manager/Teacher/NewCourse";
import EditProfile from "~/pages/Profile/EditProfile";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.editProfile, component: EditProfile },
  { path: config.routes.favorites, component: Favorites },
  { path: config.routes.courses, component: Courses },
  { path: config.routes.myCourses, component: MyCourses },
  { path: config.routes.detailCourse, component: DetailCourse },

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
    path: config.routes.teacherAdmin,
    component: TeacherAdmin,
    Layout: ManagerLayout,
  },
  {
    path: config.routes.courseAdmin,
    component: CourseAdmin,
    Layout: ManagerLayout,
  },
  {
    path: config.routes.paymentAdmin,
    component: PaymentAdmin,
    Layout: ManagerLayout,
  },

  // Manager teacher
  {
    path: config.routes.coursesTeacher,
    component: CourseTeacher,
    Layout: ManagerLayout,
  },
  {
    path: config.routes.paymentTeacher,
    component: PaymentTeacher,
    Layout: ManagerLayout,
  },
  {
    path: config.routes.newCourse,
    component: NewCourse,
    Layout: ManagerLayout,
  },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

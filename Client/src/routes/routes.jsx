// routeConfig
import config from "~/config";
import Courses from "~/pages/Courses";
import DetailCourse from "~/pages/DetailCourse";

// Router change Pages
import Home from "~/pages/Home";
import User from "~/pages/User";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.user, component: User },
  { path: config.routes.courses, component: Courses },
  { path: config.routes.detailCourse, component: DetailCourse },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

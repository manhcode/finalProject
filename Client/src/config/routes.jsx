// move router

const routes = {
  home: "/",
  profile: "/profile",
  editProfile: "/profile/edit",
  myCourses: "/my-course",
  courses: "/courses",
  detailCourse: "/course/:id",
  detailTeacher: "/teacher/:id",
  paymentResult: "/payment-result",

  login: "/login",
  register: "/register",

  // Manager
  homeManager: "/manager/home",
  editCourse: "/manager/edit-course/:id",
  studentAdmin: "/manager/admin/student",
  teacherAdmin: "/manager/admin/teacher",
  courseAdmin: "/manager/admin/course",
  editUser: "/manager/admin/user/edit/:id",
  newTeacher: "/manager/admin/new-teacher",

  // Manager Teacher
  coursesTeacher: "/manager/teacher/courses",
  newCourse: "/manager/teacher/new-course",
};

export default routes;

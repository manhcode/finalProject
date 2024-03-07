// move router

const routes = {
  home: "/",
  profile: "/profile",
  editProfile: "/profile/edit",
  favorites: "/favorites",
  myCourses: "/my-course",
  courses: "/courses",
  detailCourse: "/course/:id",

  login: "/login",
  register: "/register",

  // Manager
  homeManager: "/manager/home",
  studentAdmin: "/manager/admin/student",
  teacherAdmin: "/manager/admin/teacher",
  courseAdmin: "/manager/admin/course",
  paymentAdmin: "/manager/admin/payment",
  newTeacher: "/manager/admin/new-teacher",

  // Manager Teacher
  coursesTeacher: "/manager/teacher/courses",
  paymentTeacher: "/manager/teacher/payment",
  newCourse: "/manager/teacher/new-course",
};

export default routes;

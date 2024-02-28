import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

import Logo from "~/assets/image/Course.png";
import ListCourse from "~/components/ListCourse";
import routes from "~/config/routes";

function Home() {
  const data = [
    {
      id: 1,
      title: "Course 1",
      price: 100,
      imageUrl: Logo,
      description: "This is the first course",
    },
    {
      id: 2,
      title: "Course 2",
      price: 12300,
      imageUrl: Logo,
      description: "This is the first course",
    },
    {
      id: 3,
      title: "Course 3",
      price: 0,
      imageUrl: Logo,
      description: "This is the first course",
    },
    {
      id: 4,
      title: "Course 4",
      price: 0,
      imageUrl: Logo,
      description: "This is the first course",
    },
    {
      id: 5,
      title: "Course 5",
      price: 5000,
      imageUrl: Logo,
      description: "This is the first course",
    },
    {
      id: 6,
      title: "Course 6",
      price: 6000,
      imageUrl: Logo,
      description: "This is the first course",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center py-20 bg-gradient-to-br from-green-600 to-green-300 select-none">
        <div className="w-1/2 px-6 text-white font-semibold">
          &nbsp; &nbsp; &nbsp; Welcome to our online learning platform! We offer
          a wide range of courses designed to help you acquire new skills and
          advance your career. Whether you&apos;re interested in technology,
          business, or the arts, we have something for everyone. Our flexible
          learning environment allows you to study at your own pace, whenever
          and wherever it&apos;s convenient for you. Join us today and start
          your journey towards personal and professional growth!
        </div>
        <img src={Logo} alt="course" />
      </div>

      <div className="mx-10">
        <div className="flex justify-between">
          <div className="my-6 font-bold">A broad selection of courses</div>
          <Link to={routes.courses} className="flex items-center">
            See all <MdKeyboardDoubleArrowRight />
          </Link>
        </div>

        <ListCourse data={data} />
      </div>
    </>
  );
}

export default Home;

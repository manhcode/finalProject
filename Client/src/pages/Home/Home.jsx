import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

import Logo from "~/assets/image/Course.png";
import ClientEmpty from "~/components/ClientEmpty";
import ListCourse from "~/components/ListCourse";
import routes from "~/config/routes";
import * as courseService from "~/services/courseService";

function Home() {
  const [data, setData] = useState([]);

  const fetch = () => {
    courseService
      .getAllCourse({ page: 1, perPage: 10 })
      .then((course) => {
        setData(course.data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetch();
  }, []);

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

        {data.length > 0 ? <ListCourse data={data} /> : <ClientEmpty />}
      </div>
    </>
  );
}

export default Home;

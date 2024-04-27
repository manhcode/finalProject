import { useEffect, useState } from "react";

import ListMyCourses from "./ListMyCourse";
import * as courseService from "~/services/courseService";

function MyCourses() {
  const [data, setData] = useState([]);

  useEffect(() => {
    courseService
      .getMyCourse({})
      .then((courses) => {
        setData(courses.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="mx:px-20 px-4">
      <div className="text-2xl font-bold my-5">My Course</div>
      <ListMyCourses data={data} />
    </div>
  );
}

export default MyCourses;

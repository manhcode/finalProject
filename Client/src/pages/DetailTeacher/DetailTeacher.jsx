import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import ListCourse from "~/components/ListCourse";

import * as authService from "~/services/authService";
import * as courseService from "~/services/courseService";

function DetailTeacher() {
  const params = useParams();
  const [dataTeacher, setDataTeacher] = useState([]);
  const [dataCourse, setDataCourse] = useState([]);

  useEffect(() => {
    authService
      .getUserById({ id: params.id })
      .then((user) => {
        setDataTeacher(user);
      })
      .catch((error) => console.log(error));

    courseService
      .getCourseTeacher({ teacherId: params.id })
      .then((teacher) => {
        setDataCourse(teacher.data);
      })
      .catch((error) => console.log(error));
  }, [params]);

  return (
    <>
      <div className="flex md:flex-row flex-col justify-center items-center w-full mt-10">
        <div className="px-10 flex flex-col items-center justify-center">
          {dataTeacher.imageUrl ? (
            <img
              src={dataTeacher.imageUrl}
              alt="avatar"
              className="w-[200px] h-[200px] object-cover object-top rounded-full"
            />
          ) : (
            <FaUserCircle size={100} />
          )}
        </div>
        <div className="md:w-2/3 md:px-0 px-4 w-full mt-4">
          <div className="border border-blue-200 rounded-[5px] overflow-hidden mb-2">
            <div className="bg-blue-200 px-4 py-2">Full name</div>
            <div className="px-4 py-2">{dataTeacher.fullName}</div>
          </div>

          <div className="border border-blue-200 rounded-[5px] overflow-hidden mb-2">
            <div className="bg-blue-200 px-4 py-2">Gender</div>
            <div className="px-4 py-2">
              {dataTeacher.gender === 0 ? "Male" : "Female"}
            </div>
          </div>

          <div className="border border-blue-200 rounded-[5px] overflow-hidden mb-2">
            <div className="bg-blue-200 px-4 py-2">
              Total number of courses posted
            </div>
            <div className="px-4 py-2">{dataCourse.length}</div>
          </div>
        </div>
      </div>
      <p className="text-center text-2xl py-4 font-bold">Course</p>
      <ListCourse data={dataCourse} />
    </>
  );
}

export default DetailTeacher;

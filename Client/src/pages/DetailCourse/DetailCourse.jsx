import { useState } from "react";
import ReviewCourse from "./ReviewCourse";
import Instructor from "./Instructor";

function DetailCourse() {
  const [detailTeacher, setDetailTeacher] = useState(true);

  return (
    <>
      <div className="flex border-t border-b p-10">
        <div className="w-1/2 flex justify-center items-center">
          <div>
            <p className="text-2xl font-bold">Title course</p>
            <p className="my-2">Description course</p>
            <button className="w-[160px] h-[48px] rounded-md border border-black font-medium mr-3">
              Add to favorite
            </button>
            <button className="w-[160px] h-[48px] rounded-md bg-black text-white font-medium ">
              Buy now
            </button>
          </div>
        </div>
        <div className="bg-neutral-300 h-[400px] w-[600px] rounded-xl overflow-hidden"></div>
      </div>

      <div className="flex justify-center mt-2">
        <div className="border rounded-xl overflow-hidden">
          <button
            className={`px-4 py-2 ${detailTeacher && "bg-black text-white"}`}
            onClick={() => setDetailTeacher(true)}
          >
            Instructor
          </button>
          <button
            className={`px-4 py-2 ${!detailTeacher && "bg-black text-white"}`}
            onClick={() => setDetailTeacher(false)}
          >
            Review
          </button>
        </div>
      </div>

      <div className="px-28">
        {detailTeacher ? <Instructor /> : <ReviewCourse />}
      </div>
    </>
  );
}

export default DetailCourse;

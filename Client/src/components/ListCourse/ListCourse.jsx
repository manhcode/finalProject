import PropTypes from "prop-types";

import CourseItem from "./CourseItem";

function ListCourse({ data }) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-8">
        {data.map((item) => (
          <CourseItem key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

ListCourse.propTypes = {
  data: PropTypes.array,
};

export default ListCourse;

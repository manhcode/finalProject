import PropTypes from "prop-types";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Item({ data }) {
  const downloadPDF = () => {
    window.location.href = data.courseId.file;
  };

  return (
    <div className="flex my-4 relative">
      <Link
        to={`/course/${data.courseId._id}`}
        className="mr-4  rounded-lg overflow-hidden w-[300px] flex justify-center bg-red-100"
      >
        <img
          src={data.courseId.imageUrl}
          alt=""
          className="object-cover w-auto h-[200px] "
        />
      </Link>
      <div className="my-4">
        <p className="text-xl font-bold">{data.courseId.nameCourse}</p>
        <p className="text-sm">{data.teacherId.fullName}</p>
      </div>
      <FaCloudDownloadAlt
        size={32}
        className="absolute right-0 cursor-pointer"
        onClick={downloadPDF}
      />
    </div>
  );
}

Item.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Item;

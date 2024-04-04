import PropTypes from "prop-types";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Item({ data }) {
  const downloadPDF = () => {
    window.location.href = data.courseId.file;
  };

  return (
    <div className="flex my-4 relative rounded-lg  overflow-hidden">
      <Link
        to={`/course/${data.courseId._id}`}
        className="mr-4 flex ove justify-center"
      >
        <img
          src={data.courseId.imageUrl}
          alt=""
          className="object-center max-w-[400px] h-[200px] "
        />
      </Link>
      <div className="my-4 mr-10">
        <div className="flex flex-col justify-between h-full">
          <p className="text-xl font-bold">{data.courseId.nameCourse}</p>
          <p className="text-sm">{data.teacherId.fullName}</p>
        </div>
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

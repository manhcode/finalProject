import PropTypes from "prop-types";
import { FaCloudDownloadAlt } from "react-icons/fa";

function Item({ data }) {
  return (
    <div className="flex my-4 relative">
      <div className="w-[300px] h-[200px] mr-4 bg-neutral-200 overflow-hidden rounded-lg"></div>
      <div className="my-4">
        <p className="text-xl font-bold">{data.courseName}</p>
        <p className="text-sm">{data.teacherName}</p>
      </div>
      <FaCloudDownloadAlt
        size={32}
        className="absolute right-0 cursor-pointer"
      />
    </div>
  );
}

Item.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Item;

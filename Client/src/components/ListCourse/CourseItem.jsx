import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import { useState } from "react";

function CourseItem({ data }) {
  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    setShowModal(false);
  };

  const onSubmit = () => {
    setShowModal(false);
    alert("Submit");
  };

  return (
    <div className="xl:w-1/6 w-1/4 border rounded-lg overflow-hidden relative">
      <Link to={`/course/${data.id}`}>
        <img src={data.imageUrl} alt="Image-course" className="object-cover" />
        <div className="px-4 ">
          <div>{data.title}</div>
          <div className="h-24 overflow-hidden">{data.description}</div>
        </div>
      </Link>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center absolute bottom-0 right-4 mb-4 bg-green-500 px-4 py-1 rounded-md text-white"
      >
        {data.price > 0 ? `${data.price.toLocaleString()} VNĐ` : "Get free"}
      </button>
      <Modal
        title="Buy course"
        description={"Are you sure to buy the course?"}
        showModal={showModal}
        onClose={onClose}
        onSubmit={onSubmit}
      />
    </div>
  );
}

CourseItem.propTypes = {
  data: PropTypes.object,
};

export default CourseItem;

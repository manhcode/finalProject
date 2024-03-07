import PropTypes from "prop-types";

import Item from "./Item";

function ListMyCourse({ data }) {
  return (
    <div>
      {data.map((item) => (
        <Item key={item._id} data={item} />
      ))}
    </div>
  );
}

ListMyCourse.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ListMyCourse;

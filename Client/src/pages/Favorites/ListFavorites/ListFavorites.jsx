import PropTypes from "prop-types";

import Item from "./Item";

function ListFavorites({ data }) {
  return (
    <div>
      {data.map((item) => (
        <Item key={item._id} data={item} />
      ))}
    </div>
  );
}

ListFavorites.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ListFavorites;

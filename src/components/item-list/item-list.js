import React from "react";
import PropTypes from "prop-types";

import "./item-list.css";

export const ItemList = props => {
  const { data, children, onItemSelected } = props;

  const renderItems = arr => {
    return arr.map(item => {
      const { id } = item;
      const label = children(item);

      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => onItemSelected(id)}
        >
          {label}
        </li>
      );
    });
  };

  const items = renderItems(data);

  return <ul className="item-list list-group">{items}</ul>;
};

ItemList.defaultProps = {
  onItemSelected: () => {}
};

ItemList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired,
  onItemSelected: PropTypes.func
};

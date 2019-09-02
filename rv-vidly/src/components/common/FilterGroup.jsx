import React from "react";

const defaultFilter = {
  valueProperty: "_id",
  textProperty: "name"
};

const FilterGroup = ({ items, filter = defaultFilter, currentFilter, onSelectFilter }) => {
  return (
    <ul className="list-group">
      {items.map(i => (
        <li
          key={i[filter.valueProperty]}
          className={
            currentFilter === i[filter.valueProperty]
              ? "list-group-item active"
              : "list-group-item"
          }
          style={{ cursor: "pointer" }}
          onClick={() => onSelectFilter(i)}
        >
          {i[filter.textProperty]}
        </li>
      ))}
    </ul>
  );
};

// react's defaultProps soon to be deprecated,
// use es6 default values instead (see above):

// FilterGroup.defaultProps = {
//   valueProperty: "_id",
//   textProperty: "name"
// };

export default FilterGroup;

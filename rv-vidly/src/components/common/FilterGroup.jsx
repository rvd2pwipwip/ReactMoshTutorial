import React from "react";

const FilterGroup = ({ items, textProperty, valueProperty, currentFilter, onSelectFilter }) => {
  return (
    <ul className="list-group">
      {items.map(i => (
        <li
          key={i[valueProperty]}
          className={
            currentFilter === i[valueProperty]
              ? "list-group-item active"
              : "list-group-item"
          }
          style={{ cursor: "pointer" }}
          onClick={() => onSelectFilter(i)}
        >
          {i[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;

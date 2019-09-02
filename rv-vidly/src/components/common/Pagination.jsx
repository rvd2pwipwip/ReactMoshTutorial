import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination pagination-sm">
        {pages.map(p => (
          <li
            className={currentPage === p ? "page-item active" : "page-item"}
            key={p}
          >
            <button className="page-link" onClick={() => onPageChange(p)}>
              {p}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;

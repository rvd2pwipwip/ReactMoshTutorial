import React from "react";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";
import { getMovies } from "./../services/fakeMovieService";
import FilterGroup from "./common/FilterGroup";
import Like from "./common/Like";
import Pagination from "./common/Pagination";

const Movies = () => {
  const [movies, setMovies] = React.useState([]);
  const [filters, setFilters] = React.useState([]);
  const [pageSize] = React.useState(4);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [currentFilter, setCurrentFilter] = React.useState(null);

  React.useEffect(() => {
    setMovies(getMovies);
    // add All Genres to spreaded getGenres array
    setFilters([{ _id: 0, name: "All Genres" }, ...getGenres()]);
  }, [movies], [filters]);

  const handleDelete = id => {
    setMovies(movies.filter(m => m._id !== id));
  };

  const handleLike = movie => {
    const likedMovies = [...movies]; // 1. copy movies
    const index = likedMovies.indexOf(movie); // 2. find liked/unliked movie
    likedMovies[index].liked = !likedMovies[index].liked; // 3. change liked value
    setMovies(likedMovies); // 4. update movies
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  const handleSelectFilter = filter => {
    setCurrentFilter(filter._id);
    setCurrentPage(1);
  };

  // 1. filter movies by selected filter if any
  const filteredItems = currentFilter ? movies.filter(m => m.genre._id === currentFilter) : movies
  // 2. set movies count
  const count = filteredItems.length;
  // 3. paginate movies
  const pageMovies = paginate(filteredItems, pageSize, currentPage);

  if (!count) return <p>There are no movies in the database.</p>;
  return (
    <div className="container m-4">
      <div className="row">
        <div className="col-3">
          <FilterGroup
            items={filters}
            currentFilter={currentFilter}
            onSelectFilter={handleSelectFilter}
          />
        </div>
        <div className="col">
          <p>Showing {count} movies in the database.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {pageMovies.map(m => (
                <tr key={m._id}>
                  <td>{m.title}</td>
                  <td>{m.genre.name}</td>
                  <td>{m.numberInStock}</td>
                  <td>{m.dailyRentalRate}</td>
                  <td>
                    <Like onLike={() => handleLike(m)} liked={m.liked}></Like>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(m._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Movies;

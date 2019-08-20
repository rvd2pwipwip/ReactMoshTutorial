import React from "react";
import { getMovies } from "./../services/fakeMovieService";

const Movies = () => {
  const [movies, setMovies] = React.useState(getMovies);

  React.useEffect(() => {});

  const handleDelete = id => {
    setMovies(movies.filter(m => m._id !== id));
  };

  return (
    <>
      {movies ? (
        <p>Showing {movies.length} movies in the database.</p>
      ) : (
        <p>There are no movies in the database.</p>
      )}
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {Object.values(movies).map(m => (
            <tr key={m._id}>
              <td>{m.title}</td>
              <td>{m.genre.name}</td>
              <td>{m.numberInStock}</td>
              <td>{m.dailyRentalRate}</td>
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
    </>
  );
};

export default Movies;

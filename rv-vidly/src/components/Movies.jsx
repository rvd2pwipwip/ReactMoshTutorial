import React from "react";
import { getMovies } from "./../services/fakeMovieService";

const Movies = () => {
  const [movies, setMovies] = React.useState(getMovies);

  const handleDelete = id => {
    setMovies(movies.filter(m => m._id !== id));
  };

  const count = movies.length;
  // const { length: count } = movies; //useless es6 destructuring...

  if (!count) return <p>There are no movies in the database.</p>;
  return (
    <>
      <p>Showing {count} movies in the database.</p>
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
          {movies.map(m => (
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

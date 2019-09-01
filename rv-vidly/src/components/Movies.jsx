import React from "react";
import { getMovies } from "./../services/fakeMovieService";
import Like from "./common/Like";

const Movies = () => {
  const [movies, setMovies] = React.useState(getMovies);

  const handleDelete = id => {
    setMovies(movies.filter(m => m._id !== id));
  };

  const handleLike = movie => {
    const likedMovies = [...movies]; // 1. copy movies
    const index = likedMovies.indexOf(movie); // 2. find liked/unliked movie
    likedMovies[index].liked = !likedMovies[index].liked; // 3. change liked value
    setMovies(likedMovies); // 4. update movies
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
    </>
  );
};

export default Movies;

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Movie from "../Movie/Movie";

function MovieDetails() {
  const movies = useSelector((store) => store.movies);
  const genres = useSelector((store) => store.genres);
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };

  return (
    <>
      {movies &&
        movies.map((movie) => {
          return (
            <div key={movie.id}>
              <img src={movie.poster} />
              <h1>{movie.title}</h1>
              <p>{movie.description}</p>
            </div>
          );
        })}
      <h3>Genres</h3>
      {genres &&
        genres.map((genre) => {
          return <p>{genre.name}!</p>;
        })}
      <button onClick={goHome}>Go Back to home</button>
    </>
  );
}

export default MovieDetails;

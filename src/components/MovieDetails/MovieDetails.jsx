import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function MovieDetails(){

    const movies = useSelector(store => store.movies)
    const genres = useSelector(store => store.genres)
    
    return(
        <>
        {movies && movies.map((movie) => {
            return (
                <div key={movie.id}>
                    <img src={movie.poster} />
                    <p>{movie.description}</p>
                    <button>Go Back</button>
                </div>
            )
        })}
        {/* <h1>{genres && JSON.stringify(genres)}</h1> */}
        </>
    )
}

export default MovieDetails
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
        <ul>
        {genres && genres.map((genre)=>{
            return (
                
                    <li key={genre.id}>{genre.name}</li>
                
            )
        })}
        </ul>
        </>
    )
}

export default MovieDetails
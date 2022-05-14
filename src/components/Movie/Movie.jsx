import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Movie({movie}){
    const dispatch = useDispatch();
    const history = useHistory();

    const getMovieDetails = () => {
        dispatch({
            type: 'FETCH_MOVIE',
            payload: movie.id
        })
        dispatch({
            type: 'FETCH_GENRE',
            payload: movie.id
        })
        history.push('/details')
    }

    return (
        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={getMovieDetails}/>
                        </div>
    )
}

export default Movie
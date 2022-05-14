import { useHistory } from "react-router-dom";

function Movie({movie}){
    const history = useHistory();

    return (
        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={getDetails}/>
                        </div>
    )
}

export default Movie
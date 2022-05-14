function Movie({movie}){
    return (
        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
    )
}

export default Movie
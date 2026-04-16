function MovieDetails({ movie, onClose }) {
    const poster =
        movie.Poster !== "N/A"
            ?movie.Poster
            :"https://via.placeholder.com/200";

    return (
        <div className="details-box">
            {onClose && <button onClick={onClose}>Close</button>}

            <h2>{movie.Title}</h2>
            <img src={poster} alt={movie.Title} width="200" /> 

            <p><strong>Year:</strong> {movie.Year}</p>
            <p><strong>Released:</strong> {movie.Released}</p>
            <p><strong>Runtime:</strong> {movie.Runtime}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>Language:</strong> {movie.Language}</p>
            <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
        </div>
    );
}

export default MovieDetails;
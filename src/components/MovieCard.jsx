import { Link } from "react-router-dom";

function MovieCard({ movie, onFavorite, isFavorite }) {
    const poster =
        movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/150";

    return (
        <div className="movie-card">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={poster} alt={movie.Title} width="150" />

            <Link to={`/movie/${movie.imdbID}`}>
                <button>Details</button>
            </Link>

            <button onClick={() => onFavorite(movie)} disabled={isFavorite}>
                {isFavorite ? "Saved" : "Favorite"}
            </button>
        </div>
    );
}

export default MovieCard;
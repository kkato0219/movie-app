import { Link } from "react-router-dom";

function FavoritesList({ favorites, onRemove }) {
    return (
        <div>
            <h2>Favorites</h2>

            {favorites.length === 0 ? (
                <p>No favorites yet.</p>
            ) : (
                <div className="favorites-grid">
                    {favorites.map((movie) => {
                        const poster =
                            movie.Poster !== "N/A"
                                ? movie.Poster
                                : "https://via.placeholder.com/150";

                        return (
                            <div key={movie.imdbID}>
                                <img src={poster} alt={movie.Title} width="150" />
                                <h3>{movie.Title}</h3>
                                <p>{movie.Year}</p>

                                <Link to={`/movie/${movie.imdbID}`}>
                                    <button>Details</button>
                                </Link>

                                <button onClick={() => onRemove(movie.imdbID)}>
                                    Remove
                                </button>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default FavoritesList;
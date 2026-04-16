import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetails from "../components/MovieDetails";

function MovieDetailsPage({ favorites, addFavorite }) {
    const { imdbID } = useParams();

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        async function fetchMovieDetails() {
            try {
                setLoading(true);
                setMessage("");

                const res = await fetch(
                    `https://www.omdbapi.com/?apikey=cbbe6a87&i=${imdbID}`
                );
                const data = await res.json();

                if (data.Response === "False") {
                    setMessage("Movie details not found.");
                    setMovie(null);
                } else {
                    setMovie(data);
                }
            } catch (error) {
                console.log(error);
                setMessage("Something went wrong");
            } finally {
                setLoading(false);
            }
        }

        fetchMovieDetails();
    }, [imdbID]);

    const isFavorite =
        movie && favorites.some((fav) => fav.imdbID === movie.imdbID);

    return (
        <div>
            <Link to="/">← Back to Home</Link>

            {loading && <p>Loading movie details...</p>}
            {message && <p>{message}</p>}

            {movie && (
                <div>
                    <MovieDetails movie={movie} />

                    <button
                        onClick={() => addFavorite(movie)}
                        disabled={isFavorite}
                    >
                        {isFavorite ? "Saved" : "Add to Favorites"}
                    </button>
                </div>
            )}
        </div>
    );
}

export default MovieDetailsPage;
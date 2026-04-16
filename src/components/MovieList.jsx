import MovieCard from "./MovieCard";

function MovieList({ movies, onFavorite, favorites }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onFavorite={onFavorite}
          isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
        />
      ))}
    </div>
  );
}

export default MovieList;
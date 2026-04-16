import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

function HomePage({
    searchInput,
    setSearchInput,
    handleSearch,
    loading,
    message,
    movies,
    addFavorite,
    favorites,
    page,
    totalResults,
    setPage,
}) {
    return (
    <div>
      <h1>Movie Search App</h1>

      <SearchBar
        search={searchInput}
        onChangeSearch={setSearchInput}
        onSearch={handleSearch}
      />

      {loading && <p className="message">Searching movies...</p>}
      {message && <p className="message">{message}</p>}
      {!searchInput && !loading && <p className="message">Search for a movie to get started.</p>}

      {movies.length > 0 && (
        <MovieList
          movies={movies}
          onFavorite={addFavorite}
          favorites={favorites}
        />
      )}

      <Pagination
        page={page}
        totalResults={totalResults}
        onPrevious={() => setPage(page - 1)}
        onNext={() => setPage(page + 1)}
      />
    </div>
  );
}

export default HomePage;
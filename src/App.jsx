import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import useFetchMovies from "./hooks/useFetchMovies";
import useDebounce from "./hooks/useDebounce";

import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
    const [searchInput, setSearchInput] = useState("");
    const debouncedSearch = useDebounce(searchInput, 500);

    const [favorites, setFavorites] = useLocalStorage("favorites", []);
    const [page, setPage] = useState(1);

    const { movies, loading, message, totalResults } = useFetchMovies(debouncedSearch, page);
    
    useEffect(() => {
        setPage(1);
    }, [debouncedSearch]);


    function handleSearch() {
        if (!searchInput.trim()) return;
        setPage(1);
    }

    function addFavorite(movie) {
        const alreadyExists = favorites.some((item) => item.imdbID === movie.imdbID);

        if (alreadyExists) return;

        setFavorites([...favorites, movie]);
    }

    function removeFavorite(imdbID) {
        setFavorites(favorites.filter((movie) => movie.imdbID !== imdbID));
    }

    return (
        <div>
            <header className="header">
                <h1 className="logo">🎬 Movie App</h1>

                <nav className="nav">
                    <NavLink
                        to="/"
                        style={({ isActive }) => ({
                            fontWeight: isActive ? "bold" : "normal",
                            color: isActive ? "#ff4d4d" : "#333",
                        })}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/favorites"
                        style={({ isActive }) => ({
                            fontWeight: isActive ? "bold" : "normal",
                            color: isActive ? "#ff4d4d" : "#333",
                        })}
                    >
                        Favorites
                    </NavLink>
                </nav>
            </header>

            <Routes>
                <Route 
                    path="/"
                    element={
                        <HomePage
                            searchInput={searchInput}
                            setSearchInput={setSearchInput}
                            handleSearch={handleSearch}
                            loading={loading}
                            message={message}
                            movies={movies}
                            addFavorite={addFavorite}
                            favorites={favorites}
                            page={page}
                            totalResults={totalResults}
                            setPage={setPage}
                        />
                    }
                />

                <Route
                    path="/favorites"
                    element={
                        <FavoritesPage
                            favorites={favorites}
                            removeFavorite={removeFavorite}
                        />
                    }
                />

                <Route 
                    path="/movie/:imdbID" 
                    element={
                        <MovieDetailsPage 
                            favorites={favorites}
                            addFavorite={addFavorite}
                        />
                    } 
                />    
            </Routes>
        </div>
    );    
}
export default App;

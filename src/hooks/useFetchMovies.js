import { useState, useEffect } from "react";

function useFetchMovies(search, page) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [totalResults, setTotalResults] = useState(0);

    const apiKey = "cbbe6a87";

    useEffect(() => {
        if (!search.trim()) {
            setMovies([]);
            setMessage("");
            setTotalResults(0);
            return;
        }

        async function fetchMovies() {
            try {
                setLoading(true);
                setMessage("");

                const response = await fetch(
                    `https://www.omdbapi.com/?apikey=cbbe6a87&s=${encodeURIComponent(search)}&page=${page}`
                );

                const data = await response.json();

                if (data.Response === "False") {
                    setMovies([]);
                    setMessage("No movies found.");
                    setTotalResults(0);
                } else {
                    setMovies(data.Search);
                    setTotalResults(Number(data.totalResults));
                }
            } catch (error) {
                console.log(error);
                setMessage("Something went wrong");
            } finally {
                setLoading(false);
            }
        }

        fetchMovies();
    }, [search, page]);
        

    return { movies, loading, message, totalResults };
}

export default useFetchMovies;
function SearchBar({ search, onChangeSearch, onSearch }) {
    function handleKeyDown(e) {
        if (e.key === "Enter") {
            onSearch();
        }
    }

    return (
        <div className="search-bar">
            <input 
                type="text"
                value={search}
                onChange={(e) => onChangeSearch(e.target.value)}
                placeholder="Search movies..." 
            />

            <button onClick={onSearch}>
                Search
            </button>
        </div>
    );
}

export default SearchBar;
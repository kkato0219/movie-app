import FavoritesList from "../components/FavoritesList";

function FavoritesPage({ favorites, removeFavorite }) {
    return (
        <div>
            <h1>Favorites</h1>
            <FavoritesList favorites={favorites} onRemove={removeFavorite} />
        </div>
    )
}

export default FavoritesPage;
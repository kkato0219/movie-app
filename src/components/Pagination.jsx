function Pagination({ page, totalResults, onPrevious, onNext }) {
    const totalPages = Math.ceil(totalResults / 10);

    return (
        <div>
            <button onClick={onPrevious} disabled={page === 1}>
                Previous
            </button>

            <span> Page {page} </span>

            <button onClick={onNext} disabled={page >= totalPages}>
                Next
            </button>
        </div>
    )
}

export default Pagination;
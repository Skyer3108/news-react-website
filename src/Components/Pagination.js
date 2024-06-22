
const Pagination = (props) => {

    const { currentPage, totolPages, onPageChange } = props

    const handlePageClick = (pagNumber) => {
        onPageChange(pagNumber)
    }

    const renderPageItems = () => {

        const pageItems = []
        for (let i = 1; i < totolPages; i++) {

            pageItems.push(<li key={i} onClick={() => onPageChange(i)} class='page-item'><a class="page-link" href="#">{i}</a></li>)

        }
        return pageItems
    }

    console.log(totolPages, 'hh')

    return (
        <div className="pag">

            <div className="pag-item">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item" disabled={currentPage === 1} onClick={() => handlePageClick(currentPage - 1)} ><a class="page-link" href="#">Previous</a></li>


                        {
                            renderPageItems()
                        }

                        <li class="page-item" disabled={currentPage === totolPages} onClick={() => handlePageClick(currentPage + 1)}><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}
export default Pagination
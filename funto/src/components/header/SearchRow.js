import Form from "react-bootstrap/Form";

const SearchRow = () => {
    return (
        <div className="header-meta d-flex align-items-center ms-lg-auto">
            <div className="search-form position-relative d-flex align-items-center">
                <Form onSubmit={e => { e.preventDefault(); }} >
                    <input className="form-control" type="text" placeholder="Search" />
                    <button className="position-absolute" type="submit">
                        <i className="bi bi-search" />
                    </button>
                </Form>
            </div>
        </div>

    )
}

export default SearchRow;
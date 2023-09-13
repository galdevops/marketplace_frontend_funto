import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import AdminSidebar from './AdminSidebar';


const MainTopbar = props => {
    const BrandLogo = "img/core-img/dashboard-logo.png";

    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };
    
    return(
        <>
            <header className='header-area sticky-on dashboard-header px-0 px-sm-0' >
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">

                        <div className="d-flex align-items-center">
                            {/* Brand Logo */}
                            <div className="admin-logo me-2 me-sm-3">
                                <Link className="d-block" to="/dashboard">
                                    <img src={`${process.env.PUBLIC_URL}/${BrandLogo}`} alt="" />
                                </Link>
                            </div>

                            
                        </div>
                        <div>
                            {/* Search Form */}
                            <div className="search-form">
                                <Form className="position-relative d-flex align-items-center" onSubmit={e => { e.preventDefault(); }} >
                                    <input className="form-control" type="text" placeholder="Search" />
                                    <button className="position-absolute" type="submit">
                                        <i className="bi bi-search" />
                                    </button>
                                </Form>
                            </div>

                        </div>

                        {/* Header Meta */}
                        <div className="header-meta d-flex align-items-center">

                            {/* Menu Toggler */}
                            <div 
                                className="menu-toggler ms-1 ms-sm-3" 
                                onClick={handleToggle}
                            >
                                <i className="bi bi-list" />
                            </div>

                            {/* Button */}
                            {/* <Link 
                                className="btn btn-sm btn-danger  ms-2 ms-sm-3 d-none d-sm-block" 
                                to="/home1"
                            >
                                <i className="bi bi-eye me-1" />
                                Frontend
                            </Link> */}
                        </div>
                    </div>
                </nav>
            </header>

            {isActive ?
            
            <AdminSidebar show={true} />

                :

                
            <AdminSidebar show={false} />
            
            }


            
        </>
    )
}
export default MainTopbar;
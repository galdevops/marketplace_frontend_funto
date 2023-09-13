import { useState } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropDown from "./DropDown";
import SearchRow from "./SearchRow";
import useStickyHeader from "./StickyHeader";


const Topbar = props => {
    const brandLogo="img/core-img/logo.png";
    const darkLogo="img/core-img/logo-white.png";

    let [check] = useState(true);    
    const sticky = useStickyHeader(10);
    const stickyClass = `${(sticky && check) ? 'sticky-on' : ''}`

    return(
        <header className={`header-area ${stickyClass}`} >
            <Navbar expand="lg">
                <Container>
                    {/* Navbar Brand */}
                    <Link className="navbar-brand" to="/">
                        <img className="light-logo" src={`${process.env.PUBLIC_URL}/${brandLogo}`} alt="Light" />
                        <img className="dark-logo" src={`${process.env.PUBLIC_URL}/${darkLogo}`} alt="Dark" />
                    </Link>
                        {/* Search Form */}
                        <SearchRow />
                        

                    {/* Header Meta */}
                    <div className="header-meta d-flex align-items-center">



                        {/* User Dropdown */}
                        <NavDropDown
                            dropdownID="dropdownMenuButton1"
                            toggleIcon="bi-person-circle"
                            dropdownList={[
                                {
                                    text: "Dashboard",
                                    url: "/dashboard",
                                    icon: "bi-speedometer2"
                                },
                                {
                                    text: "Collections",
                                    url: "/collections",
                                    icon: "bi-collection"
                                },
                                {
                                    text: "Notifications",
                                    url: "/notifications",
                                    icon: "bi-bell"
                                },
                                {
                                    text: "Settings",
                                    url: "/settings",
                                    icon: "bi-gear"
                                }
                            ]}
                        />
                    </div>
                </Container>
            </Navbar>
        </header>
    )
}

export default Topbar;
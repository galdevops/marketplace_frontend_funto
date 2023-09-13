import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Modal } from "react-bootstrap";


const AdminSidebar = props => {

    const [isActive, setActive] = useState(false);

    const userInfo = [
        {
            thumbnail: "img/user.png",
            username: "Bobby G.",
            userType: "Premium User"
        }
    ]

    const balanceCard = [
        {
            title: "Current Title",
            icon: "img/core-img/ethereum.png",
            balance: 4.08,
            balanceType: "Sum"
        }
    ]

    const AdminNav = [
        {
            id: 1,
            path: "/dashboard",
            icon: "bi-person-circle",
            text: "Dashboard"
        },
        {
            id: 2,
            path: "/orders",
            icon: "bi-hammer",
            text: "My orders"
        },
        {
            id: 3,
            path: "/gigs",
            icon: "bi-collection",
            text: "Gigs"
        },
        {
            id: 4,
            path: "/requests",
            icon: "bi-patch-check",
            text: "Gig requests"
        },
        {
            id: 5,
            path: "/notifications",
            icon: "bi-bell",
            text: "Notifications"
        },
        {
            id: 6,
            path: "/account",
            icon: "bi-gear",
            text: "Account"
        },
    ]


    return(
        <>
        
            <div className={`admin-sidebar-wrap ${props.show ? "sidebar-active" : "sidebar-disabled"}`} >
                <div className="overflowY-scroll">
                    {/* User Profile */}
                    <div className="user-profile">
                        {/* User Name */}
                        <div className="user-name mb-5">
                            <div className="d-flex align-items-center">
                                <img src={`${process.env.PUBLIC_URL}/${userInfo[0].thumbnail}`} alt="" />
                                <div className="ms-3">
                                    <h6 className="lh-1 text-dark fz-18">{userInfo[0].username}</h6>
                                    <span className="badge bg-primary fz-12">{userInfo[0].userType}</span>
                                </div>
                            </div>
                        </div>

                        {/* Balance */}
                        <div className="card shadow mb-5">
                            <div className="card-body text-center p-4">
                                <h6 className="mb-1">{balanceCard[0].title}</h6>
                                <h5 className="mb-0 text-dark d-flex align-items-center justify-content-center">
                                    <img className="me-1" src={`${process.env.PUBLIC_URL}/${balanceCard[0].icon}`} alt="" />
                                    <span className="counter">{balanceCard[0].balance}</span>
                                    <span className="ms-2">{balanceCard[0].balanceType}</span>
                                </h5>

                                {/* Recharge Button */}
                                <Link 
                                    className="btn btn-warning  btn-sm w-100 mt-3" 
                                    to="#"
                                >
                                    Recharge
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Sidenav */}
                    <div className="sidenav">
                        <ul>
                            <li>Menu</li>
                            {AdminNav.map((elem, index) => (
                                <li key={index}>
                                    <NavLink to={elem.path} >
                                        <i className={`bi ${elem.icon}`} />
                                        {elem.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-auto">
                        <div className="mt-5" />
                        {/* Copyright Text */}
                        <div className="copywrite-text mt-4">
                            <p className="mb-0 fz-14">{new Date().getFullYear()} © All rights reserved by 
                                <a className="fz-14 ms-1" rel="noreferrer" href="https://themeforest.net/user/designing-world/portfolio" target="_blank">Designing World</a>
                            </p>
                        </div>
                    </div>

                </div>
          

            </div>
            
        </>
    )
}
export default AdminSidebar;
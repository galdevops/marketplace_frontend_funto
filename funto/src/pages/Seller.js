import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';

import AuthorData from "../data/author/authors-data.json";
import DiscoverNFTData from "../data/discover/discover-nft.json";

import $ from "jquery";
window.jQuery = window.$ = $;
require("jquery-nice-select");

const Seller = props => {
    const authorUsername = useParams().AUTHORUSERNAME || props.seller
    const authorDetailsData = AuthorData.filter(item => item.username === authorUsername);
    const authorItemsData = DiscoverNFTData.filter(item => item.authorName === authorUsername);
    const authorData = authorDetailsData[0];

    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);
    const [modalShow3, setModalShow3] = useState(false);

    const selectSortBy = useRef();
    const selectCatagories = useRef();

    useEffect(() => {
        $(selectSortBy.current).niceSelect();
    }, []);

    useEffect(() => {
        $(selectCatagories.current).niceSelect();
    }, []);

    const socialData = [
        {
            path: "#",
            icon: "img/core-img/icons8-facebook.svg"
        },
        {
            path: "#",
            icon: "img/core-img/icons8-twitter.svg"
        },
        {
            path: "#",
            icon: "img/core-img/icons8-instagram.svg"
        },
        {
            path: "#",
            icon: "img/core-img/icons8-slack.svg"
        },
        {
            path: "#",
            icon: "img/core-img/icons8-player.svg"
        }
    ]

    function ShareModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="shareModalLabel"
                centered 
                className="share-modal"
            >
                <Modal.Body>
                    <h5 id="shareModalLabel" className="text-center mb-3">Share this item</h5>
                    <div className="d-flex align-items-center justify-content-center">
                        {socialData.map((item, index) => (
                            <a key={index} className="mx-2" href={item.path} >
                                <img src={`${process.env.PUBLIC_URL}/${item.icon}`} alt="Social" />
                            </a>
                        ))}
                    </div>
                    <button 
                        onClick={props.onHide} 
                        className="btn btn-close-style btn-danger btn-sm " 
                        type="button"
                    >
                        <i className="bi bi-x-lg" />
                    </button>       
                </Modal.Body>
          </Modal>
        );
    }

    function CopyLink(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="CopyLinkLabel"
                centered 
                className="share-modal"
            >
                <Modal.Body>
                    <h5 id="CopyLinkLabel" className="text-center mb-3">Copy item link</h5>
                    <p className="user-select-all mb-0 border border-2 p-3 rounded">
                        {window.location.href}
                    </p>

                    <button 
                        onClick={props.onHide} 
                        className="btn btn-close-style btn-danger btn-sm " 
                        type="button"
                    >
                        <i className="bi bi-x-lg" />
                    </button>       
                </Modal.Body>
          </Modal>
        );
    }

    function Report(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="ReportLabel"
                centered 
                className="share-modal"
            >
                <Modal.Body>
                    <h5 id="ReportLabel" className="text-center mb-3">Why are you reporting?</h5>

                    <form>
                        <textarea className="form-control mb-3" id="reportText" name="reportMessage" placeholder="Write your complaint." />
                        <button className="btn btn-primary btn-sm  w-100" type="submit">Report</button>
                    </form>

                    <button 
                        onClick={props.onHide} 
                        className="btn btn-close-style btn-danger btn-sm " 
                        type="button"
                    >
                        <i className="bi bi-x-lg" />
                    </button>
                </Modal.Body>
          </Modal>
        );
    }

    const [count, setCount] = useState(4);
    const [noMorePost, setNoMorePost] = useState(false);
    const countSlice = authorItemsData.slice(0, count);

    const handleLoadMore = () => {
        setCount(count + 4);
        if(count >= authorItemsData.length) {
            setNoMorePost(true);
        }
    }

    return(
        <>
            <div 
                className="author-top-content bg-img bg-overlay" 
                style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${authorData.bgImage})`}}
            >
                <div className="container">
                    <div className="card text-white border-0 bg-transparent">
                        <div className="card-body p-4 p-sm-5">
                            <div className="row g-4 g-lg-5 align-items-center">
                                <div className="col-7 col-sm-6 col-md-5 col-lg-3">
                                    <div className="author-thumbnail">
                                        <img className="rounded" src={`${process.env.PUBLIC_URL}/${authorData.thumbnail}`} alt="" />
                                        <i className="bi bi-patch-check-fill" />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-10 col-md-7 col-lg-9">
                                    <div className="author-data">
                                        <h3 className="mb-2 author-name text-white">
                                            {authorData.name}
                                            <Link className={`btn btn-${authorData.followBtnInfo[0].style} btn-sm  align-top ms-2 px-3 py-1`} to="" >
                                                {authorData.followBtnInfo[0].text}
                                            </Link>
                                        </h3>
                                        <div className="btn btn-minimal d-inline-block mb-3 text-white">
                                            @{authorData.username}
                                        </div>
                                        <p className="mb-0">
                                            {authorData.shortDesc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Share Modal */}
                        <ShareModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />

                        {/* Copy Link */}
                        <CopyLink
                            show={modalShow2}
                            onHide={() => setModalShow2(false)}
                        />

                        {/* Report Modal */}
                        <Report
                            show={modalShow3}
                            onHide={() => setModalShow3(false)}
                        />

                        {/* Dropdown */}
                        <Dropdown className="author-dd" >
                            <Dropdown.Toggle className=" shadow-sm p-0" id={`authorDetailsID${authorData.id}`}>
                                <i className="bi bi-three-dots-vertical" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu align="end" >
                                <Link className="dropdown-item" to="#" onClick={() => setModalShow(true)}>
                                    <i className="me-2 bi bi-share" />
                                    Share
                                </Link>

                                <Link className="dropdown-item" to="#" onClick={() => setModalShow2(true)}>
                                    <i className="me-2 bi bi-box-arrow-up-right" />
                                    Copy Link
                                </Link>
                                
                                <Link className="dropdown-item" to="#" onClick={() => setModalShow3(true)}>
                                    <i className="me-2 bi bi-flag" />
                                    Report
                                </Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>

            
            <div className="author-content-wrap mt-70">
                <div className="container">
                    <div className="row g-4 g-xl-5 justify-content-center">
                        <div>
                            <div className="card text-white author-sidebar-card shadow-sm">
                                <div className="card-body p-4 p-md-5 p-lg-4 p-xl-5">
                                    <h5 className="mb-3">About this seller</h5>

                                    {authorData.authorDesc.map((elem, index) => (
                                        <div key={index} dangerouslySetInnerHTML={{__html: elem}} />
                                    ))}
                                    
                                    <div className="meta-data d-flex align-items-center mt-4">
                                        <h6 className="mb-0 border-end text-center pe-3 me-3">
                                            <span className="counter">
                                                <TrackVisibility once>
                                                    {({ isVisible }) => (
                                                        <div>
                                                            {isVisible ? <CountUp duration={2} end={authorItemsData.length} /> : 0}
                                                        </div>
                                                    )}
                                                </TrackVisibility>
                                            </span> Items
                                        </h6>

                                        <h6 className="mb-0 border-end text-center pe-3 me-3">
                                            <span className="counter">
                                                <TrackVisibility once>
                                                    {({ isVisible }) => (
                                                        <div>
                                                            {isVisible ? <CountUp duration={2} end={authorData.owners} /> : 0}
                                                        </div>
                                                    )}
                                                </TrackVisibility>
                                            </span> Owners
                                        </h6>

                                        <h6 className="mb-0 text-center">
                                            <span className="counter">
                                                <TrackVisibility once>
                                                    {({ isVisible }) => (
                                                        <div>
                                                            {isVisible ? <CountUp duration={2} end={authorData.followers} /> : 0}
                                                        </div>
                                                    )}
                                                </TrackVisibility>
                                            </span> Followers
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            
           
                    
            

            
        </>
    )
}

export default Seller;
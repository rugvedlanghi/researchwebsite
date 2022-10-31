import React from 'react'
import { useEffect, useState } from 'react';
import SpringerApiComponent from '../component/SpringerApi'; 
import Eric_API from '../component/Eric_API';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  Link,
} from "react-router-dom";
const Stud_journal=() => {
  return (
    <div>
    {/* ======= Header ======= */}
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <h4 className="logo"><a href="index.html">Research Portal</a></h4>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
        <nav id="navbar" className="navbar">
          <ul>
          <Link to="/">
                <li>
                  <a className="nav-link scrollto">Home</a>
                </li>
              </Link>
              <Link to="/stud_about">
                <li>
                  <a className="nav-link scrollto">about</a>
                </li>
              </Link>
              <Link to="/stud_journal">
                <li>
                  <a className="nav-link scrollto">journal</a>
                </li>
              </Link>
              <Link to="/competitions">
                <li>
                  <a className="nav-link scrollto">competitions</a>
                </li>
              </Link>
              <Link to="/Stud_new_Profile">
                <li>
                  <a className="nav-link scrollto">Profiles</a>
                </li>
              </Link>
              <Link to="/research_paper">
                <li>
                  <a className="nav-link scrollto">Research Papers</a>
                </li>
              </Link>
              <Link to="/Task_assign">
                <li>
                  <a className="nav-link scrollto">Task</a>
                </li>
              </Link>
              <li className="dropdown">
                <a href="#">
                  <span>other</span> <i className="bi bi-chevron-down" />
                </a>
              <ul>
                <li className="dropdown"><a href="#"><span>Publication</span> <i className="bi bi-chevron-right" /></a>
                  <ul>
                    <li><a href="https://www.scimagojr.com/journalrank.php">SRJ Ranking</a></li>
                    <li><a href="https://publication-recommender.ieee.org/home">IEEE Journal Recommendation</a></li>
                    <li><a href="https://journals.ieeeauthorcenter.ieee.org/create-your-ieee-journal-article/authoring-tools-and-templates/tools-for-ieee-authors/find-a-journal/">IEEE
                        Author Center</a></li>
                  </ul>
                </li>
                <li className="dropdown"><a href="#"><span>Resources</span> <i className="bi bi-chevron-right" /></a>
                  <ul>
                    <li><a href="#">Policy</a></li>
                    <li><a href="#">Funds</a></li>
                    <li><a href="#">Formats</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                    <a href="/edit_profile">
                      <span>Edit Profile</span>{" "}
                    </a>
                  </li>
              </ul>
            </li>
            <Link to="/stud_feedback">
                <li>
                  <a className="nav-link scrollto">Feedback</a>
                </li>
              </Link>
            <Link to="/Login">
                <li>
                  <a className="getstarted scrollto">Login</a>
                </li>
              </Link>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>{/* .navbar */}
      </div>
    </header>{/* End Header */}
    <main>
      <div>
        <br /><br /><br />
      </div>
      <section id="hero">
        <div className="hero-container">
          <div
            id="heroCarousel"
            data-bs-interval={5000}
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <ol className="carousel-indicators" id="hero-carousel-indicators" />
            <div className="carousel-inner" role="listbox">
              <div
                className="carousel-item active"
                style={{ backgroundImage: "url(assets/img/slide/Myproject.jpg)" }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>Search</h2>
                    {/* <form onSubmit={getSearch}>
                      <div className="wrap">
                        <div className="search">
                          <input
                            value={search}
                            onChange={updateSearch}
                            type="text"
                            className="searchTerm"
                            placeholder="What are you looking for?"
                          />
                          <button className="closeButton" onClick={searchClose}>
                            <FontAwesomeIcon icon={faClose}/>
                          </button>
                          <button className="searchButton">
                            <FontAwesomeIcon
                              icon={faMagnifyingGlass}
                            />
                          </button>
                        </div>
                      </div>
                    </form> */}
                    {/* <div className="wrap">
                      <div className="search">
                        <input
                          type="text"
                          className="searchTerm"
                          placeholder="What are you looking for?"
                        />
                        <button type="submit" className="searchButton">
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                      </div>
                    </div> */}
                    <div className="black-font searchbar">
                      <div className="gcse-search"></div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{ backgroundImage: "url(assets/img/My project.jpg)" }}
              >
                {/* <div className="carousel-container">
                    <div className="carousel-content">
                      <h2 className="animate_animated animate_fadeInDown"></h2>
                      <p className="animate_animated animate_fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi
                        ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea
                        voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                      <div className="black-font searchbar">
                        <div className="gcse-search" />
                        <div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="carousel-item" style={{backgroundImage: 'url(assets/img/slide/slide-3.jpg)'}}> */}
                {/* <div className="carousel-container">
                    <div className="carousel-content">
                      <h2 className="animate_animated animate_fadeInDown">Search bar</h2>
                      <p className="animate_animated animate_fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi
                        ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea
                        voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                      <div className="black-font searchbar">
                        <div className="gcse-search"  />
                        <div>
                        </div>
                      </div>
                    </div>
                  </div> */}
              </div>
            </div>
            {/* <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true" />
              </a>
              <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true" />
              </a> */}
          </div>
        </div>
      </section>
      <section className='stud_js'>
        <Eric_API  />
        <SpringerApiComponent />
        {/* <div className="black-font searchbar">
          <div className="gcse-search">
          </div>
        </div> */}
      </section>
      <div>
        <br /><br /><br />
      </div>
    </main>
    {/* ======= Footer ======= */}
    <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>Research Portal</h3>
                  <p>
                    Don Bosco Institute of Technology <br />
                    Kurla (West), Mumbai - 70
                    <br />
                    <br />
                    <strong>Phone:</strong> 022 68878700
                    <br />
                    <strong>Email:</strong> dbit@dbit.in
                    <br />
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="/">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="stud_about">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="stud_journal">Journals</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="Competitions">Competition</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="stud_feedback">Feedback</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Other Resources</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="https://www.scimagojr.com/journalrank.php">
                      SRJ Ranking
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="https://publication-recommender.ieee.org/home">
                      IEEE Journal Recommendation
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="https://journals.ieeeauthorcenter.ieee.org/create-your-ieee-journal-article/authoring-tools-and-templates/tools-for-ieee-authors/find-a-journal/">
                      IEEE Author Center
                    </a>
                  </li>
                </ul>
              </div>
              <div className="social-links mt-3">
                <a href="https://twitter.com/dbit_mumbai" className="twitter">
                  <i className="bx bxl-twitter" />
                </a>
                <a
                  href="https://www.facebook.com/dbitofficialfb"
                  className="facebook"
                >
                  <i className="bx bxl-facebook" />
                </a>
                <a
                  href="https://www.instagram.com/dbitofficial/"
                  className="instagram"
                >
                  <i className="bx bxl-instagram" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC_GX-7wsZJMhc3lYgEMkAxA"
                  className="google-plus"
                >
                  <i className="bx bxl-youtube" />
                </a>
                <a
                  href="https://www.linkedin.com/school/don-bosco-institute-of-technology/"
                  className="linkedin"
                >
                  <i className="bx bxl-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
  </div>
  )
}

export default Stud_journal;
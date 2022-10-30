import { Link } from 'react-router-dom'
import React from 'react'

const Competitions=() => {
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
                  <a className="nav-link scrollto">Task Assign</a>
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
          {/* ======= Portfolio Section ======= */}
          <section id="portfolio" className="portfolio">
            <div className="container">
              <div className="section-title">
                <h2>Competitions</h2>
                {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                  consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                  in iste officiis commodi quidem hic quas.</p> */}
              </div>
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-app">Future</li>
                    <li data-filter=".filter-card">Current</li>
                    <li data-filter=".filter-web">old</li>
                  </ul>
                </div>
              </div>
              <div className="row portfolio-container">
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/mumbai.jpg" className="img-fluid " alt="" />
                    <div className="portfolio-info">
                      <h4>Name Competition </h4>
                      <p>date</p>
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus" /></a>
                        <a href="Competitions_details" title="More Details"><i className="bx bx-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/sih.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Name Competition</h4>
                      <p>Date</p>
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                        <a href="competition-details.html" title="More Details"><i className="bx bx-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/icpc.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Name Competition</h4>
                      <p>Date</p>
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus" /></a>
                        <a href="competition-details.html" title="More Details"><i className="bx bx-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/codetech.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Name Competition</h4>
                      <p>Date</p>
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus" /></a>
                        <a href="competition-details.html" title="More Details"><i className="bx bx-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/ieee.png" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Name Competition</h4>
                      <p>Date</p>
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus" /></a>
                        <a href="competition-details.html" title="More Details"><i className="bx bx-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/topcoder.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Name Competition</h4>
                      <p>date</p>
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus" /></a>
                        <a href="competition-details.html" title="More Details"><i className="bx bx-link" /></a>
                      </div>  
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Name Competition</h4>
                      <p>Date</p>
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus" /></a>
                        <a href="competition-details.html" title="More Details"><i className="bx bx-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Name Competition</h4>
                      <p>Date</p>
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus" /></a>
                        <a href="competition-details.html" title="More Details"><i className="bx bx-link" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div className="portfolio-wrap">
                    <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Name Competition</h4>
                      <p>
                        date
                      </p>
                      <div className="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a>
                        <a href="competition-details.html" title="More Details"><i className="bx bx-link" /></a>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>{/* End Portfolio Section */}
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

export default Competitions;

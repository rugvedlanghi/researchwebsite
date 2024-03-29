import React from 'react'
import { Link } from 'react-router-dom';

const Competitions_details=() => {
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
    <main id="main">
      {/* ======= Breadcrumbs ======= */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Competition Details</h2>
            <ol>
              <li><a href="index.html">Home</a></li>
              <li><a href="stud_competition.html">Competition</a></li>
              <li>Competition Details</li>
            </ol>
          </div>
        </div>
      </section>{/* End Breadcrumbs */}
      {/* ======= Portfolio Details Section ======= */}
      <section id="competition-details" className="competition-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="competition-details-slider swiper">
                <div className="swiper-wrapper align-items-center">
                  <div className="swiper-slide">
                    <img src="assets/img/portfolio/mum_hack.jpeg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/img/portfolio/portfolio-2.jpg" alt="" />
                  </div>
                  <div className="swiper-slide">
                    <img src="assets/img/portfolio/portfolio-3.jpg" alt="" />
                  </div>
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Information</h3>
                <ul>
                  <li><strong>Date</strong>: 01 March, 2020</li>
                  <li><strong>Category</strong>: Web design</li>
                  <li><strong>Eligibility</strong>: abc</li>
                  <li><strong>Fee</strong>: Rs 100</li>
                  <li><strong>Prize</strong>: Rs 10000</li>
                  <li><strong>Sponsorships</strong>: XYZ</li>
                  <li><strong>For More Details</strong>: <a href="stud_competition.html">www.example.com</a></li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>About the competition</h2>
                <p>
                  Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Portfolio Details Section */}
    </main>{/* End #main */}
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

export default Competitions_details;
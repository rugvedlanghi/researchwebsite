import React from 'react'
import { Link } from 'react-router-dom'

const Stud_about=() => {
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
            <li><a className='nav-link scrollto'>Home</a></li>
            </Link>
            <Link to="/stud_about">
            <li><a className='nav-link scrollto'>about</a></li>
            </Link>
            <Link to="/stud_journal">
            <li> <a className='nav-link scrollto'>journal</a></li>
            </Link>
            <Link to="/competitions">
            <li> <a className='nav-link scrollto'>competitions</a></li>
            </Link>
            <Link to="/edit_profiles">
            <li> <a className='nav-link scrollto'>Profiles</a></li>
            </Link>
            <Link to="/research_paper">
            <li> <a className='nav-link scrollto'>Research Papers</a></li>
            </Link>
                <li className="dropdown"><a href="#"><span>other</span> <i className="bi bi-chevron-down" /></a>
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
                  </ul>
                </li>
                <Link to='/stud_feedback'>
            <li><a className="nav-link scrollto">Feedback</a></li>
            </Link>
                <li><a className="getstarted scrollto" href="#">Login</a></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>{/* .navbar */}
          </div>
        </header>{/* End Header */}
        <main>
          {/* =========== Gap for menu ============== */}
          <div>
            <p> <br /><br /><br /> </p>
          </div>
          {/* ======= About Section ======= */}
          <section id="about" className="about">
            <div className="container">
              <div className="row no-gutters">
                <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" />
                <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
                  <div className="content d-flex flex-column justify-content-center">
                    <h3>Centre of Research &amp; Development</h3>
                    <h2>Our Vision</h2>
                    <p>
                      <b>
                        The Centre of Research and Development at DBIT will become a unique centre for innovative and
                        collaborative research that transforms Engineering Technology and Scientific knowledge to solve real
                        world problems
                      </b>
                    </p>
                    <br />
                    <div className="row">
                      <h2>Our Mission</h2>
                      <div className="col-md-6 icon-box">
                        <i className="bx bx-images" />
                        <h4>To broaden the scope of undergraduate research</h4>
                        <p />
                      </div>
                      <div className="col-md-6 icon-box">
                        <i className="bx bx-receipt" />
                        <h4>To collaborate with research communities to promote interdisciplinary research.</h4>
                        <p />
                      </div>
                      <div className="col-md-6 icon-box">
                        <i className="bx bx-cube-alt" />
                        <h4>To promote quality research through ethical standards and best practices</h4>
                        <p />
                      </div>
                      <div className="col-md-6 icon-box">
                        <i className="bx bx-shield" />
                        <h4>To sensitize to social problems and evolve sustainable solutions</h4>
                        <p />
                      </div>
                      <div className="col-md-6 icon-box ">
                        <i className="bi bi-gear-fill" />
                        <h4>To promote quality research through ethical standards and best practices</h4>
                        <p />
                      </div>
                    </div>
                  </div>{/* End .content*/}
                </div>
              </div>
            </div>
          </section>{/* End About Section */}
          {/* ======= Counts Section ======= */}
          {/* <section id="counts" class="counts">
      <div class="container">

        <div class="row no-gutters">

          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
              <i class="bi bi-emoji-smile"></i>
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                class="purecounter"></span>
              <p><strong>Happy Clients</strong> consequuntur quae</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
              <i class="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1"
                class="purecounter"></span>
              <p><strong>Projects</strong> adipisci atque cum quia aut</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
              <i class="bi bi-headset"></i>
              <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1"
                class="purecounter"></span>
              <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
            <div class="count-box">
              <i class="bi bi-people"></i>
              <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1"
                class="purecounter"></span>
              <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
            </div>
          </div>

        </div>

      </div>
    </section>End Counts Section */}
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
                      <br /><br />
                      <strong>Phone:</strong> 022 68878700<br />
                      <strong>Email:</strong> dbit@dbit.in<br />
                    </p>
                  </div>
                </div>
                {/* <div class="col-lg-3 col-md-6 footer-info">
            <div class="container p-0 d-flex justify-content-center align-items-center">
              <a href="index.html" class="d-flex align-items-center footer-logo">
                <img src="assets/img/dbit_logo.jpg" alt="">
                <h3 class="m-0">CSI</h3>
              </a>
            </div>
            </div> */}
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Links</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right" /> <a href="index.html">Home</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="stud_about.html">About us</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="stud_journal.html">Journals</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="Researchpaper.html">Research Paper</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="stud_competition.html">Competition</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="stud_feedback.html">Feedback</a></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Other Resources</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right" /> <a href="https://www.scimagojr.com/journalrank.php">SRJ
                        Ranking</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="https://publication-recommender.ieee.org/home">IEEE
                        Journal Recommendation</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="https://journals.ieeeauthorcenter.ieee.org/create-your-ieee-journal-article/authoring-tools-and-templates/tools-for-ieee-authors/find-a-journal/">IEEE
                        Author Center</a></li>
                    {/*<li><i class="bx bx-chevron-right"></i> <a href="#"></a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#"></a></li> */}
                  </ul>
                </div>
                {/* <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="" method="post">
              <input type="email" name="email"><input type="submit" value="Subscribe">
            </form>

          </div> */}
                <div className="social-links mt-3">
                  <a href="https://twitter.com/dbit_mumbai" className="twitter"><i className="bx bxl-twitter" /></a>
                  <a href="https://www.facebook.com/dbitofficialfb" className="facebook"><i className="bx bxl-facebook" /></a>
                  <a href="https://www.instagram.com/dbitofficial/" className="instagram"><i className="bx bxl-instagram" /></a>
                  <a href="https://www.youtube.com/channel/UC_GX-7wsZJMhc3lYgEMkAxA" className="google-plus"><i className="bx bxl-youtube" /></a>
                  <a href="https://www.linkedin.com/school/don-bosco-institute-of-technology/" className="linkedin"><i className="bx bxl-linkedin" /></a>
                </div>
              </div>
            </div>
          </div>
        </footer>{/* End Footer */}
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
      </div>
  )
}

export default Stud_about;
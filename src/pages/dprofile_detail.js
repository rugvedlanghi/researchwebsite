import React from 'react'
import { Link } from 'react-router-dom'

const Dprofile_detail=() => {
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
            <li className="dropdown">
              <a href="#"><span>other</span> <i className="bi bi-chevron-down" /></a>
              <ul>
                <li className="dropdown">
                  <a href="#"><span>Publication</span> <i className="bi bi-chevron-right" /></a>
                  <ul>
                    <li>
                      <a href="https://www.scimagojr.com/journalrank.php">SRJ Ranking</a>
                    </li>
                    <li>
                      <a href="https://publication-recommender.ieee.org/home">IEEE Journal
                        Recommendation</a>
                    </li>
                    <li>
                      <a href="https://journals.ieeeauthorcenter.ieee.org/create-your-ieee-journal-article/authoring-tools-and-templates/tools-for-ieee-authors/find-a-journal/">IEEE
                        Author Center</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#"><span>Resources</span> <i className="bi bi-chevron-right" /></a>
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
            <li><a className="getstarted scrollto" href="#about">Login</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        {/* .navbar */}
      </div>
    </header>
    {/* End Header */}
    <main>
      <div><br /><br /></div>
      {/* ============== Profile in details =============== */}
      <section>
        <div className="container emp-profile bg-light">
          <form method="post">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img src="assets\img\portfolio\portfolio-1.jpg" alt="" />
                  {/* <div class="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" name="file"/>
                </div> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head"><br />
                  <h5>
                    Name
                  </h5>
                  <h6>
                    Web Developer and Designer
                  </h6>
                  {/* <p class="proile-rating">RANKINGS : <span>8/10</span></p> */}
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                    </li>
                    {/* <li class="nav-item">
                                    <a class="nav-link " id="profile-tab" data-toggle="tab" href="#timeline"
                                        role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                </li> */}
                  </ul>
                </div>
              </div>
              {/* <div class="col-md-2">
            <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
        </div> */}
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <p>WORK At</p>
                  <p>info</p>
                  <p>info</p>
                  <a href>Website Link</a><br />
                  <a href>link</a>
                  <p>SKILLS</p>
                  <a href>Web Designer</a><br />
                  <a href>Web Developer</a><br />
                  <a href>WordPress</a><br />
                  <a href>WooCommerce</a><br />
                  <a href>PHP, .Net</a><br />
                </div>
              </div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div className="row">
                      <div className="col-md-6">
                        <label>User Id</label>
                      </div>
                      <div className="col-md-6">
                        <p>ABC123</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                        <p>ABC</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>ABC@gmail.com</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p>123 456 7890</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div className="col-md-6">
                        <p>Web Developer and Designer</p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="timeline" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="row">
                      <div className="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div className="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Hourly Rate</label>
                      </div>
                      <div className="col-md-6">
                        <p>10$/hr</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Total Projects</label>
                      </div>
                      <div className="col-md-6">
                        <p>230</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>English Level</label>
                      </div>
                      <div className="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Availability</label>
                      </div>
                      <div className="col-md-6">
                        <p>6 months</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <label>Your Bio</label><br />
                        <p>Your detail description</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
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
                <li><i className="bx bx-chevron-right" /> <a href="/">Home</a></li>
                <li><i className="bx bx-chevron-right" /> <a href="stud_about">About us</a></li>
                <li><i className="bx bx-chevron-right" /> <a href="stud_journal">Journals</a></li>
                <li><i className="bx bx-chevron-right" /> <a href="stud_competition">Competition</a></li>
                <li><i className="bx bx-chevron-right" /> <a href="stud_feedback">Feedback</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Other Resources</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <a href="https://www.scimagojr.com/journalrank.php">SRJ Ranking</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <a href="https://publication-recommender.ieee.org/home">IEEE Journal
                      Recommendation</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <a href="https://journals.ieeeauthorcenter.ieee.org/create-your-ieee-journal-article/authoring-tools-and-templates/tools-for-ieee-authors/find-a-journal/">IEEE
                      Author Center</a>
                  </li>
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
      </footer>
      {/* End Footer */}
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
    </main></div>
  )
}

export default Dprofile_detail;
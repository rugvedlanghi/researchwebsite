import React from 'react'
import { Link } from 'react-router-dom'

const Stud_feedback=() => {
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
            <p><br /><br /><br /></p>
          </div>
          {/* ======= Contact Section ======= */}
          <section id="contact" className="contact">
            <div className="container">
              <div className="section-title">
                <h2>Contact</h2>
                <p>Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                  in iste officiis commodi quidem hic quas.</p>
              </div>
              <div className="row contact-info">
                <div className="col-md-4">
                  <div className="contact-address">
                    <i className="bi bi-geo-alt" />
                    <h3>Address</h3>
                    <address>Don Bosco Institute of Technology <br />
                      Kurla (West), Mumbai - 70</address>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-phone">
                    <i className="bi bi-phone" />
                    <h3>Phone Number</h3>
                    <p><a href="tel:+155895548855">022 68878700</a></p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-email">
                    <i className="bi bi-envelope" />
                    <h3>Email</h3>
                    <p><a href="mailto:info@example.com">dbit@dbit.in</a></p>
                  </div>
                </div>
              </div>
              <div className="form">
                <form action="https://formsubmit.co/csidbit@gmail.com" method="post" role="form" className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                  </div>
                  <div className="my-3">
                    {/* <div class="loading">Loading</div>
              <div class="error-message"></div> */}
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>
            </div>
          </section>{/* End Contact Section */}
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

export default Stud_feedback;
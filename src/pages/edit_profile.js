import React from 'react'
import { Link } from 'react-router-dom'

const Edit_profile=() => {
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
          {/* ============== Profile in details =============== */}
          <section>
            <div className="container rounded bg-white mt-5 mb-5">
              <div className="row">
                <div className="col-md-3 border-right">
                  <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">username</span><span className="text-black-50">email</span><span> </span></div>
                </div>
                <div className="col-md-5 border-right">
                  <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="text-right">Profile Settings</h4>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" required /></div>
                      <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control"  placeholder="surname" required /></div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number"  /></div>
                      <div className="col-md-12"><label className="labels">Education</label><input type="text" className="form-control" placeholder="enter data "  /></div>
                      <div className="col-md-12"><label className="labels">Qualification</label><input type="text" className="form-control" placeholder="enter data "  /></div>
                      <div className="col-md-12"><label className="labels">Area of Research</label><input type="text" className="form-control" placeholder="enter data "  /></div>
                      <div className="col-md-12"><label className="labels">Specialization area</label><input type="text" className="form-control" placeholder="enter data "  /></div>
                      <div className="col-md-12"><label className="labels">Technical skills</label><input type="text" className="form-control" placeholder="enter data "  /></div>
                      <div className="col-md-12"><label className="labels">Member of Committes</label><input type="text" className="form-control" placeholder="enter data"  /></div>
                      <div className="col-md-12"><label className="labels">Certification</label><input type="text" className="form-control" placeholder="enter data"  /></div>
                      <div className="col-md-12"><label className="labels">Acknowledgement</label><input type="text" className="form-control" placeholder="enter data"  /></div>
                      <div className="col-md-12"><label className="labels">Short term training programs attended</label><input type="text" className="form-control" placeholder="enter data"  /></div>
                      <div className="col-md-12"><label className="labels">Papers presented and published</label><input type="text" className="form-control" placeholder="enter data"  /></div>
                      <div className="col-md-12"><label className="labels">Projects Guided</label><input type="text" className="form-control" placeholder="enter data"  /></div>
                      <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="enter data"  /></div>
                    </div>
                    
                    {/* <div className="row mt-3"> */}
                      {/* <div className="col-md-6"><label className="labels">Projects Guided</label><input type="text" className="form-control" placeholder  /></div>
                      <div className="col-md-6"><label className="labels">info</label><input type="text" className="form-control"  placeholder /></div> */}
                      
                    {/* </div> */}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="p-3 py-5">
                    {/* <div className="d-flex justify-content-between align-items-center experience"><span>Edit
                        Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus" />&nbsp;Experience</span></div><br /> */}
                    <div className="col-md-12"><label className="labels">Experience</label><input type="text" className="form-control" placeholder="experience" /></div> <br />
                    <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details"  /></div>
                  </div>
                </div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
              </div>
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

export default Edit_profile;
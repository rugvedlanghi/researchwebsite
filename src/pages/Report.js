import { Link } from 'react-router-dom'
import React from 'react'

const Report=() => {
  const reportsub=()=>{
    window.alert("Submission successfull");
  }
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
                <li className="dropdown">
                    <a href="/edit_profile">
                      <span>Edit Profile</span>{" "}
                    </a>
                  </li>
              </ul>
            </li>
            <li>
              <a className="nav-link scrollto" href="stud_feedback.html">Feedback</a>
            </li>
            <li><a className="getstarted scrollto" href="#about">Login</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        {/* .navbar */}
      </div>
    </header>
    {/* End Header */}
    <main>
      
      <div>
        <br /><br />
        <br /><br />
        <br /><br />
        <h2 className="px-5">Submit Report</h2>
        <br />
      </div>
      {/* ============== task assign between mentor and Research scholar =============== */}
    
      <div className="mb-3 px-5 container">
        <label htmlFor="status">Status :</label>
        <label htmlFor="status">In progress</label>
        <div className="mb-3">
          <label htmlFor="formFile" className="form-label">Sumbit Report</label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        <div className>
          <label htmlFor="Msg" className="form-label">Summary</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
        </div><br /><br />
        {/* Form submit button */}
        <div className="d-grid">
          <button className="btn btn-primary btn-lg disabled" id="submitButton" type="button" onClick={reportsub}>Submit</button>    
        </div>

 

        
      </div>
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
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <a href="stud_about.html">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <a href="stud_journal.html">Journals</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <a href="stud_competition.html">Competition</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />
                    <a href="stud_feedback.html">Feedback</a>
                  </li>
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
    </main>
    </div>
  )
}

export default Report;
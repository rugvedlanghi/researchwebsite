import React from 'react'
import { Link } from 'react-router-dom'
import "../css/d_profile.css"
const Display_profile=() => {
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
                      <a href="https://publication-recommender.ieee.org/home">IEEE Journal Recommendation</a>
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
        </nav>
        {/* .navbar */}
      </div>
    </header>
    {/* End Header */}
    <main>
      <div><br /><br /></div>
      {/* ============== Profile =============== */}
      <section>
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
          <h4>Profile</h4>
          <div className="row">
            <div className="col-lg-4 col-md-6 p-4">
              <div className="profilecard p-4">
                <div className="image d-flex flex-column justify-content-center align-items-center">
                  <button className="btn btn-secondary">
                    <img src="https://i.imgur.com/wvxPV9S.png" height={100} width={100} />
                  </button>
                  <span className="name mt-3">Name</span> <span className="idd" />
                  <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                    <span className="idd1">Mail</span>
                    <span><i className="fa fa-copy" /></span>
                  </div>
                  <div className="d-flex mt-2">
                    <a href="dprofile_detail.html"><button className="btn1">view profile </button></a>
                  </div>
                  <div className="text mt-3">
                    <span>Eleanor Pena is a creator of minimalistic x bold graphics and
                      digital artwork.<br /><br />
                    </span>
                  </div>
                  <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                    <span><i className="bx bxl-twitter" /></span>
                    <span><i className="bx bxl-linkedin" /></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-4">
              <div className="profilecard p-4">
                <div className="image d-flex flex-column justify-content-center align-items-center">
                  <button className="btn btn-secondary">
                    <img src="https://i.imgur.com/wvxPV9S.png" height={100} width={100} />
                  </button>
                  <span className="name mt-3">Name</span> <span className="idd" />
                  <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                    <span className="idd1">Mail</span>
                    <span><i className="fa fa-copy" /></span>
                  </div>
                  <div className="d-flex mt-2">
                    <a href="dprofile_detail.html"><button className="btn1">view profile </button></a>
                  </div>
                  <div className="text mt-3">
                    <span>Eleanor Pena is a creator of minimalistic x bold graphics and
                      digital artwork.<br /><br />
                    </span>
                  </div>
                  <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                    <span><i className="bx bxl-twitter" /></span>
                    <span><i className="bx bxl-linkedin" /></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-4">
              <div className="profilecard p-4">
                <div className="image d-flex flex-column justify-content-center align-items-center">
                  <button className="btn btn-secondary">
                    <img src="https://i.imgur.com/wvxPV9S.png" height={100} width={100} />
                  </button>
                  <span className="name mt-3">Name</span> <span className="idd" />
                  <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                    <span className="idd1">Mail</span>
                    <span><i className="fa fa-copy" /></span>
                  </div>
                  <div className="d-flex mt-2">
                    <a href="dprofile_detail.html"><button className="btn1">view profile </button></a>
                  </div>
                  <div className="text mt-3">
                    <span>Eleanor Pena is a creator of minimalistic x bold graphics and
                      digital artwork.<br /><br />
                    </span>
                  </div>
                  <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                    <span><i className="bx bxl-twitter" /></span>
                    <span><i className="bx bxl-linkedin" /></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 p-4">
              <div className="profilecard p-4">
                <div className="image d-flex flex-column justify-content-center align-items-center">
                  <button className="btn btn-secondary">
                    <img src="https://i.imgur.com/wvxPV9S.png" height={100} width={100} />
                  </button>
                  <span className="name mt-3">Name</span> <span className="idd" />
                  <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                    <span className="idd1">Mail</span>
                    <span><i className="fa fa-copy" /></span>
                  </div>
                  <div className="d-flex mt-2">
                    <a href="dprofile_detail.html"><button className="btn1">view profile </button></a>
                  </div>
                  <div className="text mt-3">
                    <span>Eleanor Pena is a creator of minimalistic x bold graphics and
                      digital artwork.<br /><br />
                    </span>
                  </div>
                  <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                    <span><i className="bx bxl-twitter" /></span>
                    <span><i className="bx bxl-linkedin" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></section>
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
export default Display_profile; 
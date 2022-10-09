import { Link } from 'react-router-dom'
import React from 'react'

const Task_assign=() => {
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
          {/* ============== task assign between mentor and Research scholar =============== */}
          <section className="vh-100" style={{backgroundColor: '#eee'}}>
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-9 col-xl-7">
                  <div className="card rounded-3">
                    <div className="card-body p-4">
                      <h4 className="text-center my-3 pb-3">Task Assign</h4>
                      <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                        <div className="col-12">
                          <div className="form-outline">
                            <input type="text" id="form1" className="form-control" />
                            <label className="form-label" htmlFor="form1">Search task</label>
                          </div>
                        </div>
                        {/* <div class="col-12">
                  <button type="submit" class="btn btn-primary">Save</button>
                </div> */}
                        <div className="col-12">
                          <button type="submit" className="btn btn-warning">Search Task</button>
                        </div>
                      </form>
                      <table className="table mb-4">
                        <thead>
                          <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Task</th>
                            <th scope="col">Status</th>
                            <th scope="col">Submit</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Task 1</td>
                            <td>In progress</td>
                            <td>
                              <Link to="/Report"> 
                              <button type="submit" className="btn btn-warning" >View</button>
                              </Link> 
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Task 2</td>
                            <td>In progress</td>
                            <td>
                            <Link to="/Report"> 
                              <button type="submit" className="btn btn-warning" >View</button>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Task 3</td>
                            <td>In progress</td>
                            <td>
                            <Link to="/Report"> 
                              <button type="submit" className="btn btn-warning" >View</button>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* <div class="container">

                            <div class="row d-flex justify-content-center mt-5 ">

                                <div class="col-md-8">


                                    <div class="card">

                                        <div class="d-flex justify-content-between align-items-center">

                                            <span class="font-weight-bold">Weekly Tasks</span>

                                            <div class="d-flex flex-row">

                                                <button class="btn btn-primary mr-2 active">Active</button>
                                                <button class="btn btn-primary new"><i class="fa fa-plus"></i>
                                                    New</button>

                                            </div>

                                        </div>

                                        <div class="mt-3 inputs">
                                            <i class="fa fa-search"></i>
                                            <input type="text" class="form-control " placeholder="Search Tasks...">

                                        </div>


                                        <div class="mt-3">

                                            <div class="d-flex justify-content-between align-items-center">

                                                <div class="d-flex flex-row align-items-center">

                                                    <span class="star"><i class="fa fa-star yellow"></i></span>

                                                    <div class="d-flex flex-column">
                                                        <span>Marketing</span>
                                                        <div class="d-flex flex-row align-items-center time-text">
                                                            <small>Marketing</small>
                                                            <span class="dots"></span>
                                                            <small>viewed Just now</small>
                                                            <span class="dots"></span>
                                                            <small>Edited 15 minutes ago</small>


                                                        </div>

                                                    </div>


                                                </div>

                                                <span class="content-text-1">BA</span>

                                            </div>

                                        </div>




                                        <div class="mt-3">

                                            <div class="d-flex justify-content-between align-items-center">

                                                <div class="d-flex flex-row align-items-center">

                                                    <span class="star"><i class="fa fa-square blue"></i></span>

                                                    <div class="d-flex flex-column">
                                                        <span>Developing</span>
                                                        <div class="d-flex flex-row align-items-center time-text">
                                                            <small>Developing</small>
                                                            <span class="dots"></span>
                                                            <small>viewed Just now</small>
                                                            <span class="dots"></span>
                                                            <small>Edited 25 minutes ago</small>


                                                        </div>

                                                    </div>


                                                </div>

                                                <span class="content-text-2">05</span>

                                            </div>

                                        </div>


                                        <div class="mt-3">

                                            <div class="d-flex justify-content-between align-items-center">

                                                <div class="d-flex flex-row align-items-center">

                                                    <span class="star"><i class="fa fa-moon-o dark-blue"></i></span>

                                                    <div class="d-flex flex-column">
                                                        <span>Developing</span>
                                                        <div class="d-flex flex-row align-items-center time-text">
                                                            <small>Developing</small>
                                                            <span class="dots"></span>
                                                            <small>viewed Just now</small>
                                                            <span class="dots"></span>
                                                            <small>Edited 25 minutes ago</small>


                                                        </div>

                                                    </div>


                                                </div>

                                                <span class="content-text-3">05</span>

                                            </div>

                                        </div>



                                        <div class="mt-3">

                                            <div class="d-flex justify-content-between align-items-center">

                                                <div class="d-flex flex-row align-items-center">

                                                    <span class="star"><i class="fa fa-star yellow"></i></span>

                                                    <div class="d-flex flex-column">
                                                        <span>Marketing</span>
                                                        <div class="d-flex flex-row align-items-center time-text">
                                                            <small>Marketing</small>
                                                            <span class="dots"></span>
                                                            <small>viewed Just now</small>
                                                            <span class="dots"></span>
                                                            <small>Edited 15 minutes ago</small>


                                                        </div>

                                                    </div>


                                                </div>

                                                <span class="content-text-1">BA</span>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div> 

                        </div>*/}
                </div>
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
          {/* End Footer */}
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
        </main></div>
  )
}

export default Task_assign;
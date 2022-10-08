import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home_Page.css";
import Springer_JC from "../component/Springer_JC";
import Eric_JC from "../component/Eric_JC";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faClose } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [search, setSearch] = useState("");
  const [springerJournals, setSpringerJournals] = useState([]);
  const [ericJournals, setEricJournals] = useState([]);
  const [query, setQuery] = useState("");

  // common functions
  useEffect(() => {
    geturl();
  }, [query]);
  
  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  const APP_ID = "4cda16a8d96a74bed2bbd565aae6abec";
  const geturl = async () => {
    const springerresponse = await fetch(
      `https://api.springernature.com/metadata/json?q=name:${query}&api_key=${APP_ID}`
    );
    const ericresponse = await fetch(
      `https://api.ies.ed.gov/eric/?search=${query}&format=json&start=10&rows=10`
    );
    const data1 = await springerresponse.json();
    const data2 = await ericresponse.json();
    setSpringerJournals(data1.records);
    setEricJournals(data2.response.docs);
    // console.log(data1.records);
    // console.log(data2.response.docs);
  };
  const searchClose = async () =>{
    const springerresponse = await fetch(
      `https://api.springernature.com/metadata/json?q=name:""&api_key=${APP_ID}`
    );
    const ericresponse = await fetch(
      `https://api.ies.ed.gov/eric/?search=""&format=json&start=10&rows=10`
    );
    const data1 = await springerresponse.json();
    const data2 = await ericresponse.json();
    setSpringerJournals(data1.records);
    setEricJournals(data2.response.docs);
    // console.log(data1.records);
    // console.log(data2.response.docs);
  }
  return (
    <div>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <h4 className="logo">
            <a href="index.html">Research Portal</a>
          </h4>
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
              <li className="dropdown">
                <a href="#">
                  <span>other</span> <i className="bi bi-chevron-down" />
                </a>
                <ul>
                  <li className="dropdown">
                    <a href="#">
                      <span>Publication</span>{" "}
                      <i className="bi bi-chevron-right" />
                    </a>
                    <ul>
                      <li>
                        <a href="https://www.scimagojr.com/journalrank.php">
                          SRJ Ranking
                        </a>
                      </li>
                      <li>
                        <a href="https://publication-recommender.ieee.org/home">
                          IEEE Journal Recommendation
                        </a>
                      </li>
                      <li>
                        <a href="https://journals.ieeeauthorcenter.ieee.org/create-your-ieee-journal-article/authoring-tools-and-templates/tools-for-ieee-authors/find-a-journal/">
                          IEEE Author Center
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Resources</span>{" "}
                      <i className="bi bi-chevron-right" />
                    </a>
                    <ul>
                      <li>
                        <a href="#">Policy</a>
                      </li>
                      <li>
                        <a href="#">Funds</a>
                      </li>
                      <li>
                        <a href="#">Formats</a>
                      </li>
                    </ul>
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
        </div>
      </header>
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
                style={{ backgroundImage: "url(assets/img/slide/slide-1.jpg)" }}
              >
                <div className="carousel-container">
                  <div className="carousel-content">
                    <h2>Search</h2>
                    <form onSubmit={getSearch}>
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
                    </form>
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
                style={{ backgroundImage: "url(assets/img/slide/slide-2.jpg)" }}
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
      <main id="main">
        <section className="home_journal">
          <div>
          {ericJournals.map((journal) => (
            <Eric_JC
              key={journal.id}
              title={journal.title}
              author={journal.author}
              publicationyear={journal.publicationdateyear}
              description={journal.description}
            />
          ))}
          </div>
          <div>
          {springerJournals.map((journal) => (
            <Springer_JC
              key={journal.title}
              title={journal.title}
              publisher={journal.publisher}
              abstract={journal.abstract}
            />
          ))}
          </div>
        </section>
        {/* <section id="counts" className="counts">
          <div className="container">
            <br />
            <br />
            <h2>Counter</h2>
            <div className="row no-gutters">
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-emoji-smile" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={232}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>
                    <strong>Visitors</strong> consequuntur quae
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-journal-richtext" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={21}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>
                    <strong>Projects</strong> adipisci atque cum quia aut
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-headset" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={30}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>
                    <strong>Feedback</strong> aut commodi quaerat
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="bi bi-people" />
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={15}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>
                    <strong>Member</strong> rerum asperiores dolor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section id="faq" className="faq section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Popular Papers</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>
            <div className="faq-list">
              <ul>
                <li data-aos="fade-up">
                  <i className="bx bx-help-circle icon-help" />{" "}
                  <a
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#faq-list-1"
                  >
                    Non consectetur a erat nam at lectus urna duis?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-1"
                    className="collapse show"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna
                      id volutpat lacus laoreet non curabitur gravida. Venenatis
                      lectus magna fringilla urna porttitor rhoncus dolor purus
                      non.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={100}>
                  <i className="bx bx-help-circle icon-help" />{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-2"
                    className="collapsed"
                  >
                    Feugiat scelerisque varius morbi enim nunc?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-2"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={200}>
                  <i className="bx bx-help-circle icon-help" />{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-3"
                    className="collapsed"
                  >
                    Dolor sit amet consectetur adipiscing elit?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-3"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                      sagittis orci. Faucibus pulvinar elementum integer enim.
                      Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
                      tellus pellentesque eu tincidunt. Lectus urna duis
                      convallis convallis tellus. Urna molestie at elementum eu
                      facilisis sed odio morbi quis
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={300}>
                  <i className="bx bx-help-circle icon-help" />{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-4"
                    className="collapsed"
                  >
                    Tempus quam pellentesque nec nam aliquam sem et tortor
                    consequat? <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-4"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Molestie a iaculis at erat pellentesque adipiscing
                      commodo. Dignissim suspendisse in est ante in. Nunc vel
                      risus commodo viverra maecenas accumsan. Sit amet nisl
                      suscipit adipiscing bibendum est. Purus gravida quis
                      blandit turpis cursus in.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={400}>
                  <i className="bx bx-help-circle icon-help" />{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-5"
                    className="collapsed"
                  >
                    Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                    turpis nunc eget lorem dolor?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="faq-list-5"
                    className="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Laoreet sit amet cursus sit amet dictum sit amet justo.
                      Mauris vitae ultricies leo integer malesuada nunc vel.
                      Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                      eget lorem dolor sed. Ut venenatis tellus in metus
                      vulputate eu scelerisque.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
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
  );
};

export default Home;

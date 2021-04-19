import React from 'react';
import './App.css';
// import memeber1 from "./assets/img";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">Start Autobin</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#tech">Technology</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#team">Team</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>

  
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Welcome To Autobin!</div>
        <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="https://github.com/JnkDog/autobin">source code</a>
      </div>
    </div>
  </header>

  
  <section className="page-section" id="tech">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Technologies</h2>
          <h3 className="section-subheading text-muted">IOT concept</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-code fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="tech-heading">Code</h4>
          <p className="text-muted">C++ was used for the image processing part, and Node.js was used for the web part</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="tech-heading">Design</h4>
          <p className="text-muted">Good structure, free to replace any part</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa fa-cog fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="tech-heading">Shell</h4>
          <p className="text-muted">Provide shell scripts for easy running</p>
        </div>
      </div>
    </div>
  </section>

  
  {/* <Portfolio portfolioLinks={portfolioLinks}></Portfolio> */}

  
  <section className="page-section" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">The birth and development of autobin</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="about/1.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Jan 21, 2021</h4>
                  <h4 className="subheading">The project start</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">After brainstorming, the group members decided on a project in realtime programming, and that was autobin!</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/2.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Feb 15, 2021</h4>
                  <h4 className="subheading">Web APP</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">After a week of coding, the react-based web app development is complete~</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Feb 20, 2021</h4>
                  <h4 className="subheading">Service</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">The node-based backend service is developed and connected to the mongodb cloud server.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/4.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2021</h4>
                  <h4 className="subheading">The Darkest Hour</h4>
                </div>
                <div className="timeline-body">The team members were not familiar with c++ and due to remote collaboration. The development progress was very unsatisfactory, and the architecture of the software was modified several times. But in the end, we managed to finish the image recognition part and the part of opening the trash can.
                  <p className="text-muted"></p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="img/about/3.jpg" alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>April 2021</h4>
                  <h4 className="subheading">Autobin v1.o release</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">After several bug fixes and tests, autobin v1.0 released!</p>
                </div>
              </div>
            </li>  
          </ul>
        </div>
      </div>
    </div>
  </section>

  
  <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted">0 Error 0 warning</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="team/1.jpg" alt=""/>
            <h4>Kuihong Chen</h4>
            <p className="text-muted">Software Design</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="https://github.com/JnkDog">
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="team/zhou.jpg" alt=""/>
            <h4>Yuyang Zhou</h4>
            <p className="text-muted">Hardware Design</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="https://github.com/Yuyangovo">
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src="team/wang.jpg" alt=""/>
            <h4>Pengchong Wang</h4>
            <p className="text-muted">Media Design</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="https://github.com/Pengcho">
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <p className="large text-muted">rm -rf *</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/envato.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/designmodo.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/themeforest.jpg" alt=""/>
          </a>
        </div>
        <div className="col-md-3 col-sm-6">
          <a href="#something">
            <img className="img-fluid d-block mx-auto" src="img/logos/creative-market.jpg" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </section>
  
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Autobin 2021</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-youtube-play"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;

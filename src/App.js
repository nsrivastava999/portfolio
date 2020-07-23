import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import logo_nihar from './img/logo_nihar.png';
import bitmoji from './img/bitmoji.jpg';
import nihr from './img/nihr.JPG';
import Particles from 'react-particles-js';
import about_image from './img/about.jpg';
import home_bg from './img/home_bg.jpg';

function App() {
  return (
    <BrowserRouter>
      <div id="loader"> </div>
      <div className="App">
        <div className="home-section" id="home">
          <nav>
            <div className="nav-wrapper">
              <a href="#home" className="brand-logo right-on-med-and-down">
                <img src={logo_nihar} className="logo-nihar"></img>
              </a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li><a href="#about">About</a></li>
                <li><a href="#exp">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="https://github.com/nsrivastava999?tab=repositories" target="_blank">Projects</a></li>
              </ul>
            </div>
          </nav>

          <ul className="sidenav" id="mobile-demo">
            <li><a href="#about">About</a></li><hr />
            <li><a href="#exp">Experience</a></li><hr />
            <li><a href="#contact">Contact</a></li><hr />
            <li><a href="https://github.com/nsrivastava999?tab=repositories"target="_blank">Projects</a></li>
          </ul>
          <div className="row">
            <div className="col s12 m6 home-img" data-aos="flip-left" data-aos-delay="200" data-aos-duration="1500">
              <img src={nihr} className="nihr"></img>
            </div>
            <div className="col s12 m6 home-text" data-aos="flip-right" data-aos-delay="200" data-aos-duration="1500">
              <h3 >Hello! 👋</h3><hr />
              <h1>I am Nihar<br />Srivastava</h1>
              <h5>Full Stack Developer | ML Enthusiast</h5>

            </div>
          </div>
        </div>

        <div className="about-section" id="about">
          <div className="row">
            <div className="col s12 m6 about-text ">
              <div className="card teal z-depth-2 about-card darken-3" data-aos="zoom-in-right" data-aos-delay="200" data-aos-duration="1000">
                <div class="card-content white-text">
                  <span class="card-title">ABOUT ME</span>
                  <p className="about-card-item">I am an Information Technology Engineer and have interest in
                    field of Web Development and Data Science. I also have
                    some industrial work experience in Web Development. I like
                    competitive programming and have a keen interest in Sports
                  and Music world as well. <br /> Skills - <br /></p>
                  <ul className="collection teal">
                    <li className="collection-item teal darken-4" data-aos="faded-right" data-aos-delay="1000" data-aos-duration="1000" data-aos-offset="10">Frontend Development <i class="material-icons secondary-content">desktop_windows</i></li>
                    <li className="collection-item teal darken-4" data-aos="faded-right" data-aos-delay="1000" data-aos-duration="1000" data-aos-offset="10">Backend Development <i class="material-icons secondary-content">code</i></li>
                    <li className="collection-item teal darken-4" data-aos="faded-right" data-aos-delay="1000" data-aos-duration="1000" data-aos-offset="10">Data Science <i class="material-icons secondary-content">insert_chart</i></li>
                    <li className="collection-item teal darken-4" data-aos="faded-right" data-aos-delay="1000" data-aos-duration="1000" data-aos-offset="10">SQL & NonSQL Databases <i class="material-icons secondary-content">description</i></li>
                    <li className="collection-item teal darken-4" data-aos="faded-right" data-aos-delay="1000" data-aos-duration="1000" data-aos-offset="10">Team Work <i class="material-icons secondary-content">people</i></li>
                    <li className="collection-item teal darken-4" data-aos="faded-right" data-aos-delay="1000" data-aos-duration="1000" data-aos-offset="10">Communication Skills <i class="material-icons secondary-content">comment</i></li>
                  </ul>
                </div>
                {/* <div class="card-action">
                  <a href="https://drive.google.com/file/d/1wOcIEVEInsedFZ7-wF6xlzPR6-2onFS1/view" target="_blank" class="waves-effect waves-light btn teal darken-4 z-depth-2">Get my Resume!</a>
                </div> */}
              </div>
            </div>
            <div className="col s12 m6 about-img">
              {/* <div className="card about-image-card">
                <div className="card-image">
                  <img src={about_image} />
                  <span class="card-title">Card Title</span>
                </div>
              </div> */}
              <div className="card teal z-depth-2 about-card darken-3" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1000">
                <div class="card-content white-text">
                  <span class="card-title">ACADEMICS</span>
                  <ul class="collection">
                    <li class="collection-item avatar teal darken-4" data-aos="faded-right" data-aos-delay="1000" data-aos-duration="1000" data-aos-offset="10">
                      <i class="material-icons circle teal">domain</i>
                      <span class="title">B.Tech - Information Technology</span>
                      <p>Vellore Institute of Technology, Vellore(T.N.) <br />
                        2018-2022(expected)<br />
                        8.95 CGPA
                        </p>
                    </li>
                    <li class="collection-item avatar teal darken-4" data-aos="faded-right" data-aos-delay="1000" data-aos-duration="1000" data-aos-offset="10">
                      <i class="material-icons circle teal">school</i>
                      <span class="title">AISSCE XII Std.</span>
                      <p>Gondia Public School, Gondia(M.H.) <br />
                        2017<br />
                        93.2%
                      </p>
                    </li>
                    <li class="collection-item avatar teal darken-4" data-aos="faded-right" data-aos-delay="1000" data-aos-duration="1000" data-aos-offset="10">
                      <i class="material-icons circle teal">school</i>
                      <span class="title">AISSE X Std.</span>
                      <p> Kendriya Vidyalaya, Dongargarh(C.G.)<br />
                        2015<br />
                        10 CGPA
                      </p>
                    </li>
                  </ul>
                </div>
                <div class="card-action center">
                  <a href="https://drive.google.com/file/d/1wOcIEVEInsedFZ7-wF6xlzPR6-2onFS1/view" target="_blank" class="waves-effect waves-light btn teal darken-4 z-depth-2 pulse">Get my Resume!</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="exp-section" id="exp">
          <div className="row exp-header-row">
            <div className="col s12">
              <h3 className="white-text center exp-header">EXPERIENCES</h3>
            </div>
          </div>
          <div className="row exp-content-row">
            <div className="col s6 m3 odd-card">
              <div class="card teal darken-2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div class="card-content white-text card-content-exp">
                  <span class="card-title card-title-exp">FindMind Analytics Pvt. Ltd.</span>
                  <div className="exp-card-sub-heading">Web Developer / Feb 2020 - Jun 2020</div>
                  <p>Solved problems and website issues for LegalMind website uncovered by testing and customer feedback.</p>
                </div>
                <div class="card-action center card-action-exp">
                  <a href="https://drive.google.com/file/d/1irH85OUIA8XULLprXQ8i7rxCXydL1raC/view?usp=sharing" target="_blank" className="waves-effect waves-light btn teal darken-4 z-depth-2 ">Certificate</a>
                </div>
              </div>
            </div>
            <div className="col s6 m3 even-card">
              <div class="card teal darken-2" data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
                <div class="card-content white-text card-content-exp">
                  <span class="card-title card-title-exp">Anemoi Technologies</span>
                  <div className="exp-card-sub-heading">Frontend Developer / Aug 2019 - Oct 2019  </div>
                  <p>Designed the Frontend for Anemoi GCS (Ground Control Station) for End to End Drone Delivery System.</p>
                </div>
                <div class="card-action center card-action-exp">
                  <a href="https://drive.google.com/file/d/1-6f8DbA5AtvgmsF0LPsSDuXROxKt8jup/view?usp=sharing" target="_blank" className="waves-effect waves-light btn teal darken-4 z-depth-3 ">Certificate</a>
                </div>
              </div>
            </div>
            <div className="col s6 m3 odd-card">
              <div class="card teal darken-2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div class="card-content white-text card-content-exp">
                  <span class="card-title card-title-exp">Technology & Gaming(TAG) Club</span>
                  <div className="exp-card-sub-heading">Tech Manager / May 2020 - Present</div>
                  <p>Handle several Tech related matters of the club and also guide the juniors to learn and grow in their domain of interest.</p>
                </div>
                <div class="card-action center card-action-exp">
                  <a href="https://github.com/Technology-And-Gaming-Club" className="waves-effect waves-light btn teal darken-4 z-depth-3 " target="_blank">Projects</a>
                </div>
              </div>
            </div>
            <div className="col s6 m3  even-card">
              <div class="card teal darken-2" data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
                <div class="card-content white-text card-content-exp">
                  <span class="card-title card-title-exp">Technology & Gaming(TAG) Club</span>
                  <div className="exp-card-sub-heading">Core Member / Dec 2020 - May 2020</div>
                  <p>Helped in successful Organizing several events of the club during the period and learned new things in technical domain.</p>
                </div>
                <div class="card-action center card-action-exp">
                  <a href="https://github.com/Technology-And-Gaming-Club" className="waves-effect waves-light btn teal darken-4 z-depth-3 " target="_blank">Projects</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="page-footer teal darken-3 contact-section" id="contact">
        <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Contact Me</h5>
                <ul className="collection teal">
                    <li className="collection-item teal darken-4" data-aos="faded-right" data-aos-delay="500" data-aos-duration="1000" data-aos-offset="10">nsrivastava999@gmail.com<i class="material-icons secondary-content">email</i></li>
                    <li className="collection-item teal darken-4" data-aos="faded-right" data-aos-delay="500" data-aos-duration="1000" data-aos-offset="10">+91 8999326776 <i class="material-icons secondary-content">local_phone</i></li>
                    <li className="collection-item teal darken-4" data-aos="faded-right" data-aos-delay="500" data-aos-duration="1000" data-aos-offset="10">Vellore (TN)<i class="material-icons secondary-content">location_on</i></li>
                  </ul>              
                  </div>
              <div class="col l4 offset-l2 s12 connect-links">
                <h5 class="white-text">Connect with me on - </h5>
                <a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/nsrivastava999/" target="_blank" data-aos="fade-up"><i className="fa fa-linkedin fa-2x"></i></a>
                <a class="grey-text text-lighten-3" href="https://github.com/nsrivastava999" target="_blank" data-aos="fade-up"><i className="fa fa-github fa-2x"></i></a>
                <a class="grey-text text-lighten-3" href="https://www.instagram.com/ns9.exe/" target="_blank" data-aos="fade-up"><i className="fa fa-instagram fa-2x"></i></a>
                <a class="grey-text text-lighten-3" href="https://twitter.com/NiharSrivastava" target="_blank" data-aos="fade-up"><i className="fa fa-twitter fa-2x"></i></a>
                <a class="grey-text text-lighten-3" href="https://www.facebook.com/nihar.srivastava.9" target="_blank" data-aos="fade-up"> <i className="fa fa-facebook fa-2x"></i></a>          
              </div>
            </div>
          </div>
          <div className="footer-copyright teal darken-4">
            <div className="container">
              © 2020 Copyright 
            <span className="grey-text text-lighten-4 right">Made with ❤ by <a className="blue-text" href="https://github.com/nsrivastava999">me!</a></span>
            </div>
          </div>
        </footer>

      </div>

    </BrowserRouter >
  );
}

export default App;

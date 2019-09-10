import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

// import ../../assets/scss/custom.scss'

import BackgroundSlideshow from 'react-background-slideshow'
import SlideShow from '../components/SlideShow'
// import WordFlip from '../components/WordFlip'
import ReactWodry from 'react-wodry'

import bg1Img from '../assets/img/bg/bg1.jpg'
import bg2Img from '../assets/img/bg/bg2.jpg'
import bg3Img from '../assets/img/bg/bg3.jpg'
import bg4Img from '../assets/img/bg/bg4.jpg'
import bg5Img from '../assets/img/bg/bg5.jpg'


import devicesResponsiveImg from '../assets/img/devices_responsive.jpg'
import logo1Img from '../assets/img/logo/logo1.jpg'
import logo2Img from '../assets/img/logo/logo2.jpg'
import logo3Img from '../assets/img/logo/logo3.jpg'
import logo4Img from '../assets/img/logo/logo4.jpg'
import logo5Img from '../assets/img/logo/logo5.jpg'
import logo6Img from '../assets/img/logo/logo6.jpg'
import logo7Img from '../assets/img/logo/logo7.jpg'
import logo8Img from '../assets/img/logo/logo8.jpg'
import team1Img from '../assets/img/team/team1.jpg'
import team2Img from '../assets/img/team/team2.jpg'
import team3Img from '../assets/img/team/team3.jpg'
import team4Img from '../assets/img/team/team4.jpg'
import portfolio1Img from '../assets/img/portfolio/portfolio1.jpg'
import portfolio2Img from '../assets/img/portfolio/portfolio2.jpg'
import portfolio4Img from '../assets/img/portfolio/portfolio4.jpg'
import portfolio6Img from '../assets/img/portfolio/portfolio6.jpg'
import portfolio7Img from '../assets/img/portfolio/portfolio7.jpg'
import portfolio8Img from '../assets/img/portfolio/portfolio8.jpg'
import portfolio9Img from '../assets/img/portfolio/portfolio9.jpg'
import portfolio10Img from '../assets/img/portfolio/portfolio10.jpg'
import portfolio11Img from '../assets/img/portfolio/portfolio11.jpg'
import blog1Img from '../assets/img/blog/blog1.jpg'
import blog2Img from '../assets/img/blog/blog2.jpg'
import blog3Img from '../assets/img/blog/blog3.jpg'
import blog4Img from '../assets/img/blog/blog4.jpg'
import blog5Img from '../assets/img/blog/blog5.jpg'
import blog6Img from '../assets/img/blog/blog6.jpg'
import blog7Img from '../assets/img/blog/blog7.jpg'
import blog8Img from '../assets/img/blog/blog8.jpg'
import blog9Img from '../assets/img/blog/blog9.jpg'
import widget1Img from '../assets/img/widget/widget1.jpg'
import widget2Img from '../assets/img/widget/widget2.jpg'
import widget3Img from '../assets/img/widget/widget3.jpg'





const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />



      {/* Header */}
      <header 
        id="headerwrap" className="fullheight" 
        style={{
          position: `relative`,
          zIndex: `0`,
          background: `none`
        }}
      >
          <div className="container" 
            style={{
              position: `absolute`,
              zIndex: `1`,
              // background: `none`
            }}
            >
              <div className="intro-text">
                  <div className="intro-lead-in wow bounceInDown" data-wow-delay="0.5s">
                    We Can Help You
                    {` `}
                    <ReactWodry 
                      content={["Create", "Design", "Profit"]}
                      animation={'rotateY'}
                      delay={2000}
                      animationDuration={500}
                    />
                  </div>
                  <div className="intro-heading wow bounceInUp" data-wow-delay="1s">SMASHCO <span className="thin">N.Y.C.</span></div>
                  <a href="#about-us" className="page-scroll btn btn-xl btn-negative  wow bounceInDown" data-wow-delay="2s">Tell Me More <i className="fa fa-angle-down fa-2x"></i></a>
              </div>
          </div>
          <div className="backstretch" style={{
            // left: `0px`, 
            // top: `0px`,
            // overflow: `hidden`,
            // margin: `0px`,
            // padding: `0px`,
            // zIndex: `-999998`,
            // position: `absolute`,
            // width: `320px`,
            // height: `455px`


            // position: `absolute`,
            // height: `100vh`,
            // left: `0`,
            // right: `0`,
            // top: `0`,
            // zIndex: `-999998`,


          }}>
            <SlideShow />
            {/*<BackgroundSlideshow images={[ bg1Img, bg2Img, bg3Img, bg4Img, bg5Img ]} />*/}
          </div>
      </header>

      {/* About Section */}
      <section id="about-us">
          <div className="section-inner">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center wow fadeInDown">
                          <h2 className="section-heading"><strong>About</strong> Us</h2>
                          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                      </div>
                  </div>
                  <div className="row gap">
                      <div className="col-md-4 wow fadeInLeft">
                          <img src={devicesResponsiveImg} className="img-responsive" alt=""/>
                      </div>
                      <div className="col-md-8 wow fadeInRight">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                      </div>
                  </div>
                  <div className="row">
                      <ul className="owl-carousel wow fadeInUp list-unstyled" data-items="4" data-items-tablet="[768,4]"  data-items-mobile="[479,2]">
                          <li>
                              <img src={logo1Img} className="img-responsive"  alt="" />
                          </li>
                          <li>
                              <img src={logo2Img} className="img-responsive"  alt="" />
                          </li>
                          <li>
                              <img src={logo3Img} className="img-responsive"  alt="" />
                          </li>
                          <li>
                              <img src={logo4Img} className="img-responsive"  alt="" />
                          </li>
                          <li>
                              <img src={logo5Img} className="img-responsive"  alt="" />
                          </li>
                          <li>
                              <img src={logo6Img} className="img-responsive"  alt="" />
                          </li>
                          <li>
                              <img src={logo7Img} className="img-responsive"  alt="" />
                          </li>
                          <li>
                              <img src={logo8Img} className="img-responsive"  alt="" />
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* Team Section */}
      <section id="team" className="divider-wrapper opaqued" data-parallax="scroll" data-image-src="assets/img/bg/bg2.jpg" data-speed="0.7">
          <div className="section-inner">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center wow fadeInDown">
                          <h2 className="section-heading"><strong>Amazing</strong> Team</h2>
                          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                      </div>
                  </div>
                  <div className="row wow fadeInUp">
                      <div className="col-md-3">
                          <div className="team-member">
                              <div className="team-card">
                                  <img src={team1Img} className="img-responsive" alt=""/>
                                  <ul className="list-inline social-buttons">
                                      <li><button className="twitter" href="#"><i className="fa fa-twitter"></i></button>
                                      </li>
                                      <li><button className="facebook" href="#"><i className="fa fa-facebook"></i></button>
                                      </li>
                                      <li><button className="google" href="#"><i className="fa fa-google-plus"></i></button>
                                      </li>
                                      <li><button className="linkedin" href="#"><i className="fa fa-linkedin"></i></button>
                                      </li>
                                  </ul>
                              </div>
                              <h4>Kirk Johnson</h4>
                              <p className="text-muted">CEO</p>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="team-member">
                              <div className="team-card">
                                  <img src={team2Img} className="img-responsive" alt=""/>
                                  <ul className="list-inline social-buttons">
                                      <li><button className="twitter" href="#"><i className="fa fa-twitter"></i></button>
                                      </li>
                                      <li><button className="facebook" href="#"><i className="fa fa-facebook"></i></button>
                                      </li>
                                      <li><button className="google" href="#"><i className="fa fa-google-plus"></i></button>
                                      </li>
                                      <li><button className="linkedin" href="#"><i className="fa fa-linkedin"></i></button>
                                      </li>
                                  </ul>
                              </div>
                              <h4>Craig Roberts</h4>
                              <p className="text-muted">Lead Marketing</p>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="team-member">
                              <div className="team-card">
                                  <img src={team3Img} className="img-responsive" alt=""/>
                                  <ul className="list-inline social-buttons">
                                      <li><button className="twitter" href="#"><i className="fa fa-twitter"></i></button>
                                      </li>
                                      <li><button className="facebook" href="#"><i className="fa fa-facebook"></i></button>
                                      </li>
                                      <li><button className="google" href="#"><i className="fa fa-google-plus"></i></button>
                                      </li>
                                      <li><button className="linkedin" href="#"><i className="fa fa-linkedin"></i></button>
                                      </li>
                                  </ul>
                              </div>
                              <h4>Lowri Jones</h4>
                              <p className="text-muted">Sales</p>
                          </div>
                      </div>
                      <div className="col-md-3">
                          <div className="team-member">
                              <div className="team-card">
                                  <img src={team4Img} className="img-responsive" alt=""/>
                                  <ul className="list-inline social-buttons">
                                      <li><button className="twitter" href="#"><i className="fa fa-twitter"></i></button>
                                      </li>
                                      <li><button className="facebook" href="#"><i className="fa fa-facebook"></i></button>
                                      </li>
                                      <li><button className="google" href="#"><i className="fa fa-google-plus"></i></button>
                                      </li>
                                      <li><button className="linkedin" href="#"><i className="fa fa-linkedin"></i></button>
                                      </li>
                                  </ul>
                              </div>
                              <h4>David Spencer</h4>
                              <p className="text-muted">Warehouse</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Services Section */}
      <section id="services">
          <div className="section-inner">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center wow fadeInDown">
                          <h2 className="section-heading"><strong>Our</strong> Services</h2>
                          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                      </div>
                  </div>
                  <div className="row wow fadeInUp">
                      <div className="col-md-4 service-item">
                          <div className="row">
                              <div className="col-md-2 col-sm-2 col-xs-2 service-icon">
                                  <i className="pe-7s-video fa-4x"></i>
                              </div>
                              <div className="col-md-10 col-sm-10 col-xs-10 pull-right">
                                  <h4 className="service-heading">Video Editing</h4>
                                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 service-item">
                          <div className="row">
                              <div className="col-md-2 col-sm-2 col-xs-2 service-icon">
                                  <i className="pe-7s-phone fa-4x"></i>
                              </div>
                              <div className="col-md-10 col-sm-10 col-xs-10 pull-right">
                                  <h4 className="service-heading">App Development</h4>
                                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4 service-item">
                          <div className="row">
                              <div className="col-md-2 col-sm-2 col-xs-2 service-icon">
                                  <i className="pe-7s-tools fa-4x"></i>
                              </div>
                              <div className="col-md-10 col-sm-10 col-xs-10 pull-right">
                                  <h4 className="service-heading">E-Commerce</h4>
                                  <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section id="stats" className="divider-wrapper opaqued" data-parallax="scroll" data-image-src="assets/img/bg/bg4.jpg" data-speed="0.7">
          <div className="section-inner">
              <div className="container">
                  <div className="row">
                      <div className="col-md-3 col-xs-12">
                          <div className="text-center">
                              <span className="stat-icon"><i className="pe-7s-timer fa-4x"></i></span>                          
                              <h2><span className="countup">10248</span></h2>
                              <h6>Hours Saved</h6>
                          </div>
                      </div>
                      <div className="col-md-3 col-xs-12">
                          <div className="text-center">
                              <span className="stat-icon"><i className="pe-7s-cloud-upload fa-4x"></i></span>                          
                              <h2><span className="countup">2035945</span></h2>
                              <h6>Files Uploaded</h6>
                          </div>
                      </div>
                      <div className="col-md-3 col-xs-12">
                          <div className="text-center">
                              <span className="stat-icon"><i className="pe-7s-tools fa-4x"></i></span>                          
                              <h2><span className="countup">24</span></h2>
                              <h6>Hours Of Support</h6>
                          </div>
                      </div>
                      <div className="col-md-3 col-xs-12">
                          <div className="text-center">
                              <span className="stat-icon"><i className="pe-7s-like fa-4x"></i></span>                          
                              <h2><span className="countup">99999999</span></h2>
                              <h6>Social Shares</h6>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>    

      <section id="filterable-portfolio">
          <div className="section-inner">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center wow fadeInDown">
                          <h2 className="section-heading"><strong>Filter</strong> Portfolio</h2>
                          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                      </div>
                  </div>
                  <div className="row wow fadeInUp">
                       <ul className="portfolio-filter gap text-center list-inline wow fadeInDown">
                          <li><button className="btn btn-outlined btn-primary active" href="#" data-filter="*">All</button></li>
                          <li><button className="btn btn-outlined btn-primary" href="#" data-filter=".apps">Apps</button></li>
                          <li><button className="btn btn-outlined btn-primary" href="#" data-filter=".design">Design</button></li>
                          <li><button className="btn btn-outlined btn-primary" href="#" data-filter=".photography">Photography</button></li>
                          <li><button className="btn btn-outlined btn-primary" href="#" data-filter=".video">Video</button></li>
                      </ul>{/*/#portfolio-filter*/}

                      <ul className="portfolio-items col-3 isotope direction-aware">
                          <li className="col-md-4 portfolio-item da-item apps isotope-item">
                              <a className="lb-link" href="assets/img/portfolio/portfolio1.jpg" title="View Image">
                                  <img src={portfolio1Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                                
                              </a>
                          </li>
                          <li className="col-md-4 portfolio-item da-item design isotope-item">
                              <a className="lb-link" href="assets/img/portfolio/portfolio2.jpg" title="View Image">
                                  <img src={portfolio2Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                                
                              </a>
                          </li>
                          <li className="col-md-4 portfolio-item da-item photography isotope-item">
                              <a className="lb-link" href="assets/img/portfolio/portfolio3.jpg" title="View Image">
                                  <img src={portfolio4Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                                
                              </a>
                          </li>
                          <li className="col-md-4 portfolio-item da-item video isotope-item">
                              <a className="lb-link" href="assets/img/portfolio/portfolio5.jpg" title="View Image">
                                  <img src={portfolio6Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                                
                              </a>
                          </li>
                          <li className="col-md-4 portfolio-item da-item design isotope-item">
                              <a className="lb-link" href="assets/img/portfolio/portfolio7.jpg" title="View Image">
                                  <img src={portfolio7Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                                
                              </a>
                          </li>
                          <li className="col-md-4 portfolio-item da-item photography isotope-item">
                              <a className="lb-link" href="assets/img/portfolio/portfolio8.jpg" title="View Image">
                                  <img src={portfolio8Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                                
                              </a>
                          </li>
                          <li className="col-md-4 portfolio-item da-item video isotope-item">
                              <a className="lb-link" href="assets/img/portfolio/portfolio9.jpg" title="View Image">
                                  <img src={portfolio9Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                                
                              </a>
                          </li>
                          <li className="col-md-4 portfolio-item da-item design isotope-item">
                              <a className="lb-link" href="assets/img/portfolio/portfolio10.jpg" title="View Image">
                                  <img src={portfolio10Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                                
                              </a>
                          </li>
                          <li className="col-md-4 portfolio-item da-item video isotope-item">
                              <a className="lb-link" href="assets/img/portfolio/portfolio11.jpg" title="View Image">
                                  <img src={portfolio11Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                                
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      <section id="statistics" className="divider-wrapper opaqued" data-parallax="scroll" data-image-src="assets/img/bg/bg5.jpg" data-speed="0.7">
          <div className="section-inner">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="row">
                               <div className="col-md-4">
                                  <div className="stat-circle" data-dimension="175" data-text="7.5" data-info="" data-width="30" data-fontsize="38" data-percent="75" data-fgcolor="#fff" data-bgcolor="transparent" data-fill="transparent" data-total="100" data-part="75" data-icon="long-arrow-up" data-icon-size="28" data-icon-color="#fff" data-animation-step="1"></div>
                              </div>
                              <div className="col-md-8">
                                  <h3><strong>HTML5</strong> Skill</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente.</p>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="row">
                              <div className="col-md-8">
                                  <h3><strong>Web</strong> Design</h3>
                                  <p>Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                              </div>
                              <div className="col-md-4">
                                  <div className="stat-circle" data-dimension="175" data-text="9.0" data-info="" data-width="30" data-fontsize="38" data-percent="90" data-fgcolor="#fff" data-bgcolor="transparent" data-fill="transparent" data-total="100" data-part="90" data-icon="long-arrow-up" data-icon-size="28" data-icon-color="#fff" data-animation-step="1"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>    

      <section>
          <div className="section-inner">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center wow fadeInDown">
                          <h2 className="section-heading"><strong>Latest</strong> Blogs</h2>
                          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                      </div>
                  </div>
                  <div className="row">
                      <ul className="direction-aware">
                          <li className="col-md-4 portfolio-item da-item wow fadeInUp" data-mh="blog-posts">
                              <button href="#" title="View Post">
                                  <img src={blog1Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                                
                              </button>
                              <div className="item-caption">
                                  <h4>Travelling The Globe</h4>
                                  <ul className="list-inline post-meta-list">
                                      <li><p className="text-muted"><i className="pe-7s-folder"></i> <button href="#" title="">Travel</button></p></li>
                                      <li><p className="text-muted"><i className="pe-7s-clock"></i> <button href="#" title="">10/12/2014</button></p></li>
                                      <li><p className="text-muted"><i className="pe-7s-user"></i> <button href="#" title="">Richard Blake</button></p></li>
                                  </ul> 
                                  <p className="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente</p>
                                  <a className="btn btn-primary mt20 pull-right" href="single-post.html">Read More</a>
                              </div>
                          </li>
                          <li className="col-md-4 portfolio-item da-item wow fadeInUp" data-mh="blog-posts">
                              <button href="#" title="View Image">
                                  <img src={blog2Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                                
                              </button>
                              <div className="item-caption">
                                  <h4>This Band Rock</h4>
                                  <ul className="list-inline post-meta-list">
                                      <li><p className="text-muted"><i className="pe-7s-folder"></i> Music</p></li>
                                      <li><p className="text-muted"><i className="pe-7s-clock"></i> <button href="#" title="">10/12/2014</button></p></li>
                                      <li><p className="text-muted"><i className="pe-7s-user"></i> <button href="#" title="">Richard Blake</button></p></li>
                                  </ul> 
                                  <p className="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente</p>
                                  <a className="btn btn-primary mt20 pull-right" href="single-post.html">Read More</a>
                              </div>
                          </li>
                          <li className="col-md-4 portfolio-item da-item wow fadeInUp" data-mh="blog-posts">
                              <button href="#" title="View Post">
                                  <img src={blog3Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                               
                              </button>
                              <div className="item-caption">
                                  <h4>Treasure Chest</h4>
                                  <ul className="list-inline post-meta-list">
                                      <li><p className="text-muted"><i className="pe-7s-folder"></i> News</p></li>
                                      <li><p className="text-muted"><i className="pe-7s-clock"></i> <button href="#" title="">10/12/2014</button></p></li>
                                      <li><p className="text-muted"><i className="pe-7s-user"></i> <button href="#" title="">Richard Blake</button></p></li>
                                  </ul> 
                                  <p className="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente</p>
                                  <a className="btn btn-primary mt20 pull-right" href="single-post.html">Read More</a>
                              </div>
                          </li>
                          <li className="col-md-4 portfolio-item da-item wow fadeInUp" data-mh="blog-posts">
                              <button href="#" title="View Post">
                                  <img src={blog4Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                              
                              </button>
                              <div className="item-caption">
                                  <h4>New York Night</h4>
                                  <ul className="list-inline post-meta-list">
                                      <li><p className="text-muted"><i className="pe-7s-folder"></i> News</p></li>
                                      <li><p className="text-muted"><i className="pe-7s-clock"></i> <button href="#" title="">10/12/2014</button></p></li>
                                      <li><p className="text-muted"><i className="pe-7s-user"></i> <button href="#" title="">Richard Blake</button></p></li>
                                  </ul> 
                                  <p className="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente</p>
                                  <a className="btn btn-primary mt20 pull-right" href="single-post.html">Read More</a>
                              </div>
                          </li>
                          <li className="col-md-4 portfolio-item da-item wow fadeInUp" data-mh="blog-posts">
                              <button href="#" title="View Post">
                                  <img src={blog5Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                               
                              </button>
                              <div className="item-caption">
                                  <h4>Hot Gossip</h4>
                                  <ul className="list-inline post-meta-list">
                                      <li><p className="text-muted"><i className="pe-7s-folder"></i> News</p></li>
                                      <li><p className="text-muted"><i className="pe-7s-clock"></i> <button href="#" title="">10/12/2014</button></p></li>
                                      <li><p className="text-muted"><i className="pe-7s-user"></i> <button href="#" title="">Richard Blake</button></p></li>
                                  </ul> 
                                  <p className="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente</p>
                                  <a className="btn btn-primary mt20 pull-right" href="single-post.html">Read More</a>
                              </div>
                          </li>
                          <li className="col-md-4 portfolio-item da-item wow fadeInUp" data-mh="blog-posts">
                              <button href="#" title="View Post">
                                  <img src={blog6Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                                
                              </button>
                              <div className="item-caption">
                                  <h4>Where Are They Now?</h4>
                                  <ul className="list-inline post-meta-list">
                                      <li><p className="text-muted"><i className="pe-7s-folder"></i> News</p></li>
                                      <li><p className="text-muted"><i className="pe-7s-clock"></i> <button href="#" title="">10/12/2014</button></p></li>
                                      <li><p className="text-muted"><i className="pe-7s-user"></i> <button href="#" title="">Richard Blake</button></p></li>
                                  </ul> 
                                  <p className="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente</p>
                                  <a className="btn btn-primary mt20 pull-right" href="single-post.html">Read More</a>
                              </div>
                          </li>
                      <li className="col-md-4 portfolio-item da-item wow fadeInUp" data-mh="blog-posts">
                              <button  href="#" title="View Post">
                                  <img src={blog7Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                                
                              </button>
                              <div className="item-caption">
                                  <h4>A Day Off</h4>
                                  <ul className="list-inline post-meta-list">
                                      <li><p className="text-muted"><i className="pe-7s-folder"></i> News</p></li>
                                      <li><p className="text-muted"><i className="pe-7s-clock"></i> <button href="#" title="">10/12/2014</button></p></li>
                                      <li><p className="text-muted"><i className="pe-7s-user"></i> <button href="#" title="">Richard Blake</button></p></li>
                                  </ul> 
                                  <p className="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente</p>
                                  <a className="btn btn-primary mt20 pull-right" href="single-post.html">Read More</a>
                              </div>
                          </li>
                         <li className="col-md-4 portfolio-item da-item wow fadeInUp" data-mh="blog-posts">
                              <button href="#" title="View Post">
                                  <img src={blog8Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                               
                              </button>
                              <div className="item-caption">
                                  <h4>Annual Vacation Choices</h4>
                                  <ul className="list-inline post-meta-list">
                                      <li><p className="text-muted"><i className="pe-7s-folder"></i> News</p></li>
                                      <li><p className="text-muted"><i className="pe-7s-clock"></i> <button href="#" title="">10/12/2014</button></p></li>
                                      <li><p className="text-muted"><i className="pe-7s-user"></i> <button href="#" title="">Richard Blake</button></p></li>
                                  </ul> 
                                  <p className="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente</p>
                                  <a className="btn btn-primary mt20 pull-right" href="single-post.html">Read More</a>
                              </div>
                          </li>
                         <li className="col-md-4 portfolio-item da-item wow fadeInUp" data-mh="blog-posts">
                              <button href="#" title="View Post">
                                  <img src={blog9Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                               
                              </button>
                              <div className="item-caption">
                                  <h4>Dreams - What Do They Mean?</h4>
                                  <ul className="list-inline post-meta-list">
                                      <li><p className="text-muted"><i className="pe-7s-folder"></i> News</p></li>
                                      <li><p className="text-muted"><i className="pe-7s-clock"></i> <button href="#" title="">10/12/2014</button></p></li>
                                      <li><p className="text-muted"><i className="pe-7s-user"></i> <button href="#" title="">Richard Blake</button></p></li>
                                  </ul> 
                                  <p className="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente</p>   
                                  <a className="btn btn-primary mt20 pull-right" href="single-post.html">Read More</a>                     
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      <section id="testimonies" className="divider-wrapper opaqued" data-parallax="scroll" data-image-src="assets/img/bg/bg2.jpg" data-speed="0.7">
          <div className="section-inner">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center wow fadeInDown">
                          <h2 className="section-heading"><strong>Client</strong> Testimonies</h2>
                          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-xs-10 col-xs-offset-1">
                      <ul className="direction-aware owl-carousel wow fadeInUp" data-items="1" data-items-tablet="[768,1]"  data-items-mobile="[479,1]">
                          <li>
                              <div className="col-xs-2">
                                  <img src={team1Img} className="img-responsive" alt=""/>
                              </div>
                              <div className="col-xs-10 item-caption">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente</p>
                                  <span><strong>Edward Frankfurt</strong></span>
                              </div>
                          </li>
                          <li>
                              <div className="col-xs-2">
                                  <img src={team2Img} className="img-responsive" alt=""/>
                              </div>
                              <div className="col-xs-10 item-caption">
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente</p>
                                  <span><strong>Charles Davies</strong></span>
                              </div>
                          </li>
                      </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>    

      {/* News Section */}
      <section id="news-carousel-section">
          <div className="section-inner">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center wow fadeInDown">
                          <h2 className="section-heading"><strong>News</strong> Carousel</h2>
                          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                      </div>
                  </div>
                  <div className="row">
                      <ul className="direction-aware owl-carousel wow fadeInUp" data-items="3" data-items-tablet="[768,2]"  data-items-mobile="[479,1]">
                          <li className="portfolio-item da-item">
                              <button href="#" title="View Image">
                                  <img src={blog1Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                                
                              </button>
                              <div className="item-caption">
                                  <h4>Dreams - What Do They Mean?</h4>
                                  <ul className="list-inline post-meta-list">
                                      <li><p className="text-muted"><i className="pe-7s-folder"></i> News</p></li>
                                      <li><p className="text-muted"><i className="pe-7s-clock"></i> <button href="#" title="">10/12/2014</button></p></li>
                                      <li><p className="text-muted"><i className="pe-7s-user"></i> <button href="#" title="">Richard Blake</button></p></li>
                                  </ul> 
                                  <p className="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente</p>
                              </div>
                          </li>
                           <li className="portfolio-item da-item">
                              <button href="#" title="View Image">
                                  <img src={blog2Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                                
                              </button>
                              <div className="item-caption">
                                  <h4>Dreams - What Do They Mean?</h4>
                                  <ul className="list-inline post-meta-list">
                                      <li><p className="text-muted"><i className="pe-7s-folder"></i> News</p></li>
                                      <li><p className="text-muted"><i className="pe-7s-clock"></i> <button href="#" title="">10/12/2014</button></p></li>
                                      <li><p className="text-muted"><i className="pe-7s-user"></i> <button href="#" title="">Richard Blake</button></p></li>
                                  </ul> 
                                  <p className="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente</p>
                              </div>
                          </li>
                          <li className="portfolio-item da-item">
                              <button href="#" title="View Image">
                                  <img src={blog3Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                                
                              </button>
                              <div className="item-caption">
                                  <h4>Dreams - What Do They Mean?</h4>
                                  <ul className="list-inline post-meta-list">
                                      <li><p className="text-muted"><i className="pe-7s-folder"></i> News</p></li>
                                      <li><p className="text-muted"><i className="pe-7s-clock"></i> <button href="#" title="">10/12/2014</button></p></li>
                                      <li><p className="text-muted"><i className="pe-7s-user"></i> <button href="#" title="">Richard Blake</button></p></li>
                                  </ul> 
                                  <p className="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente</p>
                              </div>
                          </li>
                          <li className="portfolio-item da-item">
                              <button href="#" title="View Image">
                                  <img src={blog4Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                                
                              </button>
                              <div className="item-caption">
                                  <h4>Dreams - What Do They Mean?</h4>
                                  <ul className="list-inline post-meta-list">
                                      <li><p className="text-muted"><i className="pe-7s-folder"></i> News</p></li>
                                      <li><p className="text-muted"><i className="pe-7s-clock"></i> <button href="#" title="">10/12/2014</button></p></li>
                                      <li><p className="text-muted"><i className="pe-7s-user"></i> <button href="#" title="">Richard Blake</button></p></li>
                                  </ul> 
                                  <p className="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente</p>
                              </div>
                          </li>
                           <li className="portfolio-item da-item">
                              <button href="#" title="View Image">
                                  <img src={blog5Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                                
                              </button>
                              <div className="item-caption">
                                  <h4>Dreams - What Do They Mean?</h4>
                                  <ul className="list-inline post-meta-list">
                                      <li><p className="text-muted"><i className="pe-7s-folder"></i> News</p></li>
                                      <li><p className="text-muted"><i className="pe-7s-clock"></i> <button href="#" title="">10/12/2014</button></p></li>
                                      <li><p className="text-muted"><i className="pe-7s-user"></i> <button href="#" title="">Richard Blake</button></p></li>
                                  </ul> 
                                  <p className="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente</p>
                              </div>
                          </li>
                          <li className="portfolio-item da-item">
                              <button href="#" title="View Image">
                                  <img src={blog6Img} className="img-responsive" alt=""/>
                                  <div>
                                      <div className="portfolio-hover-content">
                                          <i className="pe-7s-close fa-3x"></i>
                                      </div>
                                  </div>                                
                              </button>
                              <div className="item-caption">
                                  <h4>Dreams - What Do They Mean?</h4>
                                  <ul className="list-inline post-meta-list">
                                      <li><p className="text-muted"><i className="pe-7s-folder"></i> News</p></li>
                                      <li><p className="text-muted"><i className="pe-7s-clock"></i> <button href="#" title="">10/12/2014</button></p></li>
                                      <li><p className="text-muted"><i className="pe-7s-user"></i> <button href="#" title="">Richard Blake</button></p></li>
                                  </ul> 
                                  <p className="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente</p>
                              </div>
                          </li>
                      </ul>  
                  </div>  
              </div>
          </div>
      </section>

      <section id="mapwrapper">
      </section>

      <section id="contact">
          <div className="section-inner">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12 text-center wow fadeInDown">
                          <h2 className="section-heading"><strong>Contact</strong> Us</h2>
                          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-6">
                          <div id="message"></div>
                          <form onSubmit={(a) => {}} id="contactform">
                              <p><input type="text" className="form-control" name="name" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name." onChange={() => {}} /></p>
                              <p><input type="text" className="form-control" name="email" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address." onChange={() => {}} /></p>
                              <p><input type="text" className="form-control" name="website" placeholder="Your URL *" id="website" required data-validation-required-message="Please enter your web address." onChange={() => {}} /></p>
                              <p><textarea name="comments" className="form-control" id="comments" placeholder="Your Message *" required data-validation-required-message="Please enter a message." onChange={() => {}} ></textarea></p>
                              <input className="btn btn-outlined btn-primary pull-right" type="submit" name="submit" value="Submit" />
                          </form>
                      </div>
                      <div className="col-md-6">
                          <p>Improved own provided blessing may peculiar domestic. Sight house has sex never. No visited raising gravity outward subject my cottage mr be. Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted cottage he is offices parlors.</p>
                          <p>Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract. Forbade concern do private be. Offending residence but men engrossed shy. Pretend am earnest offered arrived company so on.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section id="footer-widgets" className="divider-wrapper">
          <div className="section-inner">
              <div className="container">
                  <div className="row wow fadeInUp">
                      <div className="widget col-md-3 col-sm-6 about-us-widget">
                          <h4 className="widget-title"><strong>Global</strong> Coverage</h4>
                          <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way joy wrote witty. In mr began music weeks after at begin. Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way joy wrote witty. Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way joy wrote witty.</p>
                      </div>{/*/.col-md-3*/}

                      <div className="widget col-md-3 col-sm-6">
                          <h4 className="widget-title"><strong>Our</strong> Company</h4>
                          <div>
                              <ul className="list-unstyled widget-list">
                                  <li><button href="#">Company Overview</button></li>
                                  <li><button href="#">Meet The Team</button></li>
                                  <li><button href="#">Our Awesome Partners</button></li>
                                  <li><button href="#">Our Services</button></li>
                                  <li><button href="#">Resources</button></li>
                                  <li><button href="#">Our Links</button></li>
                                  <li><button href="#">Communit</button></li>
                              </ul>
                          </div>
                      </div>{/*/.col-md-3*/}

                      <div className="widget col-md-3 col-sm-6">
                          <h4 className="widget-title"><strong>Latest</strong> Articles</h4>
                          <div>
                              <div className="media">
                                  <div className="pull-left">
                                      <img className="widget-img" src={widget1Img} alt=""/>
                                  </div>
                                  <div className="media-body">
                                      <span className="media-heading"><button href="#">Blog Post A</button></span>
                                      <small className="muted">Posted 14 April 2014</small>
                                  </div>
                              </div>
                              <div className="media">
                                  <div className="pull-left">
                                      <img className="widget-img" src={widget2Img} alt=""/>
                                  </div>
                                  <div className="media-body">
                                      <span className="media-heading"><button href="#">Blog Post B</button></span>
                                      <small className="muted">Posted 14 April 2014</small>
                                  </div>
                              </div>
                              <div className="media">
                                  <div className="pull-left">
                                      <img className="widget-img" src={widget3Img} alt=""/>
                                  </div>
                                  <div className="media-body">
                                      <span className="media-heading"><button href="#">Blog Post B</button></span>
                                      <small className="muted">Posted 14 April 2014</small>
                                  </div>
                              </div>
                          </div>  
                      </div>{/*/.col-md-3*/}

                      <div className="widget carousel-widget col-md-3 col-sm-6">
                          <h4 className="widget-title"><strong>Latest</strong> Works</h4>
                          <div className="row">
                              <ul className="direction-aware owl-carousel-paged wow fadeInUp" data-items="1" data-items-tablet="[768,1]"  data-items-mobile="[479,1]">
                                  <li className="portfolio-item da-item">
                                      <a href="single-post.html" title="View Post">
                                          <img src="http://unsplash.it/800/600?random=6" className="img-responsive" alt=""/>
                                          <div>
                                              <div className="portfolio-hover-content">
                                                  <i className="pe-7s-close fa-3x"></i>
                                              </div>
                                          </div>                                
                                      </a>
                                  </li>
                                   <li className="portfolio-item da-item">
                                      <a href="single-post.html" title="View Post">
                                          <img src="http://unsplash.it/800/600?random=5" className="img-responsive" alt=""/>
                                          <div>
                                              <div className="portfolio-hover-content">
                                                  <i className="pe-7s-close fa-3x"></i>
                                              </div>
                                          </div>                                
                                      </a>
                                  </li>
                                  <li className="portfolio-item da-item">
                                      <a href="single-post.html" title="View Post">
                                          <img src="http://unsplash.it/800/600?random=4" className="img-responsive" alt=""/>
                                          <div>
                                              <div className="portfolio-hover-content">
                                                  <i className="pe-7s-close fa-3x"></i>
                                              </div>
                                          </div>                                
                                      </a>
                                  </li>
                                  <li className="portfolio-item da-item">
                                      <a href="single-post.html" title="View Post">
                                          <img src="http://unsplash.it/800/600?random=6" className="img-responsive" alt=""/>
                                          <div>
                                              <div className="portfolio-hover-content">
                                                  <i className="pe-7s-close fa-3x"></i>
                                              </div>
                                          </div>                                
                                      </a>
                                  </li>
                                   <li className="portfolio-item da-item">
                                      <a href="single-post.html" title="View Post">
                                          <img src="http://unsplash.it/800/600?random=5" className="img-responsive" alt=""/>
                                          <div>
                                              <div className="portfolio-hover-content">
                                                  <i className="pe-7s-close fa-3x"></i>
                                              </div>
                                          </div>                                
                                      </a>
                                  </li>
                                  <li className="portfolio-item da-item">
                                      <a href="single-post.html" title="View Post">
                                          <img src="http://unsplash.it/800/600?random=4" className="img-responsive" alt=""/>
                                          <div>
                                              <div className="portfolio-hover-content">
                                                  <i className="pe-7s-close fa-3x"></i>
                                              </div>
                                          </div>                                
                                      </a>
                                  </li>
                              </ul>  
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <footer className="divider-wrapper-dark">
          <div className="container">
              <div className="row">
                  <div className="col-md-4">
                      <span className="copyright wow fadeInUp">Designed by Distinctive Themes</span>
                  </div>
                  <div className="col-md-4 text-center">
                      <button href="#" id="back-to-top"><i className="pe-7s-angle-up fa-4x"></i></button>
                  </div>
                  <div className="col-md-4">
                      <ul className="list-inline social-buttons wow fadeInUp">
                          <li><button className="twitter" href="#"><i className="fa fa-twitter"></i></button>
                          </li>
                          <li><button className="facebook" href="#"><i className="fa fa-facebook"></i></button>
                          </li>
                          <li><button className="google" href="#"><i className="fa fa-google-plus"></i></button>
                          </li>
                          <li><button className="linkedin" href="#"><i className="fa fa-linkedin"></i></button>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </footer>



      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}
export default IndexPage

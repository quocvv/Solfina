import Head from 'next/head';
import { FC } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';

import '../public/assets/css/shortcodes.css';
import '../public/assets/css/responsive.css';
import '../public/assets/css/animation.css';
import '../public/assets/css/animate.min.css';
import '../public/assets/css/swiper-bundle.min.css';
import '../public/assets/font/font.css';
import '../public/assets/icon/icon.css';
import '../public/assets/css/bootstrap.css'
import '../public/assets/css/style.css';


const Home: FC = () => {
  return (
    <>
        {/* preload */}
        <div className="preload preload-container">
          <div className="middle">
            <div className="bar bar1" />
            <div className="bar bar2" />
            <div className="bar bar3" />
            <div className="bar bar4" />
            <div className="bar bar5" />
            <div className="bar bar6" />
            <div className="bar bar7" />
            <div className="bar bar8" />
          </div>
        </div>
        {/* /preload */}
        <div id="wrapper">
          <div id="page" className="pt-40">

            <div className="flat-pages-title-home2 relative">
              <div className="themesflat-container w-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="content">
                      <h1 data-wow-delay="0s" className="wow fadeInUp">
                        Create, Explore&amp; Collect Digital Art NFTs
                      </h1>
                      <p data-wow-delay="0.1s" className="wow fadeInUp">
                        Buy and sell NFTs from the world’s top artists. More than
                        1.000 premium digital artworks are available to be yours!
                      </p>
                      <div
                        data-wow-delay="0.2s"
                        className="wow fadeInUp flat-button flex"
                      >
                        <a href="#" className="tf-button style-1 h50 w190 mr-30">
                          Start Collecting
                          <i className="icon-arrow-up-right2" />
                        </a>
                        <a href="#" className="tf-button style-1 h50 w190 active">
                          Create NFT
                          <i className="icon-arrow-up-right2" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="banner__right relative">
                      <div
                        className="swiper-container swiper-3d-3card"
                        data-swiper='{
                              "loop": false,
                              "spaceBetween": 0,
                              "slidesPerView": 1,
                              "centeredSlides": false,
                              "observer": true,
                              "observeParents": true,
                              "freeMode": false,
                              "watchSlidesProgress": true,
                              "effect": "coverflow",
                              "grabCursor": true,
                              "coverflowEffect":{
                                  "rotate": 0,
                                  "stretch": "500",
                                  "depth": 0,
                                  "modifier":1,
                                  "scale": "0.9",
                                  "slideShadows": false
                              },
                              "navigation": {
                                  "prevEl": ".prev-3d"
                              }
                          }'
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="tf-card-box style-2">
                              <div className="card-media">
                                <a href="#">
                                  <img
                                    src="assets/images/box-item/banner-08.jpg"
                                    alt=""
                                  />
                                </a>
                                <span className="wishlist-button icon-heart" />
                                <div className="featured-countdown">
                                  <span
                                    className="js-countdown"
                                    data-timer={7500}
                                    data-labels="d,h,m,s"
                                  />
                                </div>
                                <div className="button-place-bid">
                                  <a
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#popup_bid"
                                    className="tf-button"
                                  >
                                    <span>Place Bid</span>
                                  </a>
                                </div>
                              </div>
                              <div className="author flex items-center justify-between">
                                <div className="avatar">
                                  <img
                                    src="assets/images/avatar/avatar-box-06.jpg"
                                    alt="Image"
                                  />
                                </div>
                                <div className="info">
                                  <span>Posted by:</span>
                                  <h6>
                                    <a href="author-2.html">Cody Fisher</a>{" "}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tf-card-box style-2">
                              <div className="card-media">
                                <a href="#">
                                  <img
                                    src="assets/images/box-item/banner-09.jpg"
                                    alt=""
                                  />
                                </a>
                                <span className="wishlist-button icon-heart" />
                                <div className="featured-countdown">
                                  <span
                                    className="js-countdown"
                                    data-timer={7500}
                                    data-labels="d,h,m,s"
                                  />
                                </div>
                                <div className="button-place-bid">
                                  <a
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#popup_bid"
                                    className="tf-button"
                                  >
                                    <span>Place Bid</span>
                                  </a>
                                </div>
                              </div>
                              <div className="author flex items-center justify-between">
                                <div className="avatar">
                                  <img
                                    src="assets/images/avatar/avatar-box-02.jpg"
                                    alt="Image"
                                  />
                                </div>
                                <div className="info">
                                  <span>Posted by:</span>
                                  <h6>
                                    <a href="author-2.html">Cody Fisher</a>{" "}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tf-card-box style-2">
                              <div className="card-media">
                                <a href="#">
                                  <img
                                    src="assets/images/box-item/banner-10.jpg"
                                    alt=""
                                  />
                                </a>
                                <span className="wishlist-button icon-heart" />
                                <div className="featured-countdown">
                                  <span
                                    className="js-countdown"
                                    data-timer={7500}
                                    data-labels="d,h,m,s"
                                  />
                                </div>
                                <div className="button-place-bid">
                                  <a
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#popup_bid"
                                    className="tf-button"
                                  >
                                    <span>Place Bid</span>
                                  </a>
                                </div>
                              </div>
                              <div className="author flex items-center justify-between">
                                <div className="avatar">
                                  <img
                                    src="assets/images/avatar/avatar-box-03.jpg"
                                    alt="Image"
                                  />
                                </div>
                                <div className="info">
                                  <span>Posted by:</span>
                                  <h6>
                                    <a href="author-2.html">Cody Fisher</a>{" "}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tf-card-box style-2">
                              <div className="card-media">
                                <a href="#">
                                  <img
                                    src="assets/images/box-item/banner-08.jpg"
                                    alt=""
                                  />
                                </a>
                                <span className="wishlist-button icon-heart" />
                                <div className="featured-countdown">
                                  <span
                                    className="js-countdown"
                                    data-timer={7500}
                                    data-labels="d,h,m,s"
                                  />
                                </div>
                                <div className="button-place-bid">
                                  <a
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#popup_bid"
                                    className="tf-button"
                                  >
                                    <span>Place Bid</span>
                                  </a>
                                </div>
                              </div>
                              <div className="author flex items-center justify-between">
                                <div className="avatar">
                                  <img
                                    src="assets/images/avatar/avatar-box-04.jpg"
                                    alt="Image"
                                  />
                                </div>
                                <div className="info">
                                  <span>Posted by:</span>
                                  <h6>
                                    <a href="author-2.html">Cody Fisher</a>{" "}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="tf-card-box style-2">
                              <div className="card-media">
                                <a href="#">
                                  <img
                                    src="assets/images/box-item/banner-09.jpg"
                                    alt=""
                                  />
                                </a>
                                <span className="wishlist-button icon-heart" />
                                <div className="featured-countdown">
                                  <span
                                    className="js-countdown"
                                    data-timer={7500}
                                    data-labels="d,h,m,s"
                                  />
                                </div>
                                <div className="button-place-bid">
                                  <a
                                    href="#"
                                    data-toggle="modal"
                                    data-target="#popup_bid"
                                    className="tf-button"
                                  >
                                    <span>Place Bid</span>
                                  </a>
                                </div>
                              </div>
                              <div className="author flex items-center justify-between">
                                <div className="avatar">
                                  <img
                                    src="assets/images/avatar/avatar-box-01.jpg"
                                    alt="Image"
                                  />
                                </div>
                                <div className="info">
                                  <span>Posted by:</span>
                                  <h6>
                                    <a href="author-2.html">Cody Fisher</a>{" "}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-button-prev prev-3d over" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-section seller ">
              <div className="themesflat-container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="heading-section">
                      <h2 className="tf-title pb-30">
                        Top seller in
                        <span className="dropdown" id="select-day">
                          <span className="btn-selector tf-color">
                            <span>1 day</span>
                          </span>
                          <ul>
                            <li>
                              <span>1 day</span>
                            </li>
                            <li>
                              <span>3 day</span>
                            </li>
                            <li>
                              <span>7 day</span>
                            </li>
                          </ul>
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div
                      className="swiper-container seller seller-slider2"
                      data-swiper='{
                          "loop":false,
                          "slidesPerView": 2,
                          "observer": true,
                          "grabCursor": true,
                          "observeParents": true,
                          "spaceBetween": 30,
                          "navigation": {
                              "clickable": true,
                              "nextEl": ".seller-next",
                              "prevEl": ".seller-prev"
                          },
                          "breakpoints": {
                              "500": {
                                  "slidesPerView": 3
                              },
                              "640": {
                                  "slidesPerView": 4
                              },
                              "768": {
                                  "slidesPerView": 5
                              },
                              "1070": {
                                  "slidesPerView": 6
                              }
                          }
                      }'
                    >
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="tf-author-box style-3 text-center">
                            <div className="author-avatar ">
                              <img
                                src="assets/images/avatar/avatar-08.png"
                                alt=""
                                className="avatar"
                              />
                              <div className="number">1</div>
                            </div>
                            <div className="author-infor ">
                              <h5>
                                <a href="author-2.html">Jane Cooper</a>
                              </h5>
                              <h6 className="price gem style-1">
                                <i className="icon-gem" />
                                7,080.95
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tf-author-box style-3 text-center">
                            <div className="author-avatar ">
                              <img
                                src="assets/images/avatar/avatar-09.png"
                                alt=""
                                className="avatar"
                              />
                              <div className="number">2</div>
                            </div>
                            <div className="author-infor ">
                              <h5>
                                <a href="author-2.html">Darrell Steward</a>
                              </h5>
                              <h6 className="price gem style-1">
                                <i className="icon-gem" />
                                7,080.95
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tf-author-box style-3 text-center">
                            <div className="author-avatar ">
                              <img
                                src="assets/images/avatar/avatar-10.png"
                                alt=""
                                className="avatar"
                              />
                              <div className="number">3</div>
                            </div>
                            <div className="author-infor ">
                              <h5>
                                <a href="author-2.html">Arlene McCoy</a>
                              </h5>
                              <h6 className="price gem style-1">
                                <i className="icon-gem" />
                                7,080.95
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tf-author-box style-3 text-center">
                            <div className="author-avatar ">
                              <img
                                src="assets/images/avatar/avatar-11.png"
                                alt=""
                                className="avatar"
                              />
                              <div className="number">4</div>
                            </div>
                            <div className="author-infor ">
                              <h5>
                                <a href="author-2.html">Leslie Alexander</a>
                              </h5>
                              <h6 className="price gem style-1">
                                <i className="icon-gem" />
                                7,080.95
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tf-author-box style-3 text-center">
                            <div className="author-avatar ">
                              <img
                                src="assets/images/avatar/avatar-12.png"
                                alt=""
                                className="avatar"
                              />
                              <div className="number">5</div>
                            </div>
                            <div className="author-infor ">
                              <h5>
                                <a href="author-2.html">Kathryn Murphy</a>
                              </h5>
                              <h6 className="price gem style-1">
                                <i className="icon-gem" />
                                7,080.95
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tf-author-box style-3 text-center">
                            <div className="author-avatar ">
                              <img
                                src="assets/images/avatar/avatar-13.png"
                                alt=""
                                className="avatar"
                              />
                              <div className="number">6</div>
                            </div>
                            <div className="author-infor ">
                              <h5>
                                <a href="author-2.html">Ralph Edwards</a>
                              </h5>
                              <h6 className="price gem style-1">
                                <i className="icon-gem" />
                                7,080.95
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tf-author-box style-3 text-center">
                            <div className="author-avatar ">
                              <img
                                src="assets/images/avatar/avatar-09.png"
                                alt=""
                                className="avatar"
                              />
                              <div className="number">7</div>
                            </div>
                            <div className="author-infor ">
                              <h5>
                                <a href="author-2.html">Courtney Henry</a>
                              </h5>
                              <h6 className="price gem style-1">
                                <i className="icon-gem" />
                                7,080.95
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tf-author-box style-3 text-center">
                            <div className="author-avatar ">
                              <img
                                src="assets/images/avatar/avatar-10.png"
                                alt=""
                                className="avatar"
                              />
                              <div className="number">8</div>
                            </div>
                            <div className="author-infor ">
                              <h5>
                                <a href="author-2.html">Courtney Henry</a>
                              </h5>
                              <h6 className="price gem style-1">
                                <i className="icon-gem" />
                                7,080.95
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-button-next seller-next over active" />
                    <div className="swiper-button-prev seller-prev over " />
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-section featured-item style-bottom">
              <div className="themesflat-container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="heading-section pb-20">
                      <h2 className="tf-title ">Live Bidding</h2>
                      <a href="explore-3.html" className="">
                        Discover more <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div
                      className="featured pt-10 swiper-container carouselfull"
                      data-swiper='{
                          "loop":true,
                          "slidesPerView": 1,
                          "observer": true,
                          "observeParents": true,
                          "spaceBetween": 30,
                          "centeredSlides": true,
                          "navigation": {
                              "clickable": true,
                              "nextEl": ".next-full",
                              "prevEl": ".prev-full"
                          },
                          "pagination": {
                              "el": ".swiper-pagination",
                              "clickable": true
                          },
                          "breakpoints": {
                              "768": {
                                  "slidesPerView": 2,
                                  "spaceBetween": 30
                              },
                              "1024": {
                                  "slidesPerView": 3,
                                  "spaceBetween": 30
                              },
                              "1300": {
                                  "slidesPerView": 4,
                                  "spaceBetween": 30
                              }
                          }
                      }'
                    >
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="tf-card-box style-1">
                            <div className="card-media">
                              <a href="#">
                                <img
                                  src="assets/images/box-item/card-item-16.jpg"
                                  alt=""
                                />
                              </a>
                              <span className="wishlist-button icon-heart" />
                              <div className="featured-countdown">
                                <span
                                  className="js-countdown"
                                  data-timer={7500}
                                  data-labels="d,h,m,s"
                                />
                              </div>
                              <div className="button-place-bid">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#popup_bid"
                                  className="tf-button"
                                >
                                  <span>Place Bid</span>
                                </a>
                              </div>
                            </div>
                            <h5 className="name">
                              <a href="nft-detail-2.html">Dayco serpentine belt</a>
                            </h5>
                            <div className="author flex items-center">
                              <div className="avatar">
                                <img
                                  src="assets/images/avatar/avatar-box-01.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="info">
                                <span>Created by:</span>
                                <h6>
                                  <a href="author-2.html">Leslie Alexander</a>
                                </h6>
                              </div>
                            </div>
                            <div className="divider" />
                            <div className="meta-info flex items-center justify-between">
                              <span className="text-bid">Current Bid</span>
                              <h6 className="price gem">
                                <i className="icon-gem" />
                                0,34
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tf-card-box style-1">
                            <div className="card-media">
                              <a href="#">
                                <img
                                  src="assets/images/box-item/card-item-10.jpg"
                                  alt=""
                                />
                              </a>
                              <span className="wishlist-button icon-heart" />
                              <div className="featured-countdown">
                                <span
                                  className="js-countdown"
                                  data-timer={7500}
                                  data-labels="d,h,m,s"
                                />
                              </div>
                              <div className="button-place-bid">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#popup_bid"
                                  className="tf-button"
                                >
                                  <span>Place Bid</span>
                                </a>
                              </div>
                            </div>
                            <h5 className="name">
                              <a href="nft-detail-2.html">Dayco serpentine belt</a>
                            </h5>
                            <div className="author flex items-center">
                              <div className="avatar">
                                <img
                                  src="assets/images/avatar/avatar-box-02.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="info">
                                <span>Created by:</span>
                                <h6>
                                  <a href="author-2.html">Leslie Alexander</a>
                                </h6>
                              </div>
                            </div>
                            <div className="divider" />
                            <div className="meta-info flex items-center justify-between">
                              <span className="text-bid">Current Bid</span>
                              <h6 className="price gem">
                                <i className="icon-gem" />
                                0,34
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tf-card-box style-1">
                            <div className="card-media">
                              <a href="#">
                                <img
                                  src="assets/images/box-item/card-item-11.jpg"
                                  alt=""
                                />
                              </a>
                              <span className="wishlist-button icon-heart" />
                              <div className="featured-countdown">
                                <span
                                  className="js-countdown"
                                  data-timer={7500}
                                  data-labels="d,h,m,s"
                                />
                              </div>
                              <div className="button-place-bid">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#popup_bid"
                                  className="tf-button"
                                >
                                  <span>Place Bid</span>
                                </a>
                              </div>
                            </div>
                            <h5 className="name">
                              <a href="nft-detail-2.html">Dayco serpentine belt</a>
                            </h5>
                            <div className="author flex items-center">
                              <div className="avatar">
                                <img
                                  src="assets/images/avatar/avatar-box-03.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="info">
                                <span>Created by:</span>
                                <h6>
                                  <a href="author-2.html">Leslie Alexander</a>
                                </h6>
                              </div>
                            </div>
                            <div className="divider" />
                            <div className="meta-info flex items-center justify-between">
                              <span className="text-bid">Current Bid</span>
                              <h6 className="price gem">
                                <i className="icon-gem" />
                                0,34
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tf-card-box style-1">
                            <div className="card-media">
                              <a href="#">
                                <img
                                  src="assets/images/box-item/card-item-12.jpg"
                                  alt=""
                                />
                              </a>
                              <span className="wishlist-button icon-heart" />
                              <div className="featured-countdown">
                                <span
                                  className="js-countdown"
                                  data-timer={7500}
                                  data-labels="d,h,m,s"
                                />
                              </div>
                              <div className="button-place-bid">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#popup_bid"
                                  className="tf-button"
                                >
                                  <span>Place Bid</span>
                                </a>
                              </div>
                            </div>
                            <h5 className="name">
                              <a href="nft-detail-2.html">Dayco serpentine belt</a>
                            </h5>
                            <div className="author flex items-center">
                              <div className="avatar">
                                <img
                                  src="assets/images/avatar/avatar-box-04.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="info">
                                <span>Created by:</span>
                                <h6>
                                  <a href="author-2.html">Leslie Alexander</a>
                                </h6>
                              </div>
                            </div>
                            <div className="divider" />
                            <div className="meta-info flex items-center justify-between">
                              <span className="text-bid">Current Bid</span>
                              <h6 className="price gem">
                                <i className="icon-gem" />
                                0,34
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tf-card-box style-1">
                            <div className="card-media">
                              <a href="#">
                                <img
                                  src="assets/images/box-item/card-item-13.jpg"
                                  alt=""
                                />
                              </a>
                              <span className="wishlist-button icon-heart" />
                              <div className="featured-countdown">
                                <span
                                  className="js-countdown"
                                  data-timer={7500}
                                  data-labels="d,h,m,s"
                                />
                              </div>
                              <div className="button-place-bid">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#popup_bid"
                                  className="tf-button"
                                >
                                  <span>Place Bid</span>
                                </a>
                              </div>
                            </div>
                            <h5 className="name">
                              <a href="nft-detail-2.html">Dayco serpentine belt</a>
                            </h5>
                            <div className="author flex items-center">
                              <div className="avatar">
                                <img
                                  src="assets/images/avatar/avatar-box-05.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="info">
                                <span>Created by:</span>
                                <h6>
                                  <a href="author-2.html">Leslie Alexander</a>
                                </h6>
                              </div>
                            </div>
                            <div className="divider" />
                            <div className="meta-info flex items-center justify-between">
                              <span className="text-bid">Current Bid</span>
                              <h6 className="price gem">
                                <i className="icon-gem" />
                                0,34
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-pagination" />
                      <div className="swiper-button-next next-full" />
                      <div className="swiper-button-prev prev-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-section create-sell">
              <div className="themesflat-container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="heading-section">
                      <h2 className="tf-title pb-30">
                        Step by step Create and Sell Your NFTs
                      </h2>
                    </div>
                  </div>
                  <div data-wow-delay="0s" className="wow fadeInUp col-lg-3 col-md-6">
                    <div className="tf-box-icon style-1 step1 relative">
                      <div className="image">
                        <img src="assets/images/box-icon/icon-01.png" alt="" />
                        <p>Step 1</p>
                      </div>
                      <h4 className="heading">
                        <a href="contact-us.html">Set Up Your Wallet</a>
                      </h4>
                      <p className="content">
                        Fusce non dignissim velit, sit amet semper eros. Quisque orci
                        est
                      </p>
                      <div className="rainbow" />
                    </div>
                  </div>
                  <div
                    data-wow-delay="0.1s"
                    className="wow fadeInUp col-lg-3 col-md-6"
                  >
                    <div className="tf-box-icon style-1 step2 relative">
                      <div className="image">
                        <img src="assets/images/box-icon/icon-02.png" alt="" />
                        <p>Step 2</p>
                      </div>
                      <h4 className="heading">
                        <a href="contact-us.html">Create collection</a>
                      </h4>
                      <p className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque luctus
                      </p>
                      <div className="rainbow" />
                    </div>
                  </div>
                  <div
                    data-wow-delay="0.2s"
                    className="wow fadeInUp col-lg-3 col-md-6"
                  >
                    <div className="tf-box-icon style-1 step3 relative">
                      <div className="image">
                        <img src="assets/images/box-icon/icon-03.png" alt="" />
                        <p>Step 3</p>
                      </div>
                      <h4 className="heading">
                        <a href="contact-us.html">Add your NFTs</a>
                      </h4>
                      <p className="content">
                        Suspendisse porttitor id est non accumsan. Cras vel viverra
                        velit
                      </p>
                      <div className="rainbow" />
                    </div>
                  </div>
                  <div
                    data-wow-delay="0.3s"
                    className="wow fadeInUp col-lg-3 col-md-6"
                  >
                    <div className="tf-box-icon style-1 step4 relative">
                      <div className="image">
                        <img src="assets/images/box-icon/icon-04.png" alt="" />
                        <p>Step 4</p>
                      </div>
                      <h4 className="heading">
                        <a href="contact-us.html">Sell your NFTs</a>
                      </h4>
                      <p className="content">
                        Maecenas non semper quam. Vivamus et arcu condimentum ipsum
                        consectetur
                      </p>
                      <div className="rainbow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-section-1 seller ">
              <div className="themesflat-container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="heading-section">
                      <h2 className="tf-title pb-20">
                        Popular items in last
                        <span className="dropdown" id="select-day">
                          <span className="btn-selector tf-color">
                            <span>1 day</span>
                          </span>
                          <ul>
                            <li>
                              <span>1 day</span>
                            </li>
                            <li>
                              <span>3 day</span>
                            </li>
                            <li>
                              <span>7 day</span>
                            </li>
                          </ul>
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div
                      className="featured pt-10 swiper-container carousel"
                      data-swiper='{
                          "loop":false,
                          "slidesPerView": 1,
                          "observer": true,
                          "observeParents": true,
                          "spaceBetween": 30,
                          "navigation": {
                              "clickable": true,
                              "nextEl": ".slider-next",
                              "prevEl": ".slider-prev"
                          },
                          "pagination": {
                              "el": ".swiper-pagination",
                              "clickable": true
                          },
                          "breakpoints": {
                              "768": {
                                  "slidesPerView": 2,
                                  "spaceBetween": 30
                              },
                              "1024": {
                                  "slidesPerView": 3,
                                  "spaceBetween": 30
                              },
                              "1300": {
                                  "slidesPerView": 4,
                                  "spaceBetween": 30
                              }
                          }
                      }'
                    >
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="tf-card-box style-1">
                            <div className="card-media">
                              <a href="#">
                                <img
                                  src="assets/images/box-item/card-item-09.jpg"
                                  alt=""
                                />
                              </a>
                              <span className="wishlist-button icon-heart" />
                              <div className="button-place-bid">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#popup_bid"
                                  className="tf-button"
                                >
                                  <span>Place Bid</span>
                                </a>
                              </div>
                            </div>
                            <h5 className="name">
                              <a href="nft-detail-2.html">Dayco serpentine belt</a>
                            </h5>
                            <div className="author flex items-center">
                              <div className="avatar">
                                <img
                                  src="assets/images/avatar/avatar-box-01.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="info">
                                <span>Posted by:</span>
                                <h6>
                                  <a href="author-2.html">Cody Fisher</a>{" "}
                                </h6>
                              </div>
                            </div>
                            <div className="divider" />
                            <div className="meta-info flex items-center justify-between">
                              <span className="text-bid">Current Bid</span>
                              <h6 className="price gem">
                                <i className="icon-gem" />
                                0,34
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tf-card-box style-1">
                            <div className="card-media">
                              <a href="#">
                                <img
                                  src="assets/images/box-item/card-item-10.jpg"
                                  alt=""
                                />
                              </a>
                              <span className="wishlist-button icon-heart" />
                              <div className="button-place-bid">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#popup_bid"
                                  className="tf-button"
                                >
                                  <span>Place Bid</span>
                                </a>
                              </div>
                            </div>
                            <h5 className="name">
                              <a href="nft-detail-2.html">Dayco serpentine belt</a>
                            </h5>
                            <div className="author flex items-center">
                              <div className="avatar">
                                <img
                                  src="assets/images/avatar/avatar-box-02.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="info">
                                <span>Posted by:</span>
                                <h6>
                                  <a href="author-2.html">Cody Fisher</a>{" "}
                                </h6>
                              </div>
                            </div>
                            <div className="divider" />
                            <div className="meta-info flex items-center justify-between">
                              <span className="text-bid">Current Bid</span>
                              <h6 className="price gem">
                                <i className="icon-gem" />
                                0,34
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tf-card-box style-1">
                            <div className="card-media">
                              <a href="#">
                                <img
                                  src="assets/images/box-item/card-item-11.jpg"
                                  alt=""
                                />
                              </a>
                              <span className="wishlist-button icon-heart" />
                              <div className="button-place-bid">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#popup_bid"
                                  className="tf-button"
                                >
                                  <span>Place Bid</span>
                                </a>
                              </div>
                            </div>
                            <h5 className="name">
                              <a href="nft-detail-2.html">Dayco serpentine belt</a>
                            </h5>
                            <div className="author flex items-center">
                              <div className="avatar">
                                <img
                                  src="assets/images/avatar/avatar-box-03.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="info">
                                <span>Posted by:</span>
                                <h6>
                                  <a href="author-2.html">Cody Fisher</a>{" "}
                                </h6>
                              </div>
                            </div>
                            <div className="divider" />
                            <div className="meta-info flex items-center justify-between">
                              <span className="text-bid">Current Bid</span>
                              <h6 className="price gem">
                                <i className="icon-gem" />
                                0,34
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tf-card-box style-1">
                            <div className="card-media">
                              <a href="#">
                                <img
                                  src="assets/images/box-item/card-item-12.jpg"
                                  alt=""
                                />
                              </a>
                              <span className="wishlist-button icon-heart" />
                              <div className="button-place-bid">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#popup_bid"
                                  className="tf-button"
                                >
                                  <span>Place Bid</span>
                                </a>
                              </div>
                            </div>
                            <h5 className="name">
                              <a href="nft-detail-2.html">Dayco serpentine belt</a>
                            </h5>
                            <div className="author flex items-center">
                              <div className="avatar">
                                <img
                                  src="assets/images/avatar/avatar-box-04.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="info">
                                <span>Posted by:</span>
                                <h6>
                                  <a href="author-2.html">Cody Fisher</a>{" "}
                                </h6>
                              </div>
                            </div>
                            <div className="divider" />
                            <div className="meta-info flex items-center justify-between">
                              <span className="text-bid">Current Bid</span>
                              <h6 className="price gem">
                                <i className="icon-gem" />
                                0,34
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tf-card-box style-1">
                            <div className="card-media">
                              <a href="#">
                                <img
                                  src="assets/images/box-item/card-item-13.jpg"
                                  alt=""
                                />
                              </a>
                              <span className="wishlist-button icon-heart" />
                              <div className="button-place-bid">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#popup_bid"
                                  className="tf-button"
                                >
                                  <span>Place Bid</span>
                                </a>
                              </div>
                            </div>
                            <h5 className="name">
                              <a href="nft-detail-2.html">Dayco serpentine belt</a>
                            </h5>
                            <div className="author flex items-center">
                              <div className="avatar">
                                <img
                                  src="assets/images/avatar/avatar-box-05.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="info">
                                <span>Posted by:</span>
                                <h6>
                                  <a href="author-2.html">Cody Fisher</a>{" "}
                                </h6>
                              </div>
                            </div>
                            <div className="divider" />
                            <div className="meta-info flex items-center justify-between">
                              <span className="text-bid">Current Bid</span>
                              <h6 className="price gem">
                                <i className="icon-gem" />
                                0,34
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-section top-collections">
              <div className="themesflat-container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="heading-section pb-20">
                      <h2 className="tf-title ">Top collections in week</h2>
                      <a href="explore-3.html" className="">
                        Discover more <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div
                      className="featured pt-10 swiper-container carousel3"
                      data-swiper='{
                          "loop":false,
                          "slidesPerView": 1,
                          "spaceBetween": 30,
                          "observer": true,
                          "observeParents": true,
                          "breakpoints": {
                              "600": {
                                  "slidesPerView": 2
                              },
                              "991": {
                                  "slidesPerView": 3
                              }
                          }
                      }'
                    >
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="tf-card-collection style-1 relative">
                            <div className="image">
                              <img
                                src="assets/images/box-item/collection-1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="card-bottom">
                              <div className="author flex items-center">
                                <div className="avatar">
                                  <img
                                    src="assets/images/avatar/avatar-box-06.jpg"
                                    alt="Image"
                                  />
                                </div>
                                <div className="info">
                                  <h5>
                                    <a href="author-1.html">Bored ape#21</a>
                                  </h5>
                                  <div className="infor">@Themesflat</div>
                                </div>
                              </div>
                              <div className="bottom-right">
                                <div className="shop">
                                  <div className="icon">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                  <p>12 Item</p>
                                </div>
                              </div>
                            </div>
                            <div className="like">
                              <span className="wishlist-button icon-heart" />
                              <p>97 like</p>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tf-card-collection style-1 relative">
                            <div className="image">
                              <img
                                src="assets/images/box-item/collection-2.jpg"
                                alt=""
                              />
                            </div>
                            <div className="card-bottom">
                              <div className="author flex items-center">
                                <div className="avatar">
                                  <img
                                    src="assets/images/avatar/avatar-box-06.jpg"
                                    alt="Image"
                                  />
                                </div>
                                <div className="info">
                                  <h5>
                                    <a href="author-1.html">Bored ape#21</a>
                                  </h5>
                                  <div className="infor">@Themesflat</div>
                                </div>
                              </div>
                              <div className="bottom-right">
                                <div className="shop">
                                  <div className="icon">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                  <p>12 Item</p>
                                </div>
                              </div>
                            </div>
                            <div className="like">
                              <span className="wishlist-button icon-heart" />
                              <p>97 like</p>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tf-card-collection style-1 relative">
                            <div className="image">
                              <img
                                src="assets/images/box-item/collection-3.jpg"
                                alt=""
                              />
                            </div>
                            <div className="card-bottom">
                              <div className="author flex items-center">
                                <div className="avatar">
                                  <img
                                    src="assets/images/avatar/avatar-box-06.jpg"
                                    alt="Image"
                                  />
                                </div>
                                <div className="info">
                                  <h5>
                                    <a href="author-1.html">Bored ape#21</a>
                                  </h5>
                                  <div className="infor">@Themesflat</div>
                                </div>
                              </div>
                              <div className="bottom-right">
                                <div className="shop">
                                  <div className="icon">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                  <p>12 Item</p>
                                </div>
                              </div>
                            </div>
                            <div className="like">
                              <span className="wishlist-button icon-heart" />
                              <p>97 like</p>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tf-card-collection style-1 relative">
                            <div className="image">
                              <img
                                src="assets/images/box-item/collection-1.jpg"
                                alt=""
                              />
                            </div>
                            <div className="card-bottom">
                              <div className="author flex items-center">
                                <div className="avatar">
                                  <img
                                    src="assets/images/avatar/avatar-box-06.jpg"
                                    alt="Image"
                                  />
                                </div>
                                <div className="info">
                                  <h5>
                                    <a href="author-1.html">Bored ape#21</a>
                                  </h5>
                                  <div className="infor">@Themesflat</div>
                                </div>
                              </div>
                              <div className="bottom-right">
                                <div className="shop">
                                  <div className="icon">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                  <p>12 Item</p>
                                </div>
                              </div>
                            </div>
                            <div className="like">
                              <span className="wishlist-button icon-heart" />
                              <p>97 like</p>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tf-card-collection style-1 relative">
                            <div className="image">
                              <img
                                src="assets/images/box-item/collection-2.jpg"
                                alt=""
                              />
                            </div>
                            <div className="card-bottom">
                              <div className="author flex items-center">
                                <div className="avatar">
                                  <img
                                    src="assets/images/avatar/avatar-box-06.jpg"
                                    alt="Image"
                                  />
                                </div>
                                <div className="info">
                                  <h5>
                                    <a href="author-1.html">Bored ape#21</a>
                                  </h5>
                                  <div className="infor">@Themesflat</div>
                                </div>
                              </div>
                              <div className="bottom-right">
                                <div className="shop">
                                  <div className="icon">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                  <p>12 Item</p>
                                </div>
                              </div>
                            </div>
                            <div className="like">
                              <span className="wishlist-button icon-heart" />
                              <p>97 like</p>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="tf-card-collection style-1 relative">
                            <div className="image">
                              <img
                                src="assets/images/box-item/collection-3.jpg"
                                alt=""
                              />
                            </div>
                            <div className="card-bottom">
                              <div className="author flex items-center">
                                <div className="avatar">
                                  <img
                                    src="assets/images/avatar/avatar-box-06.jpg"
                                    alt="Image"
                                  />
                                </div>
                                <div className="info">
                                  <h5>
                                    <a href="author-1.html">Bored ape#21</a>
                                  </h5>
                                  <div className="infor">@Themesflat</div>
                                </div>
                              </div>
                              <div className="bottom-right">
                                <div className="shop">
                                  <div className="icon">
                                    <svg
                                      width={20}
                                      height={20}
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </div>
                                  <p>12 Item</p>
                                </div>
                              </div>
                            </div>
                            <div className="like">
                              <span className="wishlist-button icon-heart" />
                              <p>97 like</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-section action">
              <div className="themesflat-container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="action__body">
                      <div className="tf-tsparticles">
                        <div
                          id="tsparticles1"
                          data-color="#161616"
                          data-line="#000"
                        />
                      </div>
                      <h2>Discover, create and sell your own NFT</h2>
                      <div className="flat-button flex">
                        <a href="#" className="tf-button style-2 h50 w190 mr-10">
                          Explore now
                          <i className="icon-arrow-up-right2" />
                        </a>
                        <a href="#" className="tf-button style-2 h50 w230">
                          Create your first NFT
                          <i className="icon-arrow-up-right2" />
                        </a>
                      </div>
                      <div className="bg-home7">
                        <div
                          className="swiper-container autoslider3reverse"
                          data-swiper='{
                                  "loop":true,
                                  "slidesPerView": "auto",
                                  "spaceBetween": 14,
                                  "direction": "vertical",
                                  "speed": 10000,
                                  "observer": true,
                                  "observeParents": true,
                                  "autoplay": {
                                      "delay": "0",
                                      "disableOnInteraction": false
                                  }
                              }'
                        >
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img
                                src="assets/images/item-background/bg-action-1.png"
                                alt=""
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                src="assets/images/item-background/bg-action-1.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="swiper-container autoslider4reverse"
                          data-swiper='{
                                  "loop":true,
                                  "slidesPerView": "auto",
                                  "spaceBetween": 14,
                                  "direction": "vertical",
                                  "speed": 10000,
                                  "observer": true,
                                  "observeParents": true,
                                  "autoplay": {
                                      "delay": "0",
                                      "disableOnInteraction": false,
                                      "reverseDirection": true
                                  }
                              }'
                        >
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img
                                src="assets/images/item-background/bg-action-1.png"
                                alt=""
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                src="assets/images/item-background/bg-action-1.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="swiper-container autoslider3reverse"
                          data-swiper='{
                                  "loop":true,
                                  "slidesPerView": "auto",
                                  "spaceBetween": 14,
                                  "direction": "vertical",
                                  "speed": 10000,
                                  "observer": true,
                                  "observeParents": true,
                                  "autoplay": {
                                      "delay": "0",
                                      "disableOnInteraction": false
                                  }
                              }'
                        >
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img
                                src="assets/images/item-background/bg-action-1.png"
                                alt=""
                              />
                            </div>
                            <div className="swiper-slide">
                              <img
                                src="assets/images/item-background/bg-action-1.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-section discover-item loadmore-8-item">
              <div className="themesflat-container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="heading-section pb-30">
                      <h2 className="tf-title ">Discover item</h2>
                      <a href="explore-3.html" className="">
                        Discover more <i className="icon-arrow-right2" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-12 pb-30">
                    <div className="tf-soft flex items-center justify-between">
                      <div className="soft-left">
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M16.875 6.25L16.3542 15.11C16.3261 15.5875 16.1166 16.0363 15.7685 16.3644C15.4204 16.6925 14.96 16.8752 14.4817 16.875H5.51833C5.03997 16.8752 4.57962 16.6925 4.23152 16.3644C3.88342 16.0363 3.6739 15.5875 3.64583 15.11L3.125 6.25M8.33333 9.375H11.6667M2.8125 6.25H17.1875C17.705 6.25 18.125 5.83 18.125 5.3125V4.0625C18.125 3.545 17.705 3.125 17.1875 3.125H2.8125C2.295 3.125 1.875 3.545 1.875 4.0625V5.3125C1.875 5.83 2.295 6.25 2.8125 6.25Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="inner">Category</span>
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a className="dropdown-item">
                              <div className="sort-filter active">
                                <span>All</span>
                                <span className="icon-tick">
                                  <span className="path2" />
                                </span>
                              </div>
                            </a>
                            <a className="dropdown-item">
                              <div className="sort-filter">
                                <span>Art</span>
                                <span className="icon-tick">
                                  <span className="path2" />
                                </span>
                              </div>
                            </a>
                            <a className="dropdown-item">
                              <div className="sort-filter">
                                <span>Photography</span>
                                <span className="icon-tick">
                                  <span className="path2" />
                                </span>
                              </div>
                            </a>
                            <a className="dropdown-item">
                              <div className="sort-filter">
                                <span>Music</span>
                                <span className="icon-tick">
                                  <span className="path2" />
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton2"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17.5 6.25L15.625 5.15583M17.5 6.25V8.125M17.5 6.25L15.625 7.34417M2.5 6.25L4.375 5.15583M2.5 6.25L4.375 7.34417M2.5 6.25V8.125M10 10.625L11.875 9.53083M10 10.625L8.125 9.53083M10 10.625V12.5M10 18.125L11.875 17.0308M10 18.125V16.25M10 18.125L8.125 17.0308M8.125 2.96833L10 1.875L11.875 2.96917M17.5 11.875V13.75L15.625 14.8442M4.375 14.8442L2.5 13.75V11.875"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="inner">Items</span>
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a className="dropdown-item">
                              <div className="sort-filter active">
                                <span>All</span>
                                <span className="icon-tick">
                                  <span className="path2" />
                                </span>
                              </div>
                            </a>
                            <a className="dropdown-item">
                              <div className="sort-filter">
                                <span>Art</span>
                                <span className="icon-tick">
                                  <span className="path2" />
                                </span>
                              </div>
                            </a>
                            <a className="dropdown-item">
                              <div className="sort-filter">
                                <span>Photography</span>
                                <span className="icon-tick">
                                  <span className="path2" />
                                </span>
                              </div>
                            </a>
                            <a className="dropdown-item">
                              <div className="sort-filter">
                                <span>Music</span>
                                <span className="icon-tick">
                                  <span className="path2" />
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton3"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.25 14.0625H14.0625M14.0625 14.0625H16.875M14.0625 14.0625V11.25M14.0625 14.0625V16.875M5 8.75H6.875C7.37228 8.75 7.84919 8.55246 8.20082 8.20082C8.55246 7.84919 8.75 7.37228 8.75 6.875V5C8.75 4.50272 8.55246 4.02581 8.20082 3.67417C7.84919 3.32254 7.37228 3.125 6.875 3.125H5C4.50272 3.125 4.02581 3.32254 3.67417 3.67417C3.32254 4.02581 3.125 4.50272 3.125 5V6.875C3.125 7.37228 3.32254 7.84919 3.67417 8.20082C4.02581 8.55246 4.50272 8.75 5 8.75ZM5 16.875H6.875C7.37228 16.875 7.84919 16.6775 8.20082 16.3258C8.55246 15.9742 8.75 15.4973 8.75 15V13.125C8.75 12.6277 8.55246 12.1508 8.20082 11.7992C7.84919 11.4475 7.37228 11.25 6.875 11.25H5C4.50272 11.25 4.02581 11.4475 3.67417 11.7992C3.32254 12.1508 3.125 12.6277 3.125 13.125V15C3.125 15.4973 3.32254 15.9742 3.67417 16.3258C4.02581 16.6775 4.50272 16.875 5 16.875ZM13.125 8.75H15C15.4973 8.75 15.9742 8.55246 16.3258 8.20082C16.6775 7.84919 16.875 7.37228 16.875 6.875V5C16.875 4.50272 16.6775 4.02581 16.3258 3.67417C15.9742 3.32254 15.4973 3.125 15 3.125H13.125C12.6277 3.125 12.1508 3.32254 11.7992 3.67417C11.4475 4.02581 11.25 4.50272 11.25 5V6.875C11.25 7.37228 11.4475 7.84919 11.7992 8.20082C12.1508 8.55246 12.6277 8.75 13.125 8.75Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="inner">Status</span>
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a className="dropdown-item">
                              <div className="sort-filter active">
                                <span>All</span>
                                <span className="icon-tick">
                                  <span className="path2" />
                                </span>
                              </div>
                            </a>
                            <a className="dropdown-item">
                              <div className="sort-filter">
                                <span>Art</span>
                                <span className="icon-tick">
                                  <span className="path2" />
                                </span>
                              </div>
                            </a>
                            <a className="dropdown-item">
                              <div className="sort-filter">
                                <span>Photography</span>
                                <span className="icon-tick">
                                  <span className="path2" />
                                </span>
                              </div>
                            </a>
                            <a className="dropdown-item">
                              <div className="sort-filter">
                                <span>Music</span>
                                <span className="icon-tick">
                                  <span className="path2" />
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton4"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 5V15M7.5 12.6517L8.2325 13.2008C9.20833 13.9333 10.7908 13.9333 11.7675 13.2008C12.7442 12.4683 12.7442 11.2817 11.7675 10.5492C11.28 10.1825 10.64 10 10 10C9.39583 10 8.79167 9.81667 8.33083 9.45083C7.40917 8.71833 7.40917 7.53167 8.33083 6.79917C9.2525 6.06667 10.7475 6.06667 11.6692 6.79917L12.015 7.07417M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="inner">Price range</span>
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a className="dropdown-item">
                              <div className="sort-filter active">
                                <span> Price: Low to High</span>
                                <span className="icon-tick">
                                  <span className="path2" />
                                </span>
                              </div>
                            </a>
                            <a className="dropdown-item">
                              <div className="sort-filter">
                                <span> Price: High to Low</span>
                                <span className="icon-tick">
                                  <span className="path2" />
                                </span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="soft-right">
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton4"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 5V15M7.5 12.6517L8.2325 13.2008C9.20833 13.9333 10.7908 13.9333 11.7675 13.2008C12.7442 12.4683 12.7442 11.2817 11.7675 10.5492C11.28 10.1825 10.64 10 10 10C9.39583 10 8.79167 9.81667 8.33083 9.45083C7.40917 8.71833 7.40917 7.53167 8.33083 6.79917C9.2525 6.06667 10.7475 6.06667 11.6692 6.79917L12.015 7.07417M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span>Sort by: recently added</span>
                          </button>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <h6>Sort by</h6>
                            <a href="#" className="dropdown-item">
                              <div className="sort-filter" >
                                <span>Recently added</span>
                                <span className="icon-tick">
                                  <span className="path2" />
                                </span>
                              </div>
                            </a>
                            <a href="#" className="dropdown-item">
                              <div className="sort-filter active">
                                <span>Price: Low to High</span>
                                <span className="icon-tick">
                                  <span className="path2" />
                                </span>
                              </div>
                            </a>
                            <a href="#" className="dropdown-item">
                              <div className="sort-filter" >
                                <span>Price: High to Low</span>
                                <span className="icon-tick">
                                  <span className="path2" />
                                </span>
                              </div>
                            </a>
                            <a href="#" className="dropdown-item">
                              <div className="sort-filter">
                                <span>Auction ending soon</span>
                                <span className="icon-tick">
                                  <span className="path2" />
                                </span>
                              </div>
                            </a>
                            <h6>Options</h6>
                            <a href="#" className="dropdown-item">
                              <div className="sort-filter" >
                                <span>Auction ending soon</span>
                                <input
                                  className="check"
                                  type="checkbox"
                                  defaultValue="checkbox"
                                  name="check"
                                  defaultChecked={true}
                                />
                              </div>
                            </a>
                            <a href="#" className="dropdown-item">
                              <div className="sort-filter" >
                                <span>Show lazy minted</span>
                                <input
                                  className="check"
                                  type="checkbox"
                                  defaultValue="checkbox"
                                  name="check"
                                />
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-wow-delay="0s"
                    className="wow fadeInUp fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  >
                    <div className="tf-card-box style-1">
                      <div className="card-media">
                        <a href="#">
                          <img src="assets/images/box-item/card-item-09.jpg" alt="" />
                        </a>
                        <span className="wishlist-button icon-heart" />
                        <div className="featured-countdown">
                          <span
                            className="js-countdown"
                            data-timer={7500}
                            data-labels="d,h,m,s"
                          />
                        </div>
                        <div className="button-place-bid">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            className="tf-button"
                          >
                            <span>Place Bid</span>
                          </a>
                        </div>
                      </div>
                      <h5 className="name">
                        <a href="nft-detail-2.html">Dayco serpentine belt</a>
                      </h5>
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Posted by:</span>
                          <h6>
                            <a href="author-2.html">Cody Fisher</a>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="meta-info flex items-center justify-between">
                        <span className="text-bid">Current Bid</span>
                        <h6 className="price gem">
                          <i className="icon-gem" />
                          0,34
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div
                    data-wow-delay="0.1s"
                    className="wow fadeInUp fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  >
                    <div className="tf-card-box style-1">
                      <div className="card-media">
                        <a href="#">
                          <img src="assets/images/box-item/card-item-10.jpg" alt="" />
                        </a>
                        <span className="wishlist-button icon-heart" />
                        <div className="featured-countdown">
                          <span
                            className="js-countdown"
                            data-timer={7500}
                            data-labels="d,h,m,s"
                          />
                        </div>
                        <div className="button-place-bid">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            className="tf-button"
                          >
                            <span>Place Bid</span>
                          </a>
                        </div>
                      </div>
                      <h5 className="name">
                        <a href="nft-detail-2.html">Dayco serpentine belt</a>
                      </h5>
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-02.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Posted by:</span>
                          <h6>
                            <a href="author-2.html">Cody Fisher</a>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="meta-info flex items-center justify-between">
                        <span className="text-bid">Current Bid</span>
                        <h6 className="price gem">
                          <i className="icon-gem" />
                          0,34
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div
                    data-wow-delay="0.2s"
                    className="wow fadeInUp fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  >
                    <div className="tf-card-box style-1">
                      <div className="card-media">
                        <a href="#">
                          <img src="assets/images/box-item/card-item-11.jpg" alt="" />
                        </a>
                        <span className="wishlist-button icon-heart" />
                        <div className="featured-countdown">
                          <span
                            className="js-countdown"
                            data-timer={7500}
                            data-labels="d,h,m,s"
                          />
                        </div>
                        <div className="button-place-bid">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            className="tf-button"
                          >
                            <span>Place Bid</span>
                          </a>
                        </div>
                      </div>
                      <h5 className="name">
                        <a href="nft-detail-2.html">Dayco serpentine belt</a>
                      </h5>
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-03.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Posted by:</span>
                          <h6>
                            <a href="author-2.html">Cody Fisher</a>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="meta-info flex items-center justify-between">
                        <span className="text-bid">Current Bid</span>
                        <h6 className="price gem">
                          <i className="icon-gem" />
                          0,34
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div
                    data-wow-delay="0.3s"
                    className="wow fadeInUp fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  >
                    <div className="tf-card-box style-1">
                      <div className="card-media">
                        <a href="#">
                          <img src="assets/images/box-item/card-item-12.jpg" alt="" />
                        </a>
                        <span className="wishlist-button icon-heart" />
                        <div className="featured-countdown">
                          <span
                            className="js-countdown"
                            data-timer={7500}
                            data-labels="d,h,m,s"
                          />
                        </div>
                        <div className="button-place-bid">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            className="tf-button"
                          >
                            <span>Place Bid</span>
                          </a>
                        </div>
                      </div>
                      <h5 className="name">
                        <a href="nft-detail-2.html">Dayco serpentine belt</a>
                      </h5>
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-04.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Posted by:</span>
                          <h6>
                            <a href="author-2.html">Cody Fisher</a>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="meta-info flex items-center justify-between">
                        <span className="text-bid">Current Bid</span>
                        <h6 className="price gem">
                          <i className="icon-gem" />
                          0,34
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div
                    data-wow-delay="0s"
                    className="wow fadeInUp fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  >
                    <div className="tf-card-box style-1">
                      <div className="card-media">
                        <a href="#">
                          <img src="assets/images/box-item/card-item-13.jpg" alt="" />
                        </a>
                        <span className="wishlist-button icon-heart" />
                        <div className="featured-countdown">
                          <span
                            className="js-countdown"
                            data-timer={7500}
                            data-labels="d,h,m,s"
                          />
                        </div>
                        <div className="button-place-bid">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            className="tf-button"
                          >
                            <span>Place Bid</span>
                          </a>
                        </div>
                      </div>
                      <h5 className="name">
                        <a href="nft-detail-2.html">Dayco serpentine belt</a>
                      </h5>
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-05.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Posted by:</span>
                          <h6>
                            <a href="author-2.html">Cody Fisher</a>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="meta-info flex items-center justify-between">
                        <span className="text-bid">Current Bid</span>
                        <h6 className="price gem">
                          <i className="icon-gem" />
                          0,34
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div
                    data-wow-delay="0.1s"
                    className="wow fadeInUp fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  >
                    <div className="tf-card-box style-1">
                      <div className="card-media">
                        <a href="#">
                          <img src="assets/images/box-item/card-item-14.jpg" alt="" />
                        </a>
                        <span className="wishlist-button icon-heart" />
                        <div className="featured-countdown">
                          <span
                            className="js-countdown"
                            data-timer={7500}
                            data-labels="d,h,m,s"
                          />
                        </div>
                        <div className="button-place-bid">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            className="tf-button"
                          >
                            <span>Place Bid</span>
                          </a>
                        </div>
                      </div>
                      <h5 className="name">
                        <a href="nft-detail-2.html">Dayco serpentine belt</a>
                      </h5>
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-06.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Posted by:</span>
                          <h6>
                            <a href="author-2.html">Cody Fisher</a>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="meta-info flex items-center justify-between">
                        <span className="text-bid">Current Bid</span>
                        <h6 className="price gem">
                          <i className="icon-gem" />
                          0,34
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div
                    data-wow-delay="0.2s"
                    className="wow fadeInUp fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  >
                    <div className="tf-card-box style-1">
                      <div className="card-media">
                        <a href="#">
                          <img src="assets/images/box-item/card-item-15.jpg" alt="" />
                        </a>
                        <span className="wishlist-button icon-heart" />
                        <div className="featured-countdown">
                          <span
                            className="js-countdown"
                            data-timer={7500}
                            data-labels="d,h,m,s"
                          />
                        </div>
                        <div className="button-place-bid">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            className="tf-button"
                          >
                            <span>Place Bid</span>
                          </a>
                        </div>
                      </div>
                      <h5 className="name">
                        <a href="nft-detail-2.html">Dayco serpentine belt</a>
                      </h5>
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-07.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Posted by:</span>
                          <h6>
                            <a href="author-2.html">Cody Fisher</a>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="meta-info flex items-center justify-between">
                        <span className="text-bid">Current Bid</span>
                        <h6 className="price gem">
                          <i className="icon-gem" />
                          0,34
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div
                    data-wow-delay="0.3s"
                    className="wow fadeInUp fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6"
                  >
                    <div className="tf-card-box style-1">
                      <div className="card-media">
                        <a href="#">
                          <img src="assets/images/box-item/card-item-16.jpg" alt="" />
                        </a>
                        <span className="wishlist-button icon-heart" />
                        <div className="featured-countdown">
                          <span
                            className="js-countdown"
                            data-timer={7500}
                            data-labels="d,h,m,s"
                          />
                        </div>
                        <div className="button-place-bid">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            className="tf-button"
                          >
                            <span>Place Bid</span>
                          </a>
                        </div>
                      </div>
                      <h5 className="name">
                        <a href="nft-detail-2.html">Dayco serpentine belt</a>
                      </h5>
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Posted by:</span>
                          <h6>
                            <a href="author-2.html">Cody Fisher</a>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="meta-info flex items-center justify-between">
                        <span className="text-bid">Current Bid</span>
                        <h6 className="price gem">
                          <i className="icon-gem" />
                          0,34
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="tf-card-box style-1">
                      <div className="card-media">
                        <a href="#">
                          <img src="assets/images/box-item/card-item-09.jpg" alt="" />
                        </a>
                        <span className="wishlist-button icon-heart" />
                        <div className="featured-countdown">
                          <span
                            className="js-countdown"
                            data-timer={7500}
                            data-labels="d,h,m,s"
                          />
                        </div>
                        <div className="button-place-bid">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            className="tf-button"
                          >
                            <span>Place Bid</span>
                          </a>
                        </div>
                      </div>
                      <h5 className="name">
                        <a href="nft-detail-2.html">Dayco serpentine belt</a>
                      </h5>
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Posted by:</span>
                          <h6>
                            <a href="author-2.html">Cody Fisher</a>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="meta-info flex items-center justify-between">
                        <span className="text-bid">Current Bid</span>
                        <h6 className="price gem">
                          <i className="icon-gem" />
                          0,34
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="tf-card-box style-1">
                      <div className="card-media">
                        <a href="#">
                          <img src="assets/images/box-item/card-item-10.jpg" alt="" />
                        </a>
                        <span className="wishlist-button icon-heart" />
                        <div className="featured-countdown">
                          <span
                            className="js-countdown"
                            data-timer={7500}
                            data-labels="d,h,m,s"
                          />
                        </div>
                        <div className="button-place-bid">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            className="tf-button"
                          >
                            <span>Place Bid</span>
                          </a>
                        </div>
                      </div>
                      <h5 className="name">
                        <a href="nft-detail-2.html">Dayco serpentine belt</a>
                      </h5>
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-02.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Posted by:</span>
                          <h6>
                            <a href="author-2.html">Cody Fisher</a>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="meta-info flex items-center justify-between">
                        <span className="text-bid">Current Bid</span>
                        <h6 className="price gem">
                          <i className="icon-gem" />
                          0,34
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="tf-card-box style-1">
                      <div className="card-media">
                        <a href="#">
                          <img src="assets/images/box-item/card-item-11.jpg" alt="" />
                        </a>
                        <span className="wishlist-button icon-heart" />
                        <div className="featured-countdown">
                          <span
                            className="js-countdown"
                            data-timer={7500}
                            data-labels="d,h,m,s"
                          />
                        </div>
                        <div className="button-place-bid">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            className="tf-button"
                          >
                            <span>Place Bid</span>
                          </a>
                        </div>
                      </div>
                      <h5 className="name">
                        <a href="nft-detail-2.html">Dayco serpentine belt</a>
                      </h5>
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-03.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Posted by:</span>
                          <h6>
                            <a href="author-2.html">Cody Fisher</a>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="meta-info flex items-center justify-between">
                        <span className="text-bid">Current Bid</span>
                        <h6 className="price gem">
                          <i className="icon-gem" />
                          0,34
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="tf-card-box style-1">
                      <div className="card-media">
                        <a href="#">
                          <img src="assets/images/box-item/card-item-12.jpg" alt="" />
                        </a>
                        <span className="wishlist-button icon-heart" />
                        <div className="featured-countdown">
                          <span
                            className="js-countdown"
                            data-timer={7500}
                            data-labels="d,h,m,s"
                          />
                        </div>
                        <div className="button-place-bid">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            className="tf-button"
                          >
                            <span>Place Bid</span>
                          </a>
                        </div>
                      </div>
                      <h5 className="name">
                        <a href="nft-detail-2.html">Dayco serpentine belt</a>
                      </h5>
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-04.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Posted by:</span>
                          <h6>
                            <a href="author-2.html">Cody Fisher</a>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="meta-info flex items-center justify-between">
                        <span className="text-bid">Current Bid</span>
                        <h6 className="price gem">
                          <i className="icon-gem" />
                          0,34
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="tf-card-box style-1">
                      <div className="card-media">
                        <a href="#">
                          <img src="assets/images/box-item/card-item-13.jpg" alt="" />
                        </a>
                        <span className="wishlist-button icon-heart" />
                        <div className="featured-countdown">
                          <span
                            className="js-countdown"
                            data-timer={7500}
                            data-labels="d,h,m,s"
                          />
                        </div>
                        <div className="button-place-bid">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            className="tf-button"
                          >
                            <span>Place Bid</span>
                          </a>
                        </div>
                      </div>
                      <h5 className="name">
                        <a href="nft-detail-2.html">Dayco serpentine belt</a>
                      </h5>
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-05.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Posted by:</span>
                          <h6>
                            <a href="author-2.html">Cody Fisher</a>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="meta-info flex items-center justify-between">
                        <span className="text-bid">Current Bid</span>
                        <h6 className="price gem">
                          <i className="icon-gem" />
                          0,34
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="tf-card-box style-1">
                      <div className="card-media">
                        <a href="#">
                          <img src="assets/images/box-item/card-item-14.jpg" alt="" />
                        </a>
                        <span className="wishlist-button icon-heart" />
                        <div className="featured-countdown">
                          <span
                            className="js-countdown"
                            data-timer={7500}
                            data-labels="d,h,m,s"
                          />
                        </div>
                        <div className="button-place-bid">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            className="tf-button"
                          >
                            <span>Place Bid</span>
                          </a>
                        </div>
                      </div>
                      <h5 className="name">
                        <a href="nft-detail-2.html">Dayco serpentine belt</a>
                      </h5>
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-06.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Posted by:</span>
                          <h6>
                            <a href="author-2.html">Cody Fisher</a>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="meta-info flex items-center justify-between">
                        <span className="text-bid">Current Bid</span>
                        <h6 className="price gem">
                          <i className="icon-gem" />
                          0,34
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="tf-card-box style-1">
                      <div className="card-media">
                        <a href="#">
                          <img src="assets/images/box-item/card-item-15.jpg" alt="" />
                        </a>
                        <span className="wishlist-button icon-heart" />
                        <div className="featured-countdown">
                          <span
                            className="js-countdown"
                            data-timer={7500}
                            data-labels="d,h,m,s"
                          />
                        </div>
                        <div className="button-place-bid">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            className="tf-button"
                          >
                            <span>Place Bid</span>
                          </a>
                        </div>
                      </div>
                      <h5 className="name">
                        <a href="nft-detail-2.html">Dayco serpentine belt</a>
                      </h5>
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-07.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Posted by:</span>
                          <h6>
                            <a href="author-2.html">Cody Fisher</a>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="meta-info flex items-center justify-between">
                        <span className="text-bid">Current Bid</span>
                        <h6 className="price gem">
                          <i className="icon-gem" />
                          0,34
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="fl-item col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="tf-card-box style-1">
                      <div className="card-media">
                        <a href="#">
                          <img src="assets/images/box-item/card-item-16.jpg" alt="" />
                        </a>
                        <span className="wishlist-button icon-heart" />
                        <div className="featured-countdown">
                          <span
                            className="js-countdown"
                            data-timer={7500}
                            data-labels="d,h,m,s"
                          />
                        </div>
                        <div className="button-place-bid">
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#popup_bid"
                            className="tf-button"
                          >
                            <span>Place Bid</span>
                          </a>
                        </div>
                      </div>
                      <h5 className="name">
                        <a href="nft-detail-2.html">Dayco serpentine belt</a>
                      </h5>
                      <div className="author flex items-center">
                        <div className="avatar">
                          <img
                            src="assets/images/avatar/avatar-box-01.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="info">
                          <span>Posted by:</span>
                          <h6>
                            <a href="author-2.html">Cody Fisher</a>{" "}
                          </h6>
                        </div>
                      </div>
                      <div className="divider" />
                      <div className="meta-info flex items-center justify-between">
                        <span className="text-bid">Current Bid</span>
                        <h6 className="price gem">
                          <i className="icon-gem" />
                          0,34
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 load-more">
                    <a id="button-loadmore" className="tf-button-loadmore">
                      <span>Load More</span>
                      <i className="icon-loading-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer */}
            {/* /#footer */}
          </div>
          {/* /#page */}
          {/* Modal Popup Bid */}
          <div
            className="modal fade popup"
            id="popup_bid"
            tabIndex={-1}
            role="dialog"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <div className="modal-body">
                  <div className="image">
                    <img src="assets/images/backgroup-section/popup.png" alt="" />
                  </div>
                  <div className="logo-rotate">
                    <img
                      className=""
                      src="assets/images/item-background/item6-img.png"
                      alt=""
                    />
                  </div>
                  <h2>Subscribe to our newsletter</h2>
                  <p>Subscribe for our newsletter to stay in the loop</p>
                  <fieldset className="email">
                    <input
                      type="email"
                      className="style-1"
                      id="email"
                      placeholder="Email address*"
                      name="email"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                    />
                  </fieldset>
                  <a href="" className="tf-button style-1 h50">
                    Subscribe
                    <i className="icon-arrow-up-right2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /#wrapper */}
        <div className="tf-mouse tf-mouse-outer" />
        <div className="tf-mouse tf-mouse-inner" />
        <div className="progress-wrap active-progress">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              style={{
                transition: "stroke-dashoffset 10ms linear 0s",
                strokeDasharray: "307.919, 307.919",
                strokeDashoffset: "286.138"
              }}
            />
          </svg>
        </div>

        <Script src="assets/js/jquery.min.js"></Script>
        <Script src="assets/js/popper.min.js"></Script>
        <Script src="assets/js/swiper-bundle.min.js"></Script>
        <Script src="assets/js/swiper.js"></Script>
        <Script src="assets/js/count-down.js"></Script>
        <Script src="assets/js/simpleParallax.min.js"></Script>
        <Script src="assets/js/gsap.js"></Script>
        <Script src="assets/js/SplitText.js"></Script>
        <Script src="assets/js/wow.min.js"></Script>
        <Script src="assets/js/ScrollTrigger.js"></Script>
        <Script src="assets/js/gsap-animation.js"></Script>
        <Script src="assets/js/tsparticles.min.js"></Script>
        <Script src="assets/js/tsparticles.js"></Script>
        <Script src="assets/js/main.js"></Script>
        <Script src="assets/js/bootstrap.bundle.min.js"></Script>
        <Script src="assets/js/bootstrap.min.js"></Script>
    </>
  );
};

export default Home;

import { FC } from 'react';
import Script from 'next/script';

const About: FC = () => {
  return (
    <div className="body counter-scroll">
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
          <div id="page" className="pt-40 about-us-page">
            <div className="page-title about-us relative">
              <div className="themesflat-container">
                <div className="row">
                  <div className="col-12 pages-title">
                    <div className="content">
                      <h1 data-wow-delay="0s" className="wow fadeInUp">
                        This unique story driven nft experience
                      </h1>
                      <p data-wow-delay="0.1s" className="wow fadeInUp">
                        get started with the easiest and most secure platform to buy
                        and trade digital ART and NFTs
                      </p>
                      <div
                        data-wow-delay="0.2s"
                        className="wow fadeInUp flat-button flex justify-center"
                      >
                        <a href="#" className="tf-button style-1 h50 w190">
                          Get started <i className="icon-arrow-up-right2" />
                        </a>
                      </div>
                    </div>
                    <div className="icon-background">
                      <img
                        className="absolute item1"
                        src="assets/images/item-background/item11.png"
                        alt=""
                      />
                      <img
                        className="absolute item2"
                        src="assets/images/item-background/item10.png"
                        alt=""
                      />
                      <img
                        className="absolute item3"
                        src="assets/images/item-background/item12.png"
                        alt=""
                      />
                      <img
                        className="absolute item4"
                        src="assets/images/item-background/item13.png"
                        alt=""
                      />
                    </div>
                    <div className="relative">
                      <div
                        className="swiper-container carousel3-type2"
                        data-swiper='{
                              "loop":false,
                              "slidesPerView": 1,
                              "observer": true,
                              "observeParents": true,
                              "spaceBetween": 12,
                              "breakpoints": {
                                  "768": {
                                      "slidesPerView": 2
                                  },
                                  "1024": {
                                      "slidesPerView": 3
                                  }
                              }
                          }'
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="tf-card-box style-7">
                              <div className="card-media">
                                <a href="#">
                                  <img
                                    src="assets/images/box-item/about-us-03.jpg"
                                    alt=""
                                  />
                                </a>
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
                          </div>
                          <div className="swiper-slide">
                            <div className="tf-card-box style-7">
                              <div className="card-media">
                                <a href="#">
                                  <img
                                    src="assets/images/box-item/about-us-01.jpg"
                                    alt=""
                                  />
                                </a>
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
                          </div>
                          <div className="swiper-slide">
                            <div className="tf-card-box style-7">
                              <div className="card-media">
                                <a href="#">
                                  <img
                                    src="assets/images/box-item/about-us-02.jpg"
                                    alt=""
                                  />
                                </a>
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
                          </div>
                          <div className="swiper-slide">
                            <div className="tf-card-box style-7">
                              <div className="card-media">
                                <a href="#">
                                  <img
                                    src="assets/images/box-item/about-us-01.jpg"
                                    alt=""
                                  />
                                </a>
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-section-2 counter">
              <div className="themesflat-container">
                <div className="row">
                  <div className="col-12">
                    <div className="counter__body-1">
                      <div className="counter-1">
                        <div className="number-counter">
                          <span
                            className="number"
                            data-speed={3000}
                            data-to={99}
                            data-inviewport="yes"
                          >
                            99
                          </span>
                          K+
                        </div>
                        <h6 className="title">Artwork</h6>
                      </div>
                      <div className="space">
                        <svg
                          width={80}
                          height={19}
                          viewBox="0 0 80 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.2"
                            x="0.75"
                            y="9.25"
                            width="29.5"
                            height="0.5"
                            stroke="white"
                            strokeWidth="0.5"
                            strokeDasharray="4 2"
                          />
                          <circle
                            opacity="0.2"
                            cx={40}
                            cy="9.5"
                            r={9}
                            stroke="white"
                          />
                          <circle
                            opacity="0.2"
                            cx={40}
                            cy="9.5"
                            r="4.5"
                            fill="white"
                          />
                          <rect
                            opacity="0.2"
                            x="49.75"
                            y="9.25"
                            width="29.5"
                            height="0.5"
                            stroke="white"
                            strokeWidth="0.5"
                            strokeDasharray="4 2"
                          />
                        </svg>
                      </div>
                      <div className="counter-1">
                        <div className="number-counter">
                          <span
                            className="number"
                            data-speed={3000}
                            data-to={72}
                            data-inviewport="yes"
                          >
                            72
                          </span>
                          K+
                        </div>
                        <h6 className="title">Auction</h6>
                      </div>
                      <div className="space">
                        <svg
                          width={80}
                          height={19}
                          viewBox="0 0 80 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.2"
                            x="0.75"
                            y="9.25"
                            width="29.5"
                            height="0.5"
                            stroke="white"
                            strokeWidth="0.5"
                            strokeDasharray="4 2"
                          />
                          <circle
                            opacity="0.2"
                            cx={40}
                            cy="9.5"
                            r={9}
                            stroke="white"
                          />
                          <circle
                            opacity="0.2"
                            cx={40}
                            cy="9.5"
                            r="4.5"
                            fill="white"
                          />
                          <rect
                            opacity="0.2"
                            x="49.75"
                            y="9.25"
                            width="29.5"
                            height="0.5"
                            stroke="white"
                            strokeWidth="0.5"
                            strokeDasharray="4 2"
                          />
                        </svg>
                      </div>
                      <div className="counter-1">
                        <div className="number-counter">
                          <span
                            className="number"
                            data-speed={3000}
                            data-to={35}
                            data-inviewport="yes"
                          >
                            35
                          </span>
                          K+
                        </div>
                        <h6 className="title">Artist</h6>
                      </div>
                      <div className="space">
                        <svg
                          width={80}
                          height={19}
                          viewBox="0 0 80 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.2"
                            x="0.75"
                            y="9.25"
                            width="29.5"
                            height="0.5"
                            stroke="white"
                            strokeWidth="0.5"
                            strokeDasharray="4 2"
                          />
                          <circle
                            opacity="0.2"
                            cx={40}
                            cy="9.5"
                            r={9}
                            stroke="white"
                          />
                          <circle
                            opacity="0.2"
                            cx={40}
                            cy="9.5"
                            r="4.5"
                            fill="white"
                          />
                          <rect
                            opacity="0.2"
                            x="49.75"
                            y="9.25"
                            width="29.5"
                            height="0.5"
                            stroke="white"
                            strokeWidth="0.5"
                            strokeDasharray="4 2"
                          />
                        </svg>
                      </div>
                      <div className="counter-1">
                        <div className="number-counter">
                          <span
                            className="number"
                            data-speed={3000}
                            data-to={128}
                            data-inviewport="yes"
                          >
                            128
                          </span>
                          K+
                        </div>
                        <h6 className="title">NFTs Created</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-section-2 widget-box-icon">
              <div className="themesflat-container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="heading-section-1">
                      <h2 className="tf-title pb-40">Why choose us</h2>
                    </div>
                  </div>
                  <div data-wow-delay="0s" className="wow fadeInUp col-md-4">
                    <div className="box-icon-item">
                      <img src="assets/images/item-background/about-01.png" alt="" />
                      <div className="title">
                        <a href="#">Flexible payment</a>
                      </div>
                      <p>
                        Fusce non dignissim velit, sit amet semper eros. Quisque orci
                        est
                      </p>
                    </div>
                  </div>
                  <div data-wow-delay="0.1s" className="wow fadeInUp col-md-4">
                    <div className="box-icon-item">
                      <img src="assets/images/item-background/about-02.png" alt="" />
                      <div className="title">
                        <a href="#">Huge data warehouse</a>
                      </div>
                      <p>
                        Fusce non dignissim velit, sit amet semper eros. Quisque orci
                        est
                      </p>
                    </div>
                  </div>
                  <div data-wow-delay="0.2s" className="wow fadeInUp col-md-4">
                    <div className="box-icon-item">
                      <img src="assets/images/item-background/about-03.png" alt="" />
                      <div className="title">
                        <a href="#">3 layer security</a>
                      </div>
                      <p>
                        Fusce non dignissim velit, sit amet semper eros. Quisque orci
                        est
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget-our-team">
              <div className="themesflat-container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="heading-section-1">
                      <h2 className="tf-title pb-40">Meet Our Amazing Team</h2>
                    </div>
                  </div>
                  <div data-wow-delay="0s" className="wow fadeInUp col-md-2 col-6">
                    <div className="our-team-item pb-38 text-center">
                      <img src="assets/images/avatar/team-01.png" alt="" />
                      <div className="name">
                        <a href="#">Marvin McKinney</a>
                      </div>
                      <div className="info">CEO, Director</div>
                      <div className="widget-social">
                        <ul className="flex justify-center">
                          <li>
                            <a href="#" className="icon-facebook" />
                          </li>
                          <li>
                            <a href="#" className="icon-twitter" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div data-wow-delay="0.1s" className="wow fadeInUp col-md-2 col-6">
                    <div className="our-team-item pb-38 text-center">
                      <img src="assets/images/avatar/team-02.png" alt="" />
                      <div className="name">
                        <a href="#">Marvin McKinney</a>
                      </div>
                      <div className="info">CEO, Director</div>
                      <div className="widget-social">
                        <ul className="flex justify-center">
                          <li>
                            <a href="#" className="icon-facebook" />
                          </li>
                          <li>
                            <a href="#" className="icon-twitter" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div data-wow-delay="0.2s" className="wow fadeInUp col-md-2 col-6">
                    <div className="our-team-item pb-38 text-center">
                      <img src="assets/images/avatar/team-03.png" alt="" />
                      <div className="name">
                        <a href="#">Marvin McKinney</a>
                      </div>
                      <div className="info">CEO, Director</div>
                      <div className="widget-social">
                        <ul className="flex justify-center">
                          <li>
                            <a href="#" className="icon-facebook" />
                          </li>
                          <li>
                            <a href="#" className="icon-twitter" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div data-wow-delay="0.3s" className="wow fadeInUp col-md-2 col-6">
                    <div className="our-team-item pb-38 text-center">
                      <img src="assets/images/avatar/team-04.png" alt="" />
                      <div className="name">
                        <a href="#">Marvin McKinney</a>
                      </div>
                      <div className="info">CEO, Director</div>
                      <div className="widget-social">
                        <ul className="flex justify-center">
                          <li>
                            <a href="#" className="icon-facebook" />
                          </li>
                          <li>
                            <a href="#" className="icon-twitter" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div data-wow-delay="0.4s" className="wow fadeInUp col-md-2 col-6">
                    <div className="our-team-item pb-38 text-center">
                      <img src="assets/images/avatar/team-05.png" alt="" />
                      <div className="name">
                        <a href="#">Marvin McKinney</a>
                      </div>
                      <div className="info">CEO, Director</div>
                      <div className="widget-social">
                        <ul className="flex justify-center">
                          <li>
                            <a href="#" className="icon-facebook" />
                          </li>
                          <li>
                            <a href="#" className="icon-twitter" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div data-wow-delay="0.5s" className="wow fadeInUp col-md-2 col-6">
                    <div className="our-team-item pb-38 text-center">
                      <img src="assets/images/avatar/team-06.png" alt="" />
                      <div className="name">
                        <a href="#">Marvin McKinney</a>
                      </div>
                      <div className="info">CEO, Director</div>
                      <div className="widget-social">
                        <ul className="flex justify-center">
                          <li>
                            <a href="#" className="icon-facebook" />
                          </li>
                          <li>
                            <a href="#" className="icon-twitter" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-center">
                  <div data-wow-delay="0s" className="wow fadeInUp col-md-2 col-6">
                    <div className="our-team-item pb-40 text-center">
                      <img src="assets/images/avatar/team-07.png" alt="" />
                      <div className="name">
                        <a href="#">Marvin McKinney</a>
                      </div>
                      <div className="info">CEO, Director</div>
                      <div className="widget-social">
                        <ul className="flex justify-center">
                          <li>
                            <a href="#" className="icon-facebook" />
                          </li>
                          <li>
                            <a href="#" className="icon-twitter" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div data-wow-delay="0.1s" className="wow fadeInUp col-md-2 col-6">
                    <div className="our-team-item pb-40 text-center">
                      <img src="assets/images/avatar/team-08.png" alt="" />
                      <div className="name">
                        <a href="#">Marvin McKinney</a>
                      </div>
                      <div className="info">CEO, Director</div>
                      <div className="widget-social">
                        <ul className="flex justify-center">
                          <li>
                            <a href="#" className="icon-facebook" />
                          </li>
                          <li>
                            <a href="#" className="icon-twitter" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div data-wow-delay="0.2s" className="wow fadeInUp col-md-2 col-6">
                    <div className="our-team-item pb-40 text-center">
                      <img src="assets/images/avatar/team-09.png" alt="" />
                      <div className="name">
                        <a href="#">Marvin McKinney</a>
                      </div>
                      <div className="info">CEO, Director</div>
                      <div className="widget-social">
                        <ul className="flex justify-center">
                          <li>
                            <a href="#" className="icon-facebook" />
                          </li>
                          <li>
                            <a href="#" className="icon-twitter" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div data-wow-delay="0.3s" className="wow fadeInUp col-md-2 col-6">
                    <div className="our-team-item pb-40 text-center">
                      <img src="assets/images/avatar/team-10.png" alt="" />
                      <div className="name">
                        <a href="#">Marvin McKinney</a>
                      </div>
                      <div className="info">CEO, Director</div>
                      <div className="widget-social">
                        <ul className="flex justify-center">
                          <li>
                            <a href="#" className="icon-facebook" />
                          </li>
                          <li>
                            <a href="#" className="icon-twitter" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div data-wow-delay="0.4s" className="wow fadeInUp col-md-2 col-6">
                    <div className="our-team-item pb-40 text-center">
                      <img src="assets/images/avatar/team-11.png" alt="" />
                      <div className="name">
                        <a href="#">Marvin McKinney</a>
                      </div>
                      <div className="info">CEO, Director</div>
                      <div className="widget-social">
                        <ul className="flex justify-center">
                          <li>
                            <a href="#" className="icon-facebook" />
                          </li>
                          <li>
                            <a href="#" className="icon-twitter" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <a href="#" className="tf-button style-1 h50 w190 m-auto">
                      Join us
                      <i className="icon-arrow-up-right2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-section-2 wrap-accordion pt-80">
              <div className="themesflat-container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="heading-section-1">
                      <h2 className="tf-title pb-40">Frequently Asked Questions</h2>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="flat-accordion">
                      <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                        <h6 className="toggle-title">
                          1. Why are NFTs becoming popular?
                        </h6>
                        <div className="toggle-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod.
                          </p>
                        </div>
                      </div>
                      <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                        <h6 className="toggle-title">
                          2. How do I keep my NFTs safe?
                        </h6>
                        <div className="toggle-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod.
                          </p>
                        </div>
                      </div>
                      <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                        <h6 className="toggle-title">3. What is blockchain?</h6>
                        <div className="toggle-content">
                          <p>
                            Blockchain is a shared, immutable ledger that facilitates
                            the process of recording transactions and tracking assets
                            in a business network. An asset can be tangible (a house,
                            car, cash, land) or intangible (intellectual property,
                            patents, copyrights, branding). Virtually anything of
                            value can be tracked and traded on a blockchain network,
                            reducing risk and cutting costs for all involved
                          </p>
                        </div>
                      </div>
                      <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                        <h6 className="toggle-title">4. What is an NFT?</h6>
                        <div className="toggle-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod.
                          </p>
                        </div>
                      </div>
                      <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                        <h6 className="toggle-title">
                          5. How do I set up my Ledger?
                        </h6>
                        <div className="toggle-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="flat-accordion2">
                      <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                        <h6 className="toggle-title">
                          6. Why are NFTs becoming popular?
                        </h6>
                        <div className="toggle-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod.
                          </p>
                        </div>
                      </div>
                      <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                        <h6 className="toggle-title">
                          7. How do I keep my NFTs safe?
                        </h6>
                        <div className="toggle-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod.
                          </p>
                        </div>
                      </div>
                      <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                        <h6 className="toggle-title">8. What is blockchain?</h6>
                        <div className="toggle-content">
                          <p>
                            Blockchain is a shared, immutable ledger that facilitates
                            the process of recording transactions and tracking assets
                            in a business network. An asset can be tangible (a house,
                            car, cash, land) or intangible (intellectual property,
                            patents, copyrights, branding). Virtually anything of
                            value can be tracked and traded on a blockchain network,
                            reducing risk and cutting costs for all involved
                          </p>
                        </div>
                      </div>
                      <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                        <h6 className="toggle-title">9. What is an NFT?</h6>
                        <div className="toggle-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod.
                          </p>
                        </div>
                      </div>
                      <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                        <h6 className="toggle-title">
                          10. How do I set up my Ledger?
                        </h6>
                        <div className="toggle-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation.Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="content">
                      <div className="text">Still have question?</div>
                      <p>
                        Can't find what you're looking for? Please{" "}
                        <a href="#" className="tf-color">
                          chat to our friendly team
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tf-section-2">
              <div className="themesflat-container">
                <div className="row">
                  <div className="col-12">
                    <div className="widget-income">
                      <div className="title">
                        Generate passive income with the platform{" "}
                        <span className="tf-color">Open9</span>
                      </div>
                      <p>
                        get started with the easiest and most secure platform to buy
                        and trade digital ART and NFTs
                      </p>
                      <a href="#" className="tf-button style-1 h50 w190">
                        Get started
                        <i className="icon-arrow-up-right2" />
                      </a>
                      <div className="image">
                        <img
                          className="iphone"
                          src="assets/images/box-icon/iphone.png"
                          alt=""
                        />
                        <img
                          className="icon-1"
                          src="assets/images/item-background/item11.png"
                          alt=""
                        />
                        <img
                          className="icon-2"
                          src="assets/images/item-background/item12.png"
                          alt=""
                        />
                        <img
                          className="icon-3"
                          src="assets/images/item-background/item13.png"
                          alt=""
                        />
                        <img
                          className="icon-4"
                          src="assets/images/item-background/item14.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default About;

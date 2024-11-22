import { FC } from 'react';
import Script from 'next/script';

const Detail: FC = () => {
    return (
        <div className="body header-fixed counter-scroll">
            <>
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
                            <div className="tf-section-2 product-detail">
                                <div className="themesflat-container">
                                    <div className="row">
                                        <div data-wow-delay="0s" className="wow fadeInLeft col-md-6">
                                            <div className="tf-card-box style-5 mb-0">
                                                <div className="card-media mb-0">
                                                    <a href="#">
                                                        <img
                                                            src="assets/images/box-item/product-detail-01.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <h6 className="price gem">
                                                    <i className="icon-gem" />
                                                </h6>
                                                <div className="wishlist-button">
                                                    10
                                                    <i className="icon-heart" />
                                                </div>
                                                <div className="featured-countdown">
                                                    <span
                                                        className="js-countdown"
                                                        data-timer={7500}
                                                        data-labels="d,h,m,s"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div
                                                data-wow-delay="0s"
                                                className="wow fadeInRight infor-product"
                                            >
                                                <div className="text">
                                                    8SIAN Main Collection{" "}
                                                    <span className="icon-tick">
                                                        <span className="path1" />
                                                        <span className="path2" />
                                                    </span>
                                                </div>
                                                <div className="menu_card">
                                                    <div className="dropdown">
                                                        <div className="icon">
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="btn-link"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="icon-link-1" />
                                                            </a>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="icon-link" />
                                                                    Copy link
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="icon-facebook" />
                                                                    Share on facebook
                                                                </a>
                                                                <a className="dropdown-item mb-0" href="#">
                                                                    <i className="icon-twitter" />
                                                                    Share on twitter
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown">
                                                        <div className="icon">
                                                            <a
                                                                href="javascript:void(0);"
                                                                className="btn-link"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                            >
                                                                <i className="icon-content" />
                                                            </a>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="icon-refresh" />
                                                                    Refresh metadata
                                                                </a>
                                                                <a className="dropdown-item mb-0" href="#">
                                                                    <i className="icon-report" />
                                                                    Report
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h2>Themesflat #0270</h2>
                                                <div className="author flex items-center mb-30">
                                                    <div className="avatar">
                                                        <img
                                                            src="assets/images/avatar/avatar-box-05.jpg"
                                                            alt="Image"
                                                        />
                                                    </div>
                                                    <div className="info">
                                                        <span>Owned by:</span>
                                                        <h6>
                                                            <a href="author-1.html">Marvin McKinney</a>{" "}
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div className="meta mb-20">
                                                    <div className="meta-item view">
                                                        <i className="icon-show" />
                                                        208 view
                                                    </div>
                                                    <div className="meta-item rating">
                                                        <i className="icon-link-2" />
                                                        Top #2 trending
                                                    </div>
                                                    <div className="meta-item favorites">
                                                        <i className="icon-heart" />
                                                        10 favorites
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-wow-delay="0s"
                                                className="wow fadeInRight product-item time-sales"
                                            >
                                                <h6>
                                                    <i className="icon-clock" />
                                                    Sale ends May 22 at 9:39
                                                </h6>
                                                <div className="content">
                                                    <div className="text">Current price</div>
                                                    <div className="flex justify-between">
                                                        <p>
                                                            0,032 ETH <span>$58,11</span>
                                                        </p>
                                                        <a
                                                            href="#"
                                                            data-toggle="modal"
                                                            data-target="#popup_bid"
                                                            className="tf-button style-1 h50 w216"
                                                        >
                                                            Place a bid
                                                            <i className="icon-arrow-up-right2" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                data-wow-delay="0s"
                                                className="wow fadeInRight product-item description"
                                            >
                                                <h6>
                                                    <i className="icon-description" />
                                                    Description
                                                </h6>
                                                <i className="icon-keyboard_arrow_down" />
                                                <div className="content">
                                                    <p>
                                                        8,888 NFTs of beautiful, Asian women painstakingly-crafted
                                                        where even the most intricate details are steeped in
                                                        historical significance. We envision 8SIAN being a global,
                                                        inclusive community <span>see more</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div
                                                data-wow-delay="0s"
                                                className="wow fadeInRight product-item history"
                                            >
                                                <h6>
                                                    <i className="icon-description" />
                                                    Price History
                                                </h6>
                                                <i className="icon-keyboard_arrow_down" />
                                                <div className="content">
                                                    <div className="chart">
                                                        <canvas id="myChart" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp col-12">
                                            <div className="product-item details">
                                                <h6>
                                                    <i className="icon-description" />
                                                    Details
                                                </h6>
                                                <i className="icon-keyboard_arrow_down" />
                                                <div className="content">
                                                    <div className="details-item">
                                                        <span>Contract Address</span>
                                                        <span className="tf-color">0x1984...c38f</span>
                                                    </div>
                                                    <div className="details-item">
                                                        <span>Token ID</span>
                                                        <span className="tf-color">0270</span>
                                                    </div>
                                                    <div className="details-item">
                                                        <span>Token Standard</span>
                                                        <span className="">ERC-721</span>
                                                    </div>
                                                    <div className="details-item">
                                                        <span>Chain</span>
                                                        <span className="">Ethereum</span>
                                                    </div>
                                                    <div className="details-item">
                                                        <span>Last Updated</span>
                                                        <span className="">8 months ago</span>
                                                    </div>
                                                    <div className="details-item mb-0">
                                                        <span>Creator Earnings</span>
                                                        <span className="">8%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp col-12">
                                            <div className="product-item traits style-1">
                                                <h6>
                                                    <i className="icon-description" />
                                                    Traits
                                                </h6>
                                                <i className="icon-keyboard_arrow_down" />
                                                <div className="content">
                                                    <div className="trait-item">
                                                        <p>Apparel</p>
                                                        <div className="title">Bathrobe Red 1%</div>
                                                        <p>Floor: 0,056 ETH</p>
                                                    </div>
                                                    <div className="trait-item">
                                                        <p>Background</p>
                                                        <div className="title">Orange 5%</div>
                                                        <p>Floor: 0,056 ETH</p>
                                                    </div>
                                                    <div className="trait-item">
                                                        <p>Earrings</p>
                                                        <div className="title">None 60%</div>
                                                        <p>Floor: 0,037 ETH</p>
                                                    </div>
                                                    <div className="trait-item">
                                                        <p>Apparel</p>
                                                        <div className="title">Bathrobe Red 1%</div>
                                                        <p>Floor: 0,056 ETH</p>
                                                    </div>
                                                    <div className="trait-item">
                                                        <p>Background</p>
                                                        <div className="title">Orange 5%</div>
                                                        <p>Floor: 0,056 ETH</p>
                                                    </div>
                                                    <div className="trait-item">
                                                        <p>Earrings</p>
                                                        <div className="title">None 60%</div>
                                                        <p>Floor: 0,037 ETH</p>
                                                    </div>
                                                    <div className="trait-item">
                                                        <p>Apparel</p>
                                                        <div className="title">Bathrobe Red 1%</div>
                                                        <p>Floor: 0,056 ETH</p>
                                                    </div>
                                                    <div className="trait-item">
                                                        <p>Background</p>
                                                        <div className="title">Orange 5%</div>
                                                        <p>Floor: 0,056 ETH</p>
                                                    </div>
                                                    <div className="trait-item">
                                                        <p>Earrings</p>
                                                        <div className="title">None 60%</div>
                                                        <p>Floor: 0,037 ETH</p>
                                                    </div>
                                                    <div className="trait-item">
                                                        <p>Earrings</p>
                                                        <div className="title">None 60%</div>
                                                        <p>Floor: 0,037 ETH</p>
                                                    </div>
                                                    <div className="trait-item">
                                                        <p>Apparel</p>
                                                        <div className="title">Bathrobe Red 1%</div>
                                                        <p>Floor: 0,056 ETH</p>
                                                    </div>
                                                    <div className="trait-item">
                                                        <p>Background</p>
                                                        <div className="title">Orange 5%</div>
                                                        <p>Floor: 0,056 ETH</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp col-12">
                                            <div className="product-item offers">
                                                <h6>
                                                    <i className="icon-description" />
                                                    Offers
                                                </h6>
                                                <i className="icon-keyboard_arrow_down" />
                                                <div className="content">
                                                    <div className="table-heading">
                                                        <div className="column">Price</div>
                                                        <div className="column">USD Price</div>
                                                        <div className="column">Quantity</div>
                                                        <div className="column">Floor Diference</div>
                                                        <div className="column">Expiration</div>
                                                        <div className="column">Form</div>
                                                    </div>
                                                    <div className="table-item">
                                                        <div className="column">
                                                            <h6 className="price gem">
                                                                <i className="icon-gem" />
                                                                0,0034
                                                            </h6>
                                                        </div>
                                                        <div className="column">$6,60</div>
                                                        <div className="column">3</div>
                                                        <div className="column">90% below</div>
                                                        <div className="column">In 26 day</div>
                                                        <div className="column">
                                                            <span className="tf-color">273E40</span>
                                                        </div>
                                                    </div>
                                                    <div className="table-item">
                                                        <div className="column">
                                                            <h6 className="price gem">
                                                                <i className="icon-gem" />
                                                                0,0034
                                                            </h6>
                                                        </div>
                                                        <div className="column">$6,60</div>
                                                        <div className="column">3</div>
                                                        <div className="column">90% below</div>
                                                        <div className="column">In 26 day</div>
                                                        <div className="column">
                                                            <span className="tf-color">273E40</span>
                                                        </div>
                                                    </div>
                                                    <div className="table-item">
                                                        <div className="column">
                                                            <h6 className="price gem">
                                                                <i className="icon-gem" />
                                                                0,0034
                                                            </h6>
                                                        </div>
                                                        <div className="column">$6,60</div>
                                                        <div className="column">3</div>
                                                        <div className="column">90% below</div>
                                                        <div className="column">In 26 day</div>
                                                        <div className="column">
                                                            <span className="tf-color">273E40</span>
                                                        </div>
                                                    </div>
                                                    <div className="table-item">
                                                        <div className="column">
                                                            <h6 className="price gem">
                                                                <i className="icon-gem" />
                                                                0,0034
                                                            </h6>
                                                        </div>
                                                        <div className="column">$6,60</div>
                                                        <div className="column">3</div>
                                                        <div className="column">90% below</div>
                                                        <div className="column">In 26 day</div>
                                                        <div className="column">
                                                            <span className="tf-color">273E40</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp col-12">
                                            <div className="product-item item-activity mb-0">
                                                <h6>
                                                    <i className="icon-two-arrow rotateZ90" />
                                                    Item activity
                                                </h6>
                                                <i className="icon-keyboard_arrow_down" />
                                                <div className="content">
                                                    <div className="table-heading">
                                                        <div className="column">Event</div>
                                                        <div className="column">Price</div>
                                                        <div className="column">Form</div>
                                                        <div className="column">To</div>
                                                        <div className="column">Date</div>
                                                    </div>
                                                    <div className="table-item">
                                                        <div className="column flex items-center">
                                                            <i className="icon-two-arrow" />
                                                            Transfer
                                                        </div>
                                                        <div className="column">-/-</div>
                                                        <div className="column">
                                                            <span className="tf-color">985DE3</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="tf-color">Nosyu</span>
                                                        </div>
                                                        <div className="column">19h ago</div>
                                                    </div>
                                                    <div className="table-item">
                                                        <div className="column flex items-center">
                                                            <i className="icon-sale" />
                                                            Sale
                                                        </div>
                                                        <div className="column">
                                                            <h6 className="price gem">
                                                                <i className="icon-gem" />
                                                                0,0319
                                                            </h6>
                                                        </div>
                                                        <div className="column">
                                                            <span className="tf-color">985DE3</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="tf-color">Nosyu</span>
                                                        </div>
                                                        <div className="column">19h ago</div>
                                                    </div>
                                                    <div className="table-item">
                                                        <div className="column flex items-center">
                                                            <i className="icon-two-arrow" />
                                                            Transfer
                                                        </div>
                                                        <div className="column">-/-</div>
                                                        <div className="column">
                                                            <span className="tf-color">985DE3</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="tf-color">Nosyu</span>
                                                        </div>
                                                        <div className="column">19h ago</div>
                                                    </div>
                                                    <div className="table-item">
                                                        <div className="column flex items-center">
                                                            <i className="icon-sale" />
                                                            Sale
                                                        </div>
                                                        <div className="column">
                                                            <h6 className="price gem">
                                                                <i className="icon-gem" />
                                                                0,0319
                                                            </h6>
                                                        </div>
                                                        <div className="column">
                                                            <span className="tf-color">985DE3</span>
                                                        </div>
                                                        <div className="column">
                                                            <span className="tf-color">Nosyu</span>
                                                        </div>
                                                        <div className="column">19h ago</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tf-section-2 featured-item style-bottom">
                                <div className="themesflat-container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="heading-section pb-20">
                                                <h2 className="tf-title ">Related artworks</h2>
                                                <a href="explore-3.html" className="">
                                                    Discover more <i className="icon-arrow-right2" />
                                                </a>
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
                                                                        src="assets/images/box-item/card-item-14.jpg"
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
                                                </div>
                                                <div className="swiper-pagination" />
                                                <div className="slider-next swiper-button-next" />
                                                <div className="slider-prev swiper-button-prev" />
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
                </>

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

export default Detail;
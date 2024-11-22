import { FC } from 'react';
import Script from 'next/script';

const Contact: FC = () => {
    return (
        <div className="body header-fixed">
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
                        <div id="page" className="pt-40 contact-us-page relative">
                            <div className="flat-title-page">
                                <div className="themesflat-container">
                                    <div className="row">
                                        <div className="col-12">
                                            <h1 className="heading text-center">Get In Touch</h1>
                                            <ul className="breadcrumbs flex justify-center">
                                                <li className="icon-keyboard_arrow_right">
                                                    <a href="/">Home</a>
                                                </li>
                                                <li>
                                                    <a href="#">Explore</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tf-section-2 contact-us">
                                <div className="themesflat-container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="widget-gg-map">
                                                <iframe
                                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d97101.88872869895!2d-74.22688511715344!3d40.487336736141906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1689125037376!5m2!1svi!2s"
                                                    width="100%"
                                                    height={460}
                                                    style={{ border: 0 }}
                                                    allowFullScreen
                                                    loading="lazy"
                                                    referrerPolicy="no-referrer-when-downgrade"
                                                />
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
                                                <h2 className="tf-title pb-20">Information</h2>
                                                <p className="pb-40">
                                                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                    cillum dolore eu fugiat nulla pariatur.
                                                </p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp col-md-4">
                                            <div className="box-icon-item">
                                                <img src="assets/images/box-icon/address.png" alt="" />
                                                <div className="title">
                                                    <a href="#">Office address</a>
                                                </div>
                                                <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0.1s" className="wow fadeInUp col-md-4">
                                            <div className="box-icon-item">
                                                <img src="assets/images/box-icon/email.png" alt="" />
                                                <div className="title">
                                                    <a href="#">Email</a>
                                                </div>
                                                <p>open9@support.com open9vietnam@support.com</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0.2s" className="wow fadeInUp col-md-4">
                                            <div className="box-icon-item">
                                                <img src="assets/images/box-icon/phone.png" alt="" />
                                                <div className="title">
                                                    <a href="#">Phone number</a>
                                                </div>
                                                <p>
                                                    (316) 555-0116 <br />
                                                    (219) 555-0114
                                                </p>
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
                                                <h2 className="tf-title pb-20">Contact us</h2>
                                                <p className="pb-40">
                                                    Have A Question? Need Help? Don't Hesitate, Drop Us A Line
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <form id="commentform" className="comment-form">
                                                <div className="flex gap30">
                                                    <fieldset className="name">
                                                        <input
                                                            className="style-1"
                                                            type="text"
                                                            id="name"
                                                            placeholder="Your name*"
                                                            name="name"
                                                            tabIndex={2}
                                                            defaultValue=""
                                                            aria-required="true"
                                                        />
                                                    </fieldset>
                                                    <fieldset className="email">
                                                        <input
                                                            className="style-1"
                                                            type="email"
                                                            id="email"
                                                            placeholder="Email address*"
                                                            name="email"
                                                            tabIndex={2}
                                                            defaultValue=""
                                                            aria-required="true"
                                                        />
                                                    </fieldset>
                                                    <fieldset className="subject">
                                                        <input
                                                            className="style-1"
                                                            type="text"
                                                            id="subject"
                                                            placeholder="Subject"
                                                            name="subject"
                                                            tabIndex={2}
                                                            defaultValue=""
                                                            aria-required="true"
                                                        />
                                                    </fieldset>
                                                </div>
                                                <fieldset className="message">
                                                    <textarea
                                                        className="style-1"
                                                        id="message"
                                                        name="message"
                                                        rows={4}
                                                        placeholder="Your message*"
                                                        tabIndex={4}
                                                        aria-required="true"
                                                        defaultValue={""}
                                                    />
                                                </fieldset>
                                                <div className="btn-submit">
                                                    <button className="tf-button style-1" type="submit">
                                                        Send message <i className="icon-arrow-up-right2" />
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /#page */}
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

export default Contact;